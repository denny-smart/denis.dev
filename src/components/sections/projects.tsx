"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Algorithmic Trading Bot",
        category: "Automation / Finance",
        description: "A high-frequency trading system built with Python and FastAPI, featuring real-time risk management and multi-exchange connectivity.",
        image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2670&auto=format&fit=crop", // Abstract Tech Image
        link: "#"
    },
    {
        title: "Secure Banking API",
        category: "Security / Backend",
        description: "Zero-trust architecture implementation for a fintech core, utilizing mTLS, OAuth2, and rigorous input validation.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", // Cybersecurity Image
        link: "#"
    },
    {
        title: "Vulnerability Scanner",
        category: "Offensive Security",
        description: "Automated reconnaissance tool that identifies common OWASP vulnerabilities in web applications before deployment.",
        image: "https://images.unsplash.com/photo-1558494949-ef2bb6db8744?q=80&w=2670&auto=format&fit=crop", // Code/Matrix Image
        link: "#"
    }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the image
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative h-[500px] w-full overflow-hidden rounded-3xl bg-zinc-900 border border-white/10"
        >
            {/* Image Background with Parallax */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div style={{ y }} className="h-[120%] w-full">
                    <div
                        className="h-full w-full bg-cover bg-center opacity-60 transition-opacity duration-700 group-hover:opacity-40 grayscale group-hover:grayscale-0"
                        style={{ backgroundImage: `url(${project.image})` }}
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="space-y-4">
                        <span className="inline-block text-sm font-mono text-emerald-400 tracking-wider uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                            {project.category}
                        </span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            {project.title}
                        </h3>
                        <p className="max-w-xl text-lg text-zinc-300 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <Button
                        size="icon"
                        className="h-16 w-16 rounded-full bg-white text-black hover:bg-zinc-200 hover:scale-105 transition-all"
                    >
                        <ArrowUpRight className="h-8 w-8" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    return (
        <section className="py-32 px-4 bg-black" id="projects">
            <div className="mx-auto max-w-6xl space-y-24">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                        Selected Works
                    </h2>
                    <div className="h-1 w-20 bg-emerald-500" />
                </div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
