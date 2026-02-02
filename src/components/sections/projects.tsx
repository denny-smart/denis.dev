"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Lock, Cpu, Globe, Key, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Zero-Trust Auth System",
        description: "Enterprise-grade authentication implementation using risk-based access control and continuous validation.",
        tags: ["OAuth 2.0", "Python", "Redis", "Security"],
        icon: Lock,
        className: "md:col-span-2",
        color: "text-emerald-500",
    },
    {
        title: "Algorithmic Trading Bot",
        description: "High-frequency trading engine with multi-tier risk management and sub-millisecond execution.",
        tags: ["Rust", "WebSocket", "AWS"],
        icon: Cpu,
        className: "md:col-span-1",
        color: "text-blue-500",
    },
    {
        title: "Secure API Gateway",
        description: "Custom gateway handling 10k+ rps with automated threat detection and rate limiting.",
        tags: ["Go", "gRPC", "Docker"],
        icon: Globe,
        className: "md:col-span-1",
        color: "text-purple-500",
    },
    {
        title: "Key Management Service",
        description: "Distributed key generation and storage system with hardware security module integration.",
        tags: ["Cryptography", "C++", "Linux"],
        icon: Key,
        className: "md:col-span-2",
        color: "text-amber-500",
    },
];

export const Projects = () => {
    return (
        <section className="py-24 px-4" id="work">
            <div className="mx-auto max-w-6xl space-y-12">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-emerald-500">Selected Systems</h2>
                    <p className="text-zinc-400 max-w-2xl">
                        Architectural case studies demonstrating security-first engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={project.className}
                        >
                            <Card className="h-full min-h-[300px] flex flex-col justify-between group cursor-pointer hover:border-zinc-600 transition-colors">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className={`p-3 rounded-lg bg-zinc-900 border border-zinc-800 ${project.color}`}>
                                            <project.icon className="h-6 w-6" />
                                        </div>
                                        <ArrowUpRight className="h-5 w-5 text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-mono rounded bg-zinc-900 text-zinc-500 border border-zinc-800"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
