"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Mail, MessageSquare, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
    onSuccess?: () => void;
}

export const ContactForm = ({ onSuccess }: ContactFormProps = {}) => {
    const [pending, setPending] = useState(false);
    const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
    const spring = { type: "spring" as const, stiffness: 100, damping: 15, mass: 0.8 };

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setPending(true);
        setStatus(null);

        const form = event.currentTarget;
        const formData = new FormData(form);
        const email = formData.get("email");
        const request = formData.get("request");

        const payload = {
            email: typeof email === "string" ? email.trim() : "",
            request: typeof request === "string" ? request.trim() : "",
        };

        let result: { success: boolean; message: string };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            result = await response.json();
        } catch (error) {
            console.error("Error submitting contact form:", error);
            result = { success: false, message: "Something went wrong. Please try again." };
        }

        setStatus(result);
        setPending(false);

        if (result.success) {
            form.reset();

            if (onSuccess) {
                setTimeout(() => onSuccess(), 1500);
            }
        }
    }

    return (
        <Card className="relative flex min-h-[420px] flex-col justify-center overflow-hidden border-[color:var(--stroke-subtle)] bg-[var(--surface)] p-6 sm:p-8">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-[rgba(200,115,77,0.55)] to-transparent" />

            <div className="mb-8 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--stroke-subtle)] bg-[rgb(255_244_234_/_0.04)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--foreground-subtle)]">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--accent-primary)]" />
                    Contact
                </div>
                <div className="space-y-2">
                    <h3 className="text-3xl text-foreground sm:text-4xl">Let&apos;s talk</h3>
                    <p className="max-w-md text-sm leading-7 text-foreground/70 sm:text-base">
                        Share a quick note and I&apos;ll get back to you soon. A simple message is more than enough.
                    </p>
                </div>
            </div>

            {status?.success ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={spring}
                    className="py-8 text-center"
                >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(200_115_77_/_0.14)] text-[color:var(--accent-primary)]">
                        <Send className="h-8 w-8" />
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-foreground">Message sent</h4>
                    <p className="text-foreground/68">Thanks for reaching out. I&apos;ll reply as soon as I can.</p>
                    <Button
                        variant="outline"
                        className="mt-6"
                        onClick={() => setStatus(null)}
                    >
                        Send another message
                    </Button>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground/88">
                            Email address
                        </label>
                        <div className="relative">
                            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--foreground-muted)]" />
                            <input
                                required
                                type="email"
                                name="email"
                                id="email"
                                placeholder="you@example.com"
                                className="w-full rounded-[1.2rem] border border-[color:var(--stroke-subtle)] bg-[rgb(255_244_234_/_0.04)] py-3 pl-11 pr-4 text-foreground placeholder:text-[color:var(--foreground-muted)] focus:border-accent/55 focus:bg-[rgb(255_244_234_/_0.06)] focus:outline-none transition-colors"
                            />
                        </div>
                        <p className="text-xs text-[color:var(--foreground-muted)]">I&apos;ll only use this to reply to your message.</p>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="request" className="text-sm font-medium text-foreground/88">
                            Your message
                        </label>
                        <div className="relative">
                            <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-[color:var(--foreground-muted)]" />
                            <textarea
                                required
                                name="request"
                                id="request"
                                rows={5}
                                placeholder="Tell me a little about what you&apos;re working on or how I can help."
                                className="w-full resize-none rounded-[1.2rem] border border-[color:var(--stroke-subtle)] bg-[rgb(255_244_234_/_0.04)] py-3 pl-11 pr-4 text-foreground placeholder:text-[color:var(--foreground-muted)] focus:border-accent/55 focus:bg-[rgb(255_244_234_/_0.06)] focus:outline-none transition-colors"
                            />
                        </div>
                        <p className="text-xs text-[color:var(--foreground-muted)]">Keep it short if you like. A few lines is plenty.</p>
                    </div>

                    <Button
                        type="submit"
                        disabled={pending}
                        className="mt-2 w-full rounded-[1.2rem] py-6 text-base font-bold"
                    >
                        {pending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="mr-2 h-4 w-4" />
                                Send note
                            </>
                        )}
                    </Button>

                    {status && !status.success && (
                        <p className="mt-2 text-center text-sm text-[color:var(--accent-primary)]">
                            {status.message}
                        </p>
                    )}
                </form>
            )}
        </Card>
    );
};
