"use server";

export async function sendTelegramMessage(formData: FormData) {
    const email = formData.get("email");
    const request = formData.get("request");

    if (!email || !request) {
        return { success: false, message: "Email and Request are required" };
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        console.error("Telegram credentials not missing");
        return { success: false, message: "Server configuration error" };
    }

    const text = `
🚀 *New Secure Transmission*

📧 *Email:* \`${email}\`
📝 *Request:*
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
                text: text,
                parse_mode: "Markdown",
            }),
        });

        const data = await response.json();

        if (!data.ok) {
            console.error("Telegram API Error:", data);
            return { success: false, message: "Failed to send message" };
        }

        return { success: true, message: "Transmission Successful" };
    } catch (error) {
        console.error("Error sending Telegram message:", error);
        return { success: false, message: "System Error" };
    }
}
