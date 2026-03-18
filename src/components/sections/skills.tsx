"use client";

const ribbonItems = [
    { label: "Editorial Systems", style: "serif" },
    { label: "Security Architecture", style: "sans" },
    { label: "Automation", style: "serif" },
    { label: "Python", style: "sans" },
    { label: "FastAPI", style: "sans" },
    { label: "Resilient Products", style: "serif" },
    { label: "PostgreSQL", style: "sans" },
    { label: "Threat Modelling", style: "serif" },
    { label: "Operational Clarity", style: "sans" },
];

export const Skills = () => {
    const items = [...ribbonItems, ...ribbonItems];

    return (
        <section className="relative overflow-hidden border-y border-[color:var(--stroke-subtle)] bg-[rgb(255_244_234_/_0.012)] py-12 md:py-14">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,244,234,0.03),transparent_60%)]" />

            <div className="relative flex overflow-hidden whitespace-nowrap">
                <div className="animate-marquee flex min-w-max items-center gap-8 pr-8">
                    {items.map((item, i) => (
                        <span
                            key={`left-${i}`}
                            className={[
                                "text-[clamp(2rem,5.5vw,4.5rem)] leading-none opacity-30 transition-opacity",
                                item.style === "serif"
                                    ? "font-heading italic tracking-[-0.05em] text-[color:var(--foreground-muted)]"
                                    : "font-sans font-extrabold uppercase tracking-[0.22em] text-[color:var(--foreground-muted)]",
                            ].join(" ")}
                        >
                            {item.label}
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 flex min-w-max items-center gap-8 pr-8" aria-hidden="true">
                    {items.map((item, i) => (
                        <span
                            key={`right-${i}`}
                            className={[
                                "text-[clamp(2rem,5.5vw,4.5rem)] leading-none opacity-30 transition-opacity",
                                item.style === "serif"
                                    ? "font-heading italic tracking-[-0.05em] text-[color:var(--foreground-muted)]"
                                    : "font-sans font-extrabold uppercase tracking-[0.22em] text-[color:var(--foreground-muted)]",
                            ].join(" ")}
                        >
                            {item.label}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
