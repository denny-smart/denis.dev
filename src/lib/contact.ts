export interface ContactPayload {
    email: string;
    request: string;
}

export async function sendTelegramMessage({ email, request }: ContactPayload) {
    if (!email || !request) {
        return { success: false, message: "Email and message are required." };
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        console.error("Telegram credentials are missing.");
        return { success: false, message: "Server configuration error." };
    }

    const text = `
New note from the studio

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
            console.error("Telegram API error:", data);
            return { success: false, message: "Could not send your message." };
        }

        return { success: true, message: "Message sent." };
    } catch (error) {
        console.error("Error sending Telegram message:", error);
        return { success: false, message: "Something went wrong. Please try again." };
    }
}
