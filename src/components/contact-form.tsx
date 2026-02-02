"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { sendTelegramMessage } from "@/app/actions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
    onSuccess?: () => void;
}

export const ContactForm = ({ onSuccess }: ContactFormProps = {}) => {
    const [pending, setPending] = useState(false);
    const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

    async function handleSubmit(formData: FormData) {
        setPending(true);
        setStatus(null);

        const result = await sendTelegramMessage(formData);

        setStatus(result);
        setPending(false);

        if (result.success && onSuccess) {
            setTimeout(() => onSuccess(), 1500);
        }
    }

    return (
        <Card className="min-h-[400px] bg-black border-zinc-800 p-6 flex flex-col justify-center shadow-2xl shadow-emerald-900/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            <h3 className="text-xl font-bold text-emerald-500 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Secure Transmission Channel
            </h3>

            {status?.success ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                >
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Transmission Received</h4>
                    <p className="text-zinc-400">Your message has been encrypted and sent to the secure server.</p>
                    <Button
                        variant="outline"
                        className="mt-6 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900"
                        onClick={() => setStatus(null)}
                    >
                        Send Another
                    </Button>
                </motion.div>
            ) : (
                <form action={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-400">
                            Source ID (Email)
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="agent@example.com"
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="request" className="text-sm font-medium text-zinc-400">
                            Payload (Message)
                        </label>
                        <textarea
                            required
                            name="request"
                            id="request"
                            rows={4}
                            placeholder="Enter mission briefing..."
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={pending}
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-6 mt-4"
                    >
                        {pending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Transmitting...
                            </>
                        ) : (
                            <>
                                <Send className="mr-2 h-4 w-4" />
                                Initiate Transfer
                            </>
                        )}
                    </Button>

                    {status && !status.success && (
                        <p className="text-red-500 text-sm text-center mt-2">
                            {status.message}
                        </p>
                    )}
                </form>
            )}
        </Card>
    );
};
