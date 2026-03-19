"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleDot, Printer, Type } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

const commands = {
    help: "Try: help, email, socials, status, clear",
    email: "ownerkirimi@gmail.com",
    socials: "GitHub: github.com/denny-smart | LinkedIn: linkedin.com/in/denis-kirimi",
    status: "I'm here and ready to hear about your project, question, or idea.",
    clear: "CLEAR_ACTION",
};

export const ContactTerminal = () => {
    const spring = { type: "spring" as const, stiffness: 100, damping: 15, mass: 0.8 };
    const panelEase = [0.22, 1, 0.36, 1] as const;
    const [mode, setMode] = useState<"terminal" | "form">("terminal");
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([
        "Welcome. I'm glad you're here.",
        "Type 'help' to see a few simple ways to reach me.",
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const logRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        logRef.current?.scrollTo({
            top: logRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [history]);

    const handleCommand = (e: FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        if (!cmd) return;

        const response = commands[cmd as keyof typeof commands];

        if (response === "CLEAR_ACTION") {
            setHistory([]);
        } else if (response) {
            setHistory((prev) => [...prev, `print> ${input}`, response]);
        } else {
            setHistory((prev) => [...prev, `print> ${input}`, `I don't recognize '${cmd}' yet. Try 'help'.`]);
        }

        setInput("");
    };

    const focusInput = () => {
        if (mode === "terminal") {
            inputRef.current?.focus();
        }
    };

    return (
        <section className="-mt-8 scroll-mt-28 px-4 pb-24 pt-0 md:-mt-10 md:scroll-mt-32" id="contact">
            <div className="mx-auto w-full max-w-5xl space-y-4 md:space-y-5">
                <div className="space-y-2.5 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground-muted)]">
                        Contact
                    </p>
                    <h2 className="text-4xl text-foreground sm:text-5xl">
                        A warmer line of communication.
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg leading-8 text-foreground/74">
                        The terminal now feels closer to a desk object than a hacking prop: amber ink, forest-green glass, and responses that land with a little more printed weight.
                    </p>
                    <div className="flex justify-center gap-4 pt-1">
                        <button
                            onClick={() => setMode("terminal")}
                            className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${mode === "terminal"
                                ? "border-[color:var(--stroke-subtle)] bg-[rgb(255_244_234_/_0.06)] text-foreground"
                                : "border-[color:var(--stroke-subtle)] bg-transparent text-[color:var(--foreground-muted)] hover:text-foreground"
                                }`}
                        >
                            Desk Terminal
                        </button>
                        <button
                            onClick={() => setMode("form")}
                            className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${mode === "form"
                                ? "border-[color:var(--stroke-subtle)] bg-[rgb(255_244_234_/_0.06)] text-foreground"
                                : "border-[color:var(--stroke-subtle)] bg-transparent text-[color:var(--foreground-muted)] hover:text-foreground"
                                }`}
                        >
                            Written Note
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {mode === "terminal" ? (
                        <motion.div
                            key="terminal"
                            initial={{ opacity: 0, y: 20, scale: 0.985, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -18, scale: 0.98, filter: "blur(10px)" }}
                            transition={{
                                opacity: { duration: 0.24, ease: panelEase },
                                y: { duration: 0.28, ease: panelEase },
                                scale: { duration: 0.28, ease: panelEase },
                                filter: { duration: 0.3, ease: panelEase },
                            }}
                        >
                            <Card
                                noPadding
                                className="overflow-hidden rounded-[2rem] border-[color:var(--stroke-subtle)] bg-[var(--terminal-bg)] font-mono text-sm text-[color:var(--terminal-text)] shadow-[0_24px_50px_rgba(7,12,9,0.28),inset_0_1px_0_rgba(255,236,204,0.08)]"
                            >
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(to_bottom,rgba(255,236,204,0.08)_0px,rgba(255,236,204,0.08)_1px,transparent_1px,transparent_4px)]" />
                                    <div className="flex items-center gap-3 border-b border-[color:var(--stroke-subtle)] bg-[rgb(255_244_234_/_0.04)] px-5 py-3">
                                        <Printer className="h-4 w-4 text-[color:var(--terminal-muted)]" />
                                        <span className="text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--terminal-muted)]">
                                            Contact Notes
                                        </span>
                                        <div className="ml-auto flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-[color:var(--terminal-muted)]">
                                            <CircleDot className="h-3.5 w-3.5" />
                                            online
                                        </div>
                                    </div>

                                    <div
                                        ref={logRef}
                                        className="relative h-[380px] cursor-text overflow-y-auto px-5 py-6"
                                        onClick={focusInput}
                                    >
                                        <div className="space-y-3">
                                            {history.map((line, i) => (
                                                <motion.div
                                                    key={`${i}-${line}`}
                                                    initial={{ opacity: 0, y: 8, filter: "blur(4px)", scaleY: 1.05 }}
                                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)", scaleY: 1 }}
                                                    transition={spring}
                                                    className={line.startsWith("print>")
                                                        ? "text-[color:var(--terminal-muted)]"
                                                        : "text-[color:var(--terminal-text)] drop-shadow-[0_1px_0_rgba(250,231,194,0.12)]"}
                                                >
                                                    {line}
                                                </motion.div>
                                            ))}
                                        </div>

                                        <form onSubmit={handleCommand} className="mt-5 border-t border-[color:var(--stroke-subtle)] pt-4">
                                            <div className="mb-3 flex items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.18em] text-[color:var(--terminal-muted)]">
                                                <div className="flex items-center gap-2">
                                                    <Type className="h-4 w-4" />
                                                    <span>Command Prompt</span>
                                                </div>
                                                <span>Type and press Enter</span>
                                            </div>

                                            <div className="flex items-center gap-3 rounded-[1rem] border border-[rgba(255,240,207,0.18)] bg-[rgba(255,244,234,0.05)] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,244,234,0.06)]">
                                                <span className="rounded-md bg-[rgba(239,201,141,0.22)] px-2.5 py-1 text-[0.92rem] font-semibold tracking-[0.04em] text-[color:var(--terminal-text)]">
                                                    print&gt;
                                                </span>
                                                <input
                                                    ref={inputRef}
                                                    type="text"
                                                    value={input}
                                                    onChange={(e) => setInput(e.target.value)}
                                                    className="w-full border-none bg-transparent text-[color:var(--terminal-text)] outline-none placeholder:text-[rgba(255,240,207,0.82)]"
                                                    placeholder="Type here: email, socials, or status"
                                                    autoFocus
                                                />
                                                <motion.div
                                                    animate={{ opacity: [1, 0.25, 1] }}
                                                    transition={{ duration: 1.2, repeat: Infinity }}
                                                    className="h-5 w-2 rounded-sm bg-[color:var(--terminal-text)]"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 24, scale: 0.985, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -18, scale: 0.98, filter: "blur(10px)" }}
                            transition={{
                                opacity: { duration: 0.26, ease: panelEase },
                                y: { duration: 0.32, ease: panelEase },
                                scale: { duration: 0.32, ease: panelEase },
                                filter: { duration: 0.34, ease: panelEase },
                            }}
                        >
                            <ContactForm variant="trigger" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
