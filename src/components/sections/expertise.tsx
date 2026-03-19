"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Shield, Terminal } from "lucide-react";

const expertiseData = [
    {
        title: "Secure Web Development",
        icon: Shield,
        description: "I build secure web applications with strong authentication, clear authorization, data protection, and safe API design based on OWASP best practices.",
        tags: ["OWASP", "FastAPI", "Secure APIs"]
    },
    {
        title: "Automated Trading Systems",
        icon: Terminal,
        description: "I develop automated trading systems and financial tools with clear strategy logic, market analysis, and practical risk management.",
        tags: ["Algo Trading", "Risk Management", "Financial Tools"]
    },
    {
        title: "Backend Architecture",
        icon: Server,
        description: "I design scalable backend systems with Python, Django, FastAPI, PostgreSQL, and async workflows that support performance, reliability, and growth.",
        tags: ["System Design", "Scalable APIs", "PostgreSQL"]
    },
    {
        title: "Cybersecurity Practices",
        icon: Cpu,
        description: "I use cybersecurity principles such as threat modeling, vulnerability assessment, and defensive coding to help teams build safer products.",
        tags: ["Cybersecurity", "Threat Modeling", "Defensive Coding"]
    }
];

export const Expertise = () => {
    const spring = { type: "spring" as const, stiffness: 100, damping: 15, mass: 0.8 };
    const surfaces = [
        "bg-[var(--surface)]",
        "bg-[var(--surface-soft)]",
        "bg-[var(--surface-muted)]",
        "bg-[rgb(37_48_43)]"
    ];

    return (
        <section className="relative z-10 scroll-mt-28 px-4 pb-0 pt-16 md:scroll-mt-32 md:pb-0 md:pt-20" id="expertise">
            <div className="mx-auto max-w-6xl space-y-8 md:space-y-12">
                <div className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-end">
                    <div className="space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground-muted)]">
                            Expertise
                        </p>
                        <h2 className="text-4xl text-foreground sm:text-5xl">
                            Core skills for secure, scalable digital products.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-lg leading-8 text-foreground/74 md:justify-self-end">
                        I focus on secure web development, backend architecture, automated trading systems, and practical cybersecurity for modern businesses.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {expertiseData.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ ...spring, delay: i * 0.08 }}
                            viewport={{ once: true }}
                        >
                            <article className={`h-full rounded-[1.85rem] border border-[color:var(--stroke-subtle)] ${surfaces[i % surfaces.length]} p-7 shadow-[10px_10px_0_var(--shadow-hard)]`}>
                                <div className="space-y-6">
                                    <div className="inline-flex rounded-[1rem] border border-[color:var(--stroke-subtle)] bg-[rgb(255_244_234_/_0.045)] p-3 text-[color:var(--accent-primary)]">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="max-w-xl leading-8 text-foreground/78">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-[color:var(--stroke-subtle)] bg-[rgb(255_244_234_/_0.05)] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-subtle)]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
