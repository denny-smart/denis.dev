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
    const highlights = [
        "Clear architecture for growing products",
        "Automation that saves time without adding fragility",
        "Systems that support product momentum",
    ];
    const capabilityTags = ["Backend platforms", "Automation workflows", "Systems strategy"];
    const workingStyle = [
        "Readable architecture before clever complexity",
        "Stable delivery with fewer operational surprises",
        "Practical systems that teams can actually maintain",
    ];
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
        <section className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-10 pt-24 md:px-8 md:pb-14 md:pt-26" id="hero">
            <div className="pointer-events-none absolute left-[4%] top-[12%] h-52 w-52 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[8%] right-[4%] h-64 w-64 rounded-full bg-[rgb(185_173_201_/_0.12)] blur-3xl" />

            <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.22fr)_minmax(300px,0.74fr)] lg:items-center xl:gap-14">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={spring}
                    className="space-y-6 text-center lg:max-w-[48rem] lg:space-y-7 lg:text-left"
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

                    <div className="space-y-4">
                        <p className="mx-auto max-w-[42rem] text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground sm:text-xs lg:mx-0">
                            I design digital systems that feel clear to use, strong under pressure, and ready for real-world growth.
                        </p>

                        <h1 className="mx-auto max-w-[10.8ch] font-heading text-[clamp(3.25rem,7vw,6.1rem)] leading-[0.88] tracking-[-0.07em] text-foreground sm:max-w-[11.4ch] lg:mx-0 lg:max-w-[10.6ch]">
                            <span className="block">Building</span>
                            <span className="block">
                                <span className="relative inline-flex px-[0.05em] text-accent">
                                    <span className="absolute inset-x-1 bottom-2 h-4 rounded-full bg-accent/15 blur-md" />
                                    <span className="relative">systems</span>
                                </span>{" "}
                                for real
                            </span>
                            <span className="block">business</span>
                            <span className="block">growth.</span>
                        </h1>

                        <p className="mx-auto max-w-[41rem] text-base leading-relaxed text-foreground/76 md:text-[1.04rem] lg:mx-0 lg:max-w-[38rem]">
                            I build backend platforms, automation, and system-focused workflows that help teams move faster, reduce risk, and scale with confidence.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...spring, delay: 0.18 }}
                        className="flex flex-col items-center gap-3 pt-1 sm:flex-row lg:items-start lg:justify-start"
                    >
                        <motion.a
                            href="https://github.com/denny-smart"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.985 }}
                            transition={spring}
                            className="inline-flex h-13 items-center gap-2 rounded-full border border-[#f3e8d4]/20 bg-primary px-6 text-[0.98rem] font-semibold text-primary-foreground shadow-[0_18px_38px_rgba(15,18,16,0.18)]"
                        >
                            <span>View Projects</span>
                            <ArrowUpRight className="h-4 w-4" />
                        </motion.a>
                        <Button
                            variant="outline"
                            onClick={() => setIsModalOpen(true)}
                            className="h-13 px-6 text-[0.98rem]"
                        >
                            Contact Me
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...spring, delay: 0.28 }}
                        className="grid gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {highlights.map((item) => (
                            <div
                                key={item}
                                className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-relaxed text-foreground/72 shadow-[inset_0_1px_0_rgba(255,244,234,0.08)] backdrop-blur-sm lg:min-h-[88px]"
                            >
                                {item}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <div className="relative mx-auto flex w-full max-w-[340px] flex-col gap-0 lg:-translate-y-2 lg:mx-0 lg:justify-self-end xl:max-w-[360px]">
                    <motion.div
                        initial={{ opacity: 0, x: 18, y: 26 }}
                        animate={{ opacity: 1, x: 0, y: [0, -14, 0], rotate: [-1.2, 0.3, -1.2] }}
                        transition={{
                            opacity: { ...spring, delay: 0.2 },
                            x: { ...spring, delay: 0.2 },
                            y: { duration: 8.5, repeat: Infinity, ease: floatEase },
                            rotate: { duration: 8.5, repeat: Infinity, ease: floatEase },
                        }}
                        className="lg:self-end"
                    >
                        <Card className="w-full rounded-[2.2rem_1.4rem_2.45rem_1.65rem] p-5 md:p-5 lg:w-[91%]">
                            <div className="space-y-3.5 text-left">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-[1.1rem] bg-accent/14 p-2.5 text-accent">
                                        <ShieldCheck className="h-4.5 w-4.5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                                            Current Focus
                                        </p>
                                        <p className="text-[1.28rem] font-semibold leading-tight text-foreground sm:text-[1.4rem] lg:text-[1.3rem]">
                                            Secure, scalable delivery
                                        </p>
                                    </div>
                                </div>
                                <p className="max-w-[16.4rem] text-sm leading-relaxed text-foreground/74 md:text-[0.92rem]">
                                    Turning complex architecture into systems and workflows teams can run, maintain, and improve with confidence.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {capabilityTags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-foreground/72"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="grid gap-2 pt-1">
                                    {[
                                        "Designed for speed without sacrificing clarity.",
                                        "Built to be easy to operate after launch.",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl border border-white/8 bg-black/10 px-3 py-2 text-[0.9rem] leading-relaxed text-foreground/68"
                                        >
                                            {item}
                                        </div>
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
                        className="lg:mt-4 lg:self-start"
                    >
                        <Card className="w-full rounded-[1.7rem_2.2rem_1.5rem_2.35rem] p-5 md:p-5 lg:w-[84%]">
                            <div className="space-y-3.5 text-left">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                                            Working Style
                                        </p>
                                        <p className="max-w-[13rem] text-[1.14rem] font-semibold leading-tight text-foreground sm:text-[1.22rem]">
                                            Thoughtful systems, practical execution
                                        </p>
                                    </div>
                                    <Sparkles className="h-4.5 w-4.5 text-[rgb(213_177_109)]" />
                                </div>

                                <div className="space-y-2.5">
                                    {workingStyle.map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl border border-white/8 bg-white/[0.035] px-3 py-2 text-[0.9rem] leading-relaxed text-foreground/72"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
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
