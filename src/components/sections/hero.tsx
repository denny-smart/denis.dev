"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { ContactForm } from "@/components/contact-form";

export const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-32 md:pt-36 text-center">

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_38%),linear-gradient(to_bottom,rgba(0,0,0,0.12),rgba(0,0,0,0.45))]" />

            {/* Geometric Grid Background is handled in page.tsx layout, ensuring visibility */}

            <div className="z-10 w-full max-w-5xl relative">

                {/* Floating Cards - Decorative */}
                {/* Card 1: Top Left */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="absolute left-4 top-0 hidden lg:block w-64 xl:-left-2"
                >
                    <Card className="border border-white/15 bg-black/70 p-4 shadow-2xl backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <div className="rounded-full bg-white/12 p-2">
                                <Shield className="h-5 w-5 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-mono text-zinc-300">System Status</p>
                                <p className="text-sm font-bold text-white">SECURE</p>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* Card 2: Bottom Right */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-2 right-4 hidden lg:block w-72 xl:-right-2"
                >
                    <Card className="border border-white/15 bg-black/70 p-4 shadow-2xl backdrop-blur-md">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono text-zinc-300">ACTIVITY_LOG</span>
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                            <motion.div
                                className="h-full bg-emerald-400"
                                animate={{ width: ["0%", "40%", "70%", "100%"] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </div>
                    </Card>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center rounded-full border border-white/15 bg-black/55 px-4 py-1.5 backdrop-blur-sm"
                    >
                        <span className="text-sm font-medium text-zinc-100">Denis | System Architect</span>
                    </motion.div>

                    {/* Headline */}
                    <h1 className="mx-auto max-w-5xl text-5xl font-extrabold tracking-tight text-white leading-[1.05] sm:text-7xl md:text-8xl">
                        Building <span className="text-emerald-400">systems</span> that <br className="hidden sm:block" />
                        support real <br className="hidden sm:block" />
                        <span className="text-white">business needs.</span>
                    </h1>

                    {/* Description */}
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
                        Designing resilient automated architectures and offensive-grade security solutions for modern financial infrastructure.
                    </p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <a
                            href="https://github.com/denny-smart"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-14 px-8 rounded-full bg-white text-black hover:bg-zinc-200 text-lg font-medium transition-transform active:scale-95 inline-flex items-center justify-center"
                        >
                            View Projects
                        </a>
                        <Button
                            variant="outline"
                            onClick={() => setIsModalOpen(true)}
                            className="h-14 rounded-full border-white/40 px-8 text-lg font-medium text-white hover:bg-white/10 transition-transform active:scale-95"
                        >
                            Contact Me
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ContactForm onSuccess={() => setIsModalOpen(false)} />
            </Modal>
        </section>
    );
};
