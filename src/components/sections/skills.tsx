"use client";

import { cn } from "@/lib/utils";

const skills = [
    "Secure / Automated / Architected / Python / Django / FastAPI / PostgreSQL / Docker / OWASP /",
    "Secure / Automated / Architected / Python / Django / FastAPI / PostgreSQL / Docker / OWASP /"
];

export const Skills = () => {
    return (
        <section className="py-20 overflow-hidden bg-black border-y border-white/5">
            <div className="relative flex whitespace-nowrap overflow-hidden">
                <div className="animate-marquee flex items-center">
                    {skills.map((text, i) => (
                        <span key={i} className="text-[6rem] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 mx-4">
                            {text}
                        </span>
                    ))}
                </div>
                <div className="absolute top-0 animate-marquee2 flex items-center">
                    {skills.map((text, i) => (
                        <span key={i} className="text-[6rem] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 mx-4">
                            {text}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
