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
        <section className="py-24 px-4 bg-zinc-950" id="expertise">
            <div className="mx-auto max-w-6xl space-y-16">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-zinc-100">
                        Core Expertise
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
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
                            <Card className="h-full p-6 bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/50 transition-colors group">
                                <div className="space-y-4">
                                    <div className="inline-flex p-3 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:text-emerald-400 transition-colors">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-100">{item.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
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
