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
        <section className="-mt-12 bg-zinc-950/30 px-4 pb-12 pt-2 md:-mt-16 md:pb-14 md:pt-2" id="about">
            <div className="mx-auto max-w-4xl space-y-6">
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-zinc-100">
                        About Me
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
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
                            className="flex items-start gap-4 rounded-xl border border-zinc-800/50 bg-zinc-900/50 p-5"
                        >
                            <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                            <p className="text-zinc-300 leading-7">{principle}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
