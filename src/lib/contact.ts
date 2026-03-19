import { isValidEmail } from "@/lib/validation";

export interface ContactPayload {
    email: string;
    request: string;
}

export interface ContactSubmission extends ContactPayload {
    submissionId: string;
    submittedAt: string;
}

interface ContactActionResult {
    success: boolean;
    message: string;
}

interface GoogleSheetsWebhookResponse {
    success?: boolean;
    message?: string;
    debugId?: string;
    description?: string;
}

function isPlainTextSuccessResponse(body: string) {
    const normalized = body.trim().toLowerCase();
    return normalized === "ok" || normalized === "success";
}

function looksLikeJson(body: string) {
    const trimmed = body.trim();
    return trimmed.startsWith("{") || trimmed.startsWith("[");
}

function getErrorMessage(error: unknown) {
    return error instanceof Error ? error.message : "Unknown error";
}

function validateContactPayload({ email, request }: ContactPayload) {
    if (!email || !request) {
        return "Email and message are required.";
    }

    if (!isValidEmail(email)) {
        return "Please enter a valid email address.";
    }

    return null;
}

export function createContactSubmission({ email, request }: ContactPayload): ContactSubmission {
    return {
        email,
        request,
        submissionId: crypto.randomUUID(),
        submittedAt: new Date().toISOString(),
    };
}

export function isGoogleSheetsConfigured() {
    return Boolean(process.env.GOOGLE_SHEETS_WEBHOOK_URL);
}

export async function sendTelegramMessage({
    email,
    request,
    submissionId,
}: ContactSubmission): Promise<ContactActionResult> {
    const validationError = validateContactPayload({ email, request });

    if (validationError) {
        return { success: false, message: validationError };
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        console.error("Telegram credentials are missing.");
        return { success: false, message: "Server configuration error." };
    }

    const text = `
New note from the studio

ID: ${submissionId}

Email:
${email}

Message:
${request}
    `.trim();

    try {
        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text,
            }),
            cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok || !data.ok) {
            console.error("Telegram delivery failed.", {
                status: response.status,
                description: typeof data?.description === "string" ? data.description : "Unknown Telegram error",
                submissionId,
            });
            return { success: false, message: "Could not send your message." };
        }

        return { success: true, message: "Message sent." };
    } catch (error) {
        console.error("Telegram request failed.", {
            message: getErrorMessage(error),
            submissionId,
        });
        return { success: false, message: "Something went wrong. Please try again." };
    }
}

export async function saveContactSubmissionToGoogleSheets({
    email,
    request,
    submissionId,
    submittedAt,
}: ContactSubmission): Promise<ContactActionResult> {
    const validationError = validateContactPayload({ email, request });

    if (validationError) {
        return { success: false, message: validationError };
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
        console.warn("Google Sheets webhook URL is missing. Skipping sheet write.");
        return { success: true, message: "Google Sheets integration is not configured." };
    }

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                submissionId,
                submittedAt,
                email,
                message: request,
                source: "portfolio-contact-form",
                secret: process.env.GOOGLE_SHEETS_WEBHOOK_SECRET,
            }),
            cache: "no-store",
        });

        const rawBody = await response.text();
        let data: GoogleSheetsWebhookResponse | null = null;
        const plainTextSuccess = rawBody ? isPlainTextSuccessResponse(rawBody) : false;
        const responseKind = rawBody
            ? looksLikeJson(rawBody)
                ? "json"
                : rawBody.trim().startsWith("<")
                    ? "html"
                    : "text"
            : "empty";

        if (rawBody && looksLikeJson(rawBody)) {
            try {
                data = JSON.parse(rawBody) as GoogleSheetsWebhookResponse;
            } catch (error) {
                console.warn("Google Sheets webhook returned invalid JSON.", {
                    message: getErrorMessage(error),
                    submissionId,
                });
            }
        }

        if (!response.ok || (!plainTextSuccess && data?.success === false)) {
            console.error("Google Sheets delivery failed.", {
                status: response.status,
                responseKind,
                message: data?.message ?? (plainTextSuccess ? "Success response" : "Unexpected response"),
                debugId: data?.debugId ?? null,
                submissionId,
            });
            return { success: false, message: "Could not save your message." };
        }

        return { success: true, message: "Saved to Google Sheets." };
    } catch (error) {
        console.error("Google Sheets request failed.", {
            message: getErrorMessage(error),
            submissionId,
        });
        return { success: false, message: "Something went wrong. Please try again." };
    }
}
