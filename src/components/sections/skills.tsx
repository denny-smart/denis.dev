"use client";

import { cn } from "@/lib/utils";

const skills = [
    "Python", "Django", "FastAPI", "React", "Next.js", "TypeScript",
    "PostgreSQL", "Docker", "Git", "CI/CD", "Automated Trading", "System Design",
    "OWASP Top 10", "Ethical Hacking", "Secure Architecture", "REST APIs"
];

export const Skills = () => {
    return (
        <section className="border-y border-zinc-800 bg-zinc-950/50 py-10 overflow-hidden backdrop-blur-sm">
            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee flex whitespace-nowrap">
                    {skills.map((skill, i) => (
                        <span
                            key={i}
                            className="mx-8 text-xl font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-emerald-500 cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap">
                    {skills.map((skill, i) => (
                        <span
                            key={`duplicate-${i}`}
                            className="mx-8 text-xl font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-emerald-500 cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
