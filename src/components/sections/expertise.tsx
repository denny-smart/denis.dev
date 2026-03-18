"use client";

import { motion } from "framer-motion";
import { Shield, Terminal, Server, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

const expertiseData = [
    {
        title: "Secure Web Systems",
        icon: Shield,
        description: "Designing and implementing web applications with valid authentication, authorization, and data protection. Focus on OWASP Top 10 mitigation and secure API design.",
        tags: ["OWASP", "FastAPI", "AuthZ/N"]
    },
    {
        title: "Automated Trading & Financial Systems",
        icon: Terminal,
        description: "Development of algorithmic trading bots and financial analysis tools with real-world strategy implementation and strict risk management logic.",
        tags: ["Algo Trading", "Risk Mgmt", "Low Latency"]
    },
    {
        title: "Backend Architecture",
        icon: Server,
        description: "Building scalable backends that handle heavy loads. Leveraging Python (Django/FastAPI), PostgreSQL, and asynchronous processing for high performance.",
        tags: ["System Design", "Microservices", "PostgreSQL"]
    },
    {
        title: "Security Awareness",
        icon: Cpu,
        description: "Applying offensive security knowledge to build better defenses. Vulnerability assessment, threat modeling, and defensive coding practices.",
        tags: ["Ethical Hacking", "Threat Modeling", "Defense"]
    }
];

export const Expertise = () => {
    return (
        <section className="relative z-10 bg-zinc-950/85 px-4 pb-24 pt-12 md:pb-24 md:pt-16" id="expertise">
            <div className="mx-auto max-w-6xl space-y-6 md:space-y-8">
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-zinc-100">
                        Core Expertise
                    </h2>
                    <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                        Delivering production-grade solutions with a focus on security, reliability, and scale.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {expertiseData.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="group h-full border-white/10 bg-black/75 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.4)] transition-colors hover:border-emerald-500/50">
                                <div className="space-y-4">
                                    <div className="inline-flex rounded-lg bg-emerald-500/12 p-3 text-emerald-400 transition-colors group-hover:text-emerald-300">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]">
                                        {item.title}
                                    </h3>
                                    <p className="leading-relaxed text-zinc-200">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="rounded border border-white/10 bg-zinc-800/90 px-2 py-1 text-xs font-mono text-zinc-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
