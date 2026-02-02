"use client";

import { motion } from "framer-motion";
import { Shield, Terminal, Activity, ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Hero = () => {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24">
            <div className="z-10 w-full max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-2"
                            >
                                <div className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                </div>
                                <span className="text-sm font-medium tracking-wide text-emerald-500/80">
                                    SYSTEM ACTIVE // AVAILABLE FOR WORK
                                </span>
                            </motion.div>

                            <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-7xl">
                                Secure / <br />
                                Automated / <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                                    Architected
                                </span>
                            </h1>

                            <p className="max-w-md text-lg text-zinc-400 leading-relaxed">
                                Systems Engineer & Automation Specialist focused on Python, security-driven architecture, and algorithmic trading.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button className="group h-12 px-8 text-base">
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button variant="outline" className="h-12 px-8 text-base">
                                Contact Me
                            </Button>
                        </motion.div>

                        {/* Tech Stack/Keywords */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex gap-6 py-4 text-xs font-mono text-zinc-500"
                        >
                            <span>[SECURE_ARCH]</span>
                            <span>[AUTOMATION]</span>
                            <span>[THREAT_INTEL]</span>
                            <span>[ZERO_TRUST]</span>
                        </motion.div>
                    </motion.div>

                    {/* Visual Elements */}
                    <div className="relative hidden lg:block">
                        {/* Abstract visual composition */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative z-10 h-[500px] w-full"
                        >
                            {/* Floating Card 1: Terminal */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute left-10 top-10 w-72"
                            >
                                <Card className="bg-zinc-950/80 backdrop-blur-md border-zinc-800">
                                    <div className="mb-3 flex items-center gap-2 border-b border-zinc-800 pb-2">
                                        <Terminal className="h-4 w-4 text-emerald-500" />
                                        <span className="text-xs font-mono text-zinc-400">system_monitor.sh</span>
                                    </div>
                                    <div className="space-y-1 font-mono text-xs text-emerald-500/80">
                                        <p>$ init secure_protocol</p>
                                        <p className="text-zinc-500">{'>'} Access granted.</p>
                                        <p className="text-zinc-500">{'>'} Loading modules...</p>
                                        <p className="animate-pulse">{'>'} Waiting for input_</p>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Floating Card 2: Security Badge */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute right-10 top-40 w-64"
                            >
                                <Card className="bg-zinc-900/90 border-zinc-800">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-lg bg-emerald-500/10 p-3">
                                            <Shield className="h-8 w-8 text-emerald-500" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">Status: SECURE</h3>
                                            <p className="text-xs text-zinc-400">0 Threats Detected</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Floating Card 3: Activity */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-20 left-20 w-80"
                            >
                                <Card className="border-zinc-800 bg-zinc-950/80">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-mono text-zinc-400">NETWORK TRAFFIC</span>
                                        <Activity className="h-4 w-4 text-emerald-500" />
                                    </div>
                                    <div className="flex items-end gap-1 h-12 w-full">
                                        {[40, 70, 30, 85, 50, 65, 90, 45, 60, 30, 80, 50].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: "10%" }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                                                className="flex-1 bg-zinc-800 rounded-sm hover:bg-emerald-500/50 transition-colors"
                                            />
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>

                        </motion.div>

                        {/* Background Glows */}
                        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};
