"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const principles = [
    "I build tools that feel safe, useful, and easy to work with.",
    "I try to spot risks early so teams can move with more confidence.",
    "I use automation to save time, reduce manual work, and avoid mistakes.",
    "I believe the best systems are clear, reliable, and easy to maintain."
];

export const About = () => {
    const spring = { type: "spring" as const, stiffness: 100, damping: 15, mass: 0.8 };

    return (
        <section className="relative z-10 scroll-mt-28 px-4 pb-16 pt-12 md:scroll-mt-32 md:pb-20 md:pt-18" id="about">
            <div className="mx-auto max-w-6xl space-y-10 md:space-y-14">
                <div className="grid gap-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:items-start">
                    <div className="space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground-muted)]">
                            About
                        </p>
                        <h2 className="text-4xl text-foreground sm:text-5xl">
                            Technical work, shaped around real people.
                        </h2>
                    </div>
                    <div className="space-y-5">
                        <p className="max-w-3xl text-lg leading-8 text-foreground/76">
                            I build reliable digital products with a strong focus on clarity. My work sits across backend systems, automation, and technical problem-solving, but the goal is always simple: create tools that are powerful, practical, and easy for people to trust.
                        </p>
                        <p className="max-w-2xl text-sm uppercase tracking-[0.24em] text-[color:var(--foreground-muted)]">
                            I care about how systems feel in real use, not just how they look on a diagram.
                        </p>
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {principles.map((principle, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ...spring, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-5 rounded-[1.6rem] border border-[color:var(--stroke-subtle)] bg-[var(--surface-soft)] p-6 shadow-[8px_8px_0_var(--shadow-hard)]"
                        >
                            <div className="mt-1 rounded-[1rem] border border-[color:var(--stroke-subtle)] bg-[rgb(255_244_234_/_0.04)] p-2.5">
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-[color:var(--accent-primary)]" />
                            </div>
                            <p className="max-w-sm leading-8 text-foreground/80">{principle}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
