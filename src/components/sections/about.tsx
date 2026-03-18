"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const principles = [
    "I build tools that are safe and easy to use.",
    "I look for risks early, not after launch.",
    "I use automation to save time and reduce mistakes.",
    "I keep systems simple, reliable, and clear."
];

export const About = () => {
    return (
        <section className="relative z-10 bg-zinc-950/70 px-4 pb-16 pt-12 md:pb-16 md:pt-16" id="about">
            <div className="mx-auto max-w-4xl space-y-6">
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-zinc-100">
                        About Me
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-200">
                        I build secure, reliable digital products. My work focuses on backend systems, automation, and security,
                        with a simple goal: create tools that work well and protect people.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {principles.map((principle, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 rounded-xl border border-white/10 bg-black/65 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
                        >
                            <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-400" />
                            <p className="leading-7 text-zinc-100">{principle}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
