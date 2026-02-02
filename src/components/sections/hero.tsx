"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Terminal, ArrowRight, Activity, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { ContactForm } from "@/components/contact-form";

export const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">

            {/* Geometric Grid Background is handled in page.tsx layout, ensuring visibility */}

            <div className="z-10 w-full max-w-5xl relative">

                {/* Floating Cards - Decorative */}
                {/* Card 1: Top Left */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="absolute -top-20 left-0 hidden lg:block w-64"
                >
                    <Card className="bg-black/40 backdrop-blur-md border border-white/10 p-4 shadow-2xl">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-white/10">
                                <Shield className="h-5 w-5 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-mono text-zinc-400">System Status</p>
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
                    className="absolute -bottom-10 right-0 hidden lg:block w-72"
                >
                    <Card className="bg-black/40 backdrop-blur-md border border-white/10 p-4 shadow-2xl">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono text-zinc-500">ACTIVITY_LOG</span>
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        </div>
                        <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-white"
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
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
                    >
                        <span className="text-sm font-medium text-zinc-300">Denis | Security Architect</span>
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl max-w-4xl mx-auto leading-[1.1]">
                        He understands <br className="hidden sm:block" />
                        <span className="text-zinc-500">systems</span> as well as <br className="hidden sm:block" />
                        <span className="text-white">business.</span>
                    </h1>

                    {/* Description */}
                    <p className="mx-auto max-w-xl text-lg text-zinc-400 md:text-xl leading-relaxed">
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
                            className="h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/10 text-lg font-medium transition-transform active:scale-95"
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
