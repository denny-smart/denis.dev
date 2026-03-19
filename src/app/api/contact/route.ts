import { NextResponse } from "next/server";
import {
    createContactSubmission,
    isGoogleSheetsConfigured,
    saveContactSubmissionToGoogleSheets,
    sendTelegramMessage,
} from "@/lib/contact";
import { isValidEmail } from "@/lib/validation";

export const runtime = "nodejs";

function normalizeSettledResult(
    label: string,
    result: PromiseSettledResult<{ success: boolean; message: string }>,
) {
    if (result.status === "fulfilled") {
        return result.value;
    }

    console.error(`${label} delivery failed with an exception:`, result.reason);
    return { success: false, message: `Could not complete the ${label} delivery.` };
}

function buildFailureMessage(telegramOk: boolean, sheetsOk: boolean) {
    if (telegramOk && !sheetsOk) {
        return "Your message was sent, but it could not be saved to Google Sheets.";
    }

    if (!telegramOk && sheetsOk) {
        return "Your message was saved, but the Telegram notification could not be sent.";
    }

    return "Your message could not be delivered. Please try again.";
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const email = typeof body?.email === "string" ? body.email.trim() : "";
        const message = typeof body?.request === "string" ? body.request.trim() : "";
        const sheetsEnabled = isGoogleSheetsConfigured();

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { success: false, message: "Please enter a valid email address." },
                { status: 400 },
            );
        }

        if (!message) {
            return NextResponse.json(
                { success: false, message: "Please enter a message before sending." },
                { status: 400 },
            );
        }

        const submission = createContactSubmission({ email, request: message });
        const jobs = [
            {
                label: "Telegram",
                job: sendTelegramMessage(submission),
            },
            ...(sheetsEnabled
                ? [
                      {
                          label: "Google Sheets",
                          job: saveContactSubmissionToGoogleSheets(submission),
                      },
                  ]
                : []),
        ];

        const settledResults = await Promise.allSettled(jobs.map(({ job }) => job));
        const normalizedResults = settledResults.map((result, index) => {
            const job = jobs[index];
            return normalizeSettledResult(job ? job.label : "Unknown", result);
        });

        const telegramResult = normalizedResults[0] ?? {
            success: false,
            message: "Telegram delivery did not run.",
        };
        const sheetsResult = normalizedResults[1] ?? { success: true, message: "Google Sheets skipped." };
        const success = telegramResult.success && sheetsResult.success;

        if (!success) {
            return NextResponse.json(
                {
                    success: false,
                    message: buildFailureMessage(telegramResult.success, sheetsResult.success),
                },
                { status: 502 },
            );
        }

        return NextResponse.json({
            success: true,
            message: sheetsEnabled
                ? "Message sent and saved."
                : "Message sent.",
        });
    } catch (error) {
        console.error("Invalid contact request payload:", error);
        return NextResponse.json(
            { success: false, message: "Invalid request payload." },
            { status: 400 },
        );
    }
}
