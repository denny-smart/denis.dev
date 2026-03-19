"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Years Building", value: "5+" },
    { label: "Production Systems", value: "10+" },
    { label: "Workflows Automated", value: "20+" },
    { label: "Reliability Focus", value: "24/7" },
];

export const Stats = () => {
    const spring = { type: "spring" as const, stiffness: 100, damping: 15, mass: 0.8 };

    return (
        <section className="relative z-10 px-4 py-12 md:py-16">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ...spring, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="rounded-[1.7rem] border border-[color:var(--stroke-subtle)] bg-[var(--surface-soft)] px-5 py-6 text-center shadow-[8px_8px_0_var(--shadow-hard)]"
                        >
                            <h3 className="text-4xl text-foreground sm:text-5xl">
                                {stat.value}
                            </h3>
                            <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--foreground-muted)]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
