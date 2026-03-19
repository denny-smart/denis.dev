"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Loader2, Mail, MessageSquare, Send, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { isValidEmail } from "@/lib/validation";

interface ContactFormProps {
    onSuccess?: () => void;
    variant?: "inline" | "trigger";
}

export const ContactForm = ({ onSuccess, variant = "inline" }: ContactFormProps = {}) => {
    const [pending, setPending] = useState(false);
    const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [emailError, setEmailError] = useState<string | null>(null);
    const spring = { type: "spring" as const, stiffness: 100, damping: 15, mass: 0.8 };
    const ease = [0.22, 1, 0.36, 1] as const;
    const floatEase = [0.37, 0, 0.18, 1] as const;
    const triggerSurface =
        "group relative isolate w-full cursor-pointer overflow-hidden rounded-[1.95rem_1.55rem_2.15rem_1.7rem] border border-[color:var(--stroke-subtle)] bg-[linear-gradient(145deg,rgba(67,83,76,0.96),rgba(35,47,42,0.88))] p-6 text-left shadow-[0_28px_70px_rgba(10,14,12,0.24),0_0_0_1px_rgba(255,244,234,0.04),inset_0_1px_0_rgba(255,248,237,0.18),inset_0_-12px_24px_rgba(12,15,13,0.12)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-500 hover:border-[rgba(223,132,91,0.34)] hover:shadow-[0_36px_86px_rgba(10,14,12,0.3),0_0_0_1px_rgba(223,132,91,0.14),0_0_46px_rgba(223,132,91,0.16),inset_0_1px_0_rgba(255,248,237,0.22)] md:p-8";
    const modalSurface =
        "relative mx-auto flex w-full max-w-4xl justify-center";

    useEffect(() => {
        if (variant !== "trigger") return;

        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen, variant]);

    useEffect(() => {
        if (variant !== "trigger" || !isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, variant]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const email = formData.get("email");
        const request = formData.get("request");

        const payload = {
            email: typeof email === "string" ? email.trim() : "",
            request: typeof request === "string" ? request.trim() : "",
        };

        if (!isValidEmail(payload.email)) {
            setEmailError("Please enter a valid email address.");
            setStatus(null);
            return;
        }

        setEmailError(null);
        setPending(true);
        setStatus(null);

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

            if (variant === "trigger") {
                setTimeout(() => setIsOpen(false), 1500);
            }
        }
    }

    const formCard = (
        <motion.div
            initial={{ opacity: 0, y: variant === "trigger" ? 0 : 28, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: variant === "trigger" ? 0 : [0, -10, 0], scale: 1, filter: "blur(0px)" }}
            transition={{
                opacity: { duration: 0.38, ease },
                filter: { duration: 0.42, ease },
                scale: { duration: 0.38, ease },
                y: variant === "trigger"
                    ? { duration: 0.38, ease }
                    : { duration: 8.2, repeat: Infinity, ease: floatEase },
            }}
        >
            <Card
                disableHoverEffect
                hideBottomAccent
                className="relative flex min-h-[420px] flex-col justify-center overflow-hidden border-[color:var(--stroke-subtle)] bg-[var(--surface)] p-6 sm:p-8"
            >
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 top-10 h-32 w-32 rounded-full bg-[rgba(223,132,91,0.16)] blur-3xl"
                    animate={{ x: [0, -10, 0], y: [0, 10, 0], opacity: [0.38, 0.55, 0.38] }}
                    transition={{ duration: 7.5, repeat: Infinity, ease: floatEase }}
                />
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-10 bottom-8 h-24 w-24 rounded-full bg-[rgba(235,199,132,0.1)] blur-3xl"
                    animate={{ x: [0, 8, 0], y: [0, -8, 0], opacity: [0.2, 0.34, 0.2] }}
                    transition={{ duration: 9.2, repeat: Infinity, ease: floatEase }}
                />
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-[rgba(200,115,77,0.55)] to-transparent" />

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...spring, delay: 0.06 }}
                    className="mb-8 space-y-3"
                >
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
                </motion.div>

                <AnimatePresence mode="wait">
                    {status?.success ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 20, scale: 0.96, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -14, scale: 0.98, filter: "blur(8px)" }}
                            transition={spring}
                            className="py-8 text-center"
                        >
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(223_132_91_/_0.18)] text-[color:var(--accent-primary)] shadow-[0_0_28px_rgba(223,132,91,0.18)]">
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
                        <motion.form
                            key="form"
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                            transition={{ ...spring, delay: 0.08 }}
                            className="space-y-5"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ...spring, delay: 0.12 }}
                                className="space-y-2"
                            >
                                <label htmlFor="email" className="text-sm font-medium text-foreground/88">
                                    Email address
                                </label>
                                <div className="relative">
                                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--foreground-muted)]" />
                                    <input
                                        required
                                        type="email"
                                        inputMode="email"
                                        autoComplete="email"
                                        name="email"
                                        id="email"
                                        placeholder="you@example.com"
                                        aria-invalid={emailError ? "true" : "false"}
                                        aria-describedby="email-help email-error"
                                        onChange={(event) => {
                                            if (!emailError) return;

                                            if (isValidEmail(event.currentTarget.value)) {
                                                setEmailError(null);
                                            }
                                        }}
                                        onBlur={(event) => {
                                            const value = event.currentTarget.value.trim();

                                            if (!value) {
                                                setEmailError(null);
                                                return;
                                            }

                                            setEmailError(isValidEmail(value) ? null : "Please enter a valid email address.");
                                        }}
                                        className={`w-full rounded-[1.2rem] border bg-[rgb(255_244_234_/_0.04)] py-3 pl-11 pr-4 text-foreground placeholder:text-[color:var(--foreground-muted)] transition-colors focus:bg-[rgb(255_244_234_/_0.06)] focus:outline-none ${
                                            emailError
                                                ? "border-[rgba(200,115,77,0.7)] focus:border-[rgba(200,115,77,0.82)]"
                                                : "border-[color:var(--stroke-subtle)] focus:border-accent/55"
                                        }`}
                                    />
                                </div>
                                <p id="email-help" className="text-xs text-[color:var(--foreground-muted)]">I&apos;ll only use this to reply to your message.</p>
                                {emailError && (
                                    <p id="email-error" className="text-xs text-[color:var(--accent-primary)]">
                                        {emailError}
                                    </p>
                                )}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ...spring, delay: 0.18 }}
                                className="space-y-2"
                            >
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
                                        className="w-full resize-none rounded-[1.2rem] border border-[color:var(--stroke-subtle)] bg-[rgb(255_244_234_/_0.04)] py-3 pl-11 pr-4 text-foreground placeholder:text-[color:var(--foreground-muted)] transition-colors focus:border-accent/55 focus:bg-[rgb(255_244_234_/_0.06)] focus:outline-none"
                                    />
                                </div>
                                <p className="text-xs text-[color:var(--foreground-muted)]">Keep it short if you like. A few lines is plenty.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ...spring, delay: 0.24 }}
                            >
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
                            </motion.div>

                            {status && !status.success && (
                                <p className="mt-2 text-center text-sm text-[color:var(--accent-primary)]">
                                    {status.message}
                                </p>
                            )}
                        </motion.form>
                    )}
                </AnimatePresence>
            </Card>
        </motion.div>
    );

    if (variant === "inline") {
        return formCard;
    }

    return (
        <>
            <motion.button
                type="button"
                onClick={() => setIsOpen(true)}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={spring}
                className={triggerSurface}
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(223,132,91,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(235,199,132,0.16),transparent_24%),radial-gradient(circle_at_top_left,rgba(255,244,234,0.14),transparent_30%),linear-gradient(135deg,rgba(255,244,234,0.08),rgba(255,244,234,0.02))]" />
                <div className="pointer-events-none absolute inset-0 opacity-50 [background:linear-gradient(rgba(255,244,234,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,244,234,0.04)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(223,132,91,0.58)] to-transparent" />
                <div className="pointer-events-none absolute left-0 top-0 h-16 w-16 rounded-tl-[1.95rem] border-l-2 border-t-2 border-[rgba(223,132,91,0.34)] transition-colors group-hover:border-[rgba(223,132,91,0.58)]" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 rounded-br-[1.7rem] border-b-2 border-r-2 border-[rgba(235,199,132,0.32)] transition-colors group-hover:border-[rgba(235,199,132,0.54)]" />
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 top-8 h-32 w-32 rounded-full bg-[rgba(223,132,91,0.18)] blur-3xl"
                    animate={{ x: [0, -10, 0], y: [0, 10, 0], opacity: [0.32, 0.5, 0.32] }}
                    transition={{ duration: 7.2, repeat: Infinity, ease: floatEase }}
                />
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-10 bottom-6 h-24 w-24 rounded-full bg-[rgba(235,199,132,0.14)] blur-3xl"
                    animate={{ x: [0, 8, 0], y: [0, -8, 0], opacity: [0.2, 0.34, 0.2] }}
                    transition={{ duration: 8.6, repeat: Infinity, ease: floatEase }}
                />

                <div className="relative z-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--stroke-subtle)] bg-[rgb(255_244_234_/_0.05)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--foreground-subtle)]">
                            <span className="h-2 w-2 rounded-full bg-[color:var(--accent-primary)] animate-pulse" />
                            Written Note
                        </div>
                        <div className="space-y-3">
                            <h3 className="max-w-[14ch] text-3xl text-foreground sm:text-4xl">
                                Open the floating contact form.
                            </h3>
                            <p className="max-w-2xl text-base leading-7 text-foreground/76">
                                Click once and the full form lifts into a centered overlay, mirroring the landing page video card interaction.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 md:items-end">
                        <div className="rounded-full border border-[rgba(223,132,91,0.24)] bg-[rgba(223,132,91,0.1)] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-primary)]">
                            Click to float
                        </div>
                        <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--stroke-subtle)] bg-[rgb(255_244_234_/_0.08)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:border-[rgba(223,132,91,0.34)]">
                            Open Form
                            <ArrowUpRight className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.24, ease }}
                        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(255,244,234,0.08),transparent_28%),rgba(10,14,12,0.76)] px-4 pb-6 pt-6 backdrop-blur-md md:items-center md:p-6"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ duration: 0.32, ease }}
                            className={modalSurface}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <motion.div
                                aria-hidden="true"
                                className="pointer-events-none absolute right-4 top-8 h-40 w-40 rounded-full bg-[rgba(223,132,91,0.18)] blur-3xl"
                                animate={{ x: [0, -12, 0], y: [0, 10, 0], opacity: [0.28, 0.42, 0.28] }}
                                transition={{ duration: 8, repeat: Infinity, ease: floatEase }}
                            />
                            <motion.div
                                aria-hidden="true"
                                className="pointer-events-none absolute left-8 bottom-8 h-28 w-28 rounded-full bg-[rgba(235,199,132,0.14)] blur-3xl"
                                animate={{ x: [0, 10, 0], y: [0, -10, 0], opacity: [0.18, 0.3, 0.18] }}
                                transition={{ duration: 9.4, repeat: Infinity, ease: floatEase }}
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                aria-label="Close contact form"
                                className="absolute right-3 top-3 z-10 rounded-full border border-[color:var(--stroke-subtle)] bg-[rgb(37_49_44_/_0.9)] p-2 text-foreground shadow-[0_12px_32px_rgba(10,14,12,0.24)] transition-colors hover:border-[rgba(223,132,91,0.34)] hover:bg-[rgb(49_64_58_/_0.94)]"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="relative z-10 w-full max-h-[calc(100vh-3rem)] overflow-x-hidden overflow-y-auto md:max-h-[90vh]">
                                {formCard}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
