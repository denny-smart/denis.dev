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
        <section className="py-24 px-4">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
                                {stat.value}
                            </h3>
                            <p className="mt-2 text-sm font-medium uppercase tracking-widest text-zinc-500">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
