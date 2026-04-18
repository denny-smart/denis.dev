"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
    {
        title: "MaliBot",
        category: "Live Product",
        description: "An automated trading system built to monitor market activity, execute strategy logic, and support disciplined decision-making in live conditions.",
        image: "/MaliBot.JPG",
        link: "https://malibot.vercel.app/",
        cta: "Visit Site",
        note: "Automated trading, execution logic, and live product flow",
    },
    {
        title: "GitHub Portfolio",
        category: "Open Source",
        description: "A collection of repositories, experiments, and production-oriented code that reflects your engineering and security work.",
        image: "/github.JPG",
        link: "https://github.com/denny-smart",
        cta: "View GitHub",
        note: "Systems thinking across public experiments",
    }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const ref = useRef(null);
    const spring = { type: "spring" as const, stiffness: 100, damping: 15, mass: 0.85 };
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], index === 0 ? [-36, 28] : [-24, 40]);
    const mediaRadius = index === 0
        ? "rounded-[2.5rem_2rem_0.9rem_2.2rem]"
        : "rounded-[2rem_2.6rem_2.2rem_0.95rem]";
    const layoutClass = index === 0
        ? "md:col-span-7 md:translate-y-8"
        : "md:col-span-5 md:mt-24";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: index * 0.08 }}
            viewport={{ once: true, margin: "-100px" }}
            className={layoutClass}
        >
            <Card
                noPadding
                className="h-full rounded-[2.6rem_2.2rem_2.9rem_2rem] border-border bg-card"
            >
                <div className="grid h-full gap-6 p-5 md:p-7">
                    <div className={`relative min-h-[18rem] overflow-hidden ${mediaRadius}`}>
                        <motion.div style={{ y }} className="absolute inset-0 scale-[1.06]">
                            <div
                                className="h-full w-full bg-cover bg-center saturate-[0.9]"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,27,24,0.04),rgba(20,27,24,0.48))]" />
                        <div className="absolute left-5 top-5 rounded-full border border-border bg-background/60 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-secondary-foreground backdrop-blur-sm">
                            {project.category}
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                        <div className="space-y-4">
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-muted-foreground">
                                {project.note}
                            </p>
                            <h3 className="max-w-[10ch] text-4xl text-foreground sm:text-5xl">
                                {project.title}
                            </h3>
                            <p className="max-w-xl text-[0.77rem] uppercase tracking-[0.24em] text-muted-foreground">
                                {project.description}
                            </p>
                        </div>

                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.985 }}
                            transition={spring}
                            className="inline-flex h-14 items-center gap-3 rounded-full border border-border bg-secondary/40 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-foreground"
                        >
                            <span>{project.cta}</span>
                            <ArrowUpRight className="h-4 w-4" />
                        </motion.a>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};

export const Projects = () => {
    return (
        <section className="scroll-mt-28 px-4 pb-8 pt-10 md:scroll-mt-32 md:pt-16" id="projects">
            <div className="mx-auto max-w-6xl space-y-8 md:space-y-12">
                <div className="grid gap-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end">
                    <div className="space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                            Selected Work
                        </p>
                        <h2 className="text-4xl text-foreground md:text-6xl">
                            Selected Works
                        </h2>
                    </div>
                    <p className="max-w-2xl text-base leading-7 text-foreground/74 md:justify-self-end">
                        A more editorial presentation of the work: tactile surfaces, generous spacing, and project stories that read like printed captions rather than sales cards.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <div className="flex justify-end">
                    <div className="max-w-md rounded-[1.75rem] border border-[color:var(--stroke-subtle)] bg-[rgb(255_244_234_/_0.03)] px-5 py-4 text-right text-[0.68rem] uppercase tracking-[0.3em] text-[color:var(--foreground-muted)]">
                        Built to feel considered in presentation and dependable in production.
                    </div>
                </div>
            </div>
        </section>
    );
};
