"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "MaliBot",
        category: "Live Product",
        description: "A deployed project experience showcasing MaliBot in action, with a polished interface and real product flow.",
        image: "/MaliBot.JPG",
        link: "https://malibot.vercel.app/",
        cta: "Visit Site"
    },
    {
        title: "GitHub Portfolio",
        category: "Open Source",
        description: "A collection of repositories, experiments, and production-oriented code that reflects your engineering and security work.",
        image: "/github.JPG",
        link: "https://github.com/denny-smart",
        cta: "View GitHub"
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

                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex h-16 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-zinc-200"
                    >
                        <span>{project.cta}</span>
                        <ArrowUpRight className="h-5 w-5" />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    return (
        <section className="bg-black px-4 pb-0 pt-24 md:pt-28" id="projects">
            <div className="mx-auto max-w-6xl space-y-20">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                        Selected Works
                    </h2>
                    <div className="h-1 w-20 bg-emerald-500" />
                </div>

                <div className="space-y-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
