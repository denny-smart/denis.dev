"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Mail, MessageSquare } from "lucide-react";
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
        <Card className="min-h-[400px] bg-black border-zinc-800 p-6 sm:p-8 flex flex-col justify-center shadow-2xl shadow-emerald-900/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            <div className="mb-8 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Contact
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white sm:text-3xl">Let&apos;s talk</h3>
                    <p className="max-w-md text-sm leading-6 text-zinc-400 sm:text-base">
                        Share a quick note and I&apos;ll get back to you soon. Simple is perfect.
                    </p>
                </div>
            </div>

            {status?.success ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                >
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Message sent</h4>
                    <p className="text-zinc-400">Thanks for reaching out. I&apos;ll reply as soon as I can.</p>
                    <Button
                        variant="outline"
                        className="mt-6 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900"
                        onClick={() => setStatus(null)}
                    >
                        Send another message
                    </Button>
                </motion.div>
            ) : (
                <form action={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-200">
                            Your email
                        </label>
                        <div className="relative">
                            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                            <input
                                required
                                type="email"
                                name="email"
                                id="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/70 py-3 pl-11 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:bg-zinc-900 transition-colors"
                            />
                        </div>
                        <p className="text-xs text-zinc-500">I&apos;ll use this to reply to you directly.</p>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="request" className="text-sm font-medium text-zinc-200">
                            Your message
                        </label>
                        <div className="relative">
                            <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-zinc-500" />
                            <textarea
                                required
                                name="request"
                                id="request"
                                rows={5}
                                placeholder="Tell me a little about what you need help with."
                                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/70 py-3 pl-11 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:bg-zinc-900 transition-colors resize-none"
                            />
                        </div>
                        <p className="text-xs text-zinc-500">You can keep it short. A few lines is enough.</p>
                    </div>

                    <Button
                        type="submit"
                        disabled={pending}
                        className="w-full rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-6 mt-2"
                    >
                        {pending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="mr-2 h-4 w-4" />
                                Send message
                            </>
                        )}
                    </Button>

                    {status && !status.success && (
                        <p className="text-red-400 text-sm text-center mt-2">
                            {status.message}
                        </p>
                    )}
                </form>
            )}
        </Card>
    );
};
