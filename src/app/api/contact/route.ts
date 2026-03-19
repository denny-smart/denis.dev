import { NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/contact";
import { isValidEmail } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const email = typeof body?.email === "string" ? body.email.trim() : "";
        const message = typeof body?.request === "string" ? body.request.trim() : "";

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { success: false, message: "Please enter a valid email address." },
                { status: 400 },
            );
        }

        const result = await sendTelegramMessage({ email, request: message });
        const status = result.success ? 200 : 400;

        return NextResponse.json(result, { status });
    } catch (error) {
        console.error("Invalid contact request payload:", error);
        return NextResponse.json(
            { success: false, message: "Invalid request payload." },
            { status: 400 },
        );
    }
}
