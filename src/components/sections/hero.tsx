"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { ContactForm } from "@/components/contact-form";

export const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const spring = { type: "spring" as const, stiffness: 100, damping: 15, mass: 0.85 };
    const floatEase = [0.37, 0, 0.18, 1] as const;
    const scrollHeroIntoView = () => {
        window.setTimeout(() => {
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 260);
    };
    const closeModalToHero = () => {
        setIsModalOpen(false);
        scrollHeroIntoView();
    };

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 md:px-8 md:pb-24 md:pt-32" id="hero">
            <div className="pointer-events-none absolute left-[4%] top-[14%] h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[10%] right-[4%] h-72 w-72 rounded-full bg-[rgb(185_173_201_/_0.12)] blur-3xl" />

            <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={spring}
                    className="space-y-10 text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...spring, delay: 0.08 }}
                        className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,244,234,0.12)] backdrop-blur-md"
                    >
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/80">
                            Denis Kirimi / Systems Architect
                        </span>
                    </motion.div>

                    <div className="space-y-6">
                        <p className="mx-auto max-w-xl text-sm uppercase tracking-[0.26em] text-muted-foreground lg:mx-0">
                            I design digital systems that feel clear to use, strong under pressure, and ready for real-world growth.
                        </p>

                        <h1 className="mx-auto max-w-[11ch] font-heading text-[clamp(4rem,10vw,8rem)] leading-[0.92] tracking-[-0.06em] text-foreground lg:mx-0">
                            Building{" "}
                            <span className="relative inline-flex px-2 text-accent">
                                <span className="absolute inset-x-1 bottom-2 h-4 rounded-full bg-accent/15 blur-md" />
                                <span className="relative">systems</span>
                            </span>{" "}
                            for real business growth.
                        </h1>

                        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/76 md:text-xl lg:mx-0">
                            I build backend platforms, automation, and system-focused workflows that help teams move faster, reduce risk, and scale with confidence.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...spring, delay: 0.18 }}
                        className="flex flex-col items-center gap-4 pt-2 sm:flex-row lg:items-start lg:justify-start"
                    >
                        <motion.a
                            href="https://github.com/denny-smart"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.985 }}
                            transition={spring}
                            className="inline-flex h-14 items-center gap-2 rounded-full border border-[#f3e8d4]/20 bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[0_18px_38px_rgba(15,18,16,0.18)]"
                        >
                            <span>View Projects</span>
                            <ArrowUpRight className="h-4 w-4" />
                        </motion.a>
                        <Button
                            variant="outline"
                            onClick={() => setIsModalOpen(true)}
                            className="h-14 px-7 text-base"
                        >
                            Contact Me
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...spring, delay: 0.28 }}
                        className="grid gap-3 pt-2 sm:grid-cols-3"
                    >
                        {[
                            "Clear architecture for growing products.",
                            "Automation that saves time without adding fragility.",
                            "Systems that support product momentum.",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-[1.4rem] border border-white/10 bg-white/[0.035] px-4 py-4 text-sm leading-relaxed text-foreground/72 shadow-[inset_0_1px_0_rgba(255,244,234,0.08)] backdrop-blur-sm"
                            >
                                {item}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <div className="relative mx-auto flex w-full max-w-[420px] flex-col gap-5 lg:mx-0 lg:pb-8">
                    <motion.div
                        initial={{ opacity: 0, x: 18, y: 26 }}
                        animate={{ opacity: 1, x: 0, y: [0, -14, 0], rotate: [-1.2, 0.3, -1.2] }}
                        transition={{
                            opacity: { ...spring, delay: 0.2 },
                            x: { ...spring, delay: 0.2 },
                            y: { duration: 8.5, repeat: Infinity, ease: floatEase },
                            rotate: { duration: 8.5, repeat: Infinity, ease: floatEase },
                        }}
                        className="lg:-ml-10"
                    >
                        <Card className="rounded-[2.2rem_1.4rem_2.45rem_1.65rem]">
                            <div className="space-y-5 text-left">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-[1.2rem] bg-accent/14 p-3 text-accent">
                                        <ShieldCheck className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                                            Current Focus
                                        </p>
                                        <p className="text-lg font-semibold text-foreground">Secure, scalable delivery</p>
                                    </div>
                                </div>
                                <p className="text-base leading-relaxed text-foreground/74">
                                    Turning complex architecture into systems and workflows teams can run, maintain, and improve with confidence.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Backend platforms", "Automation workflows", "Systems strategy"].map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/72"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 22, y: 24 }}
                        animate={{ opacity: 1, x: 0, y: [0, -18, 0], rotate: [1.1, -0.35, 1.1] }}
                        transition={{
                            opacity: { ...spring, delay: 0.32 },
                            x: { ...spring, delay: 0.32 },
                            y: { duration: 9.5, repeat: Infinity, ease: floatEase, delay: 0.4 },
                            rotate: { duration: 9.5, repeat: Infinity, ease: floatEase, delay: 0.4 },
                        }}
                        className="lg:ml-12"
                    >
                        <Card className="rounded-[1.7rem_2.2rem_1.5rem_2.35rem]">
                            <div className="space-y-5 text-left">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                                            Studio Notes
                                        </p>
                                        <p className="text-lg font-semibold text-foreground">Thoughtful systems, practical execution</p>
                                    </div>
                                    <Sparkles className="h-5 w-5 text-[rgb(213_177_109)]" />
                                </div>

                                <p className="max-w-sm text-base leading-relaxed text-foreground/74">
                                    I care about building systems that are easy to understand, practical to maintain, and strong enough to support the pace of real product work.
                                </p>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onBackdropClick={closeModalToHero}
            >
                <ContactForm onSuccess={() => setIsModalOpen(false)} />
            </Modal>
        </section>
    );
};
