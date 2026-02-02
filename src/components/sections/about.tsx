"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const principles = [
    "Security is not a feature; it's an architecture.",
    "Understanding exploits is the best defense.",
    "Automation scales reliability and correctness.",
    "Default to safety in every design decision."
];

export const About = () => {
    return (
        <section className="py-24 px-4 bg-zinc-950/30" id="about">
            <div className="mx-auto max-w-4xl space-y-16">
                <div className="space-y-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-zinc-100">
                        About Me
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                        I don't just write code; I design systems. My work sits at the intersection of backend performance, security, and automation.
                        Whether it's an automated trading bot or a secure web application, I build with a "security-first" mindset.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {principles.map((principle, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                        >
                            <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                            <p className="text-zinc-300 font-medium">{principle}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
