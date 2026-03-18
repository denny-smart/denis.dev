"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Systems Secured", value: "50+" },
    { label: "Uptime Maintained", value: "99.9%" },
    { label: "Vulnerabilities Patched", value: "200+" },
    { label: "Automation Modules", value: "15+" },
];

export const Stats = () => {
    return (
        <section className="relative z-10 px-4 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-white/10 bg-black/55 px-5 py-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                        >
                            <h3 className="text-4xl font-bold tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.18)] sm:text-5xl">
                                {stat.value}
                            </h3>
                            <p className="mt-3 text-sm font-medium uppercase tracking-[0.24em] text-zinc-300">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
