import Link from "next/link";
import { ArrowUpRight, HeartHandshake } from "lucide-react";

const footerLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
];

export const Footer = () => {
    return (
        <footer className="relative z-10 px-4 pb-10 pt-8">
            <div className="mx-auto max-w-6xl">
                <div className="overflow-hidden rounded-[2.4rem] border border-border bg-card shadow-[0_28px_70px_rgba(10,14,12,0.22),0_0_0_1px_rgba(255,244,234,0.05),inset_0_1px_0_rgba(255,248,237,0.18)]">
                    <div className="grid gap-8 px-6 py-8 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] md:items-stretch md:px-8 md:py-9">
                        <div className="space-y-5">
                            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-muted/50 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary-foreground shadow-[0_0_24px_rgba(255,244,234,0.04)]">
                                <HeartHandshake className="h-4 w-4 text-[color:var(--color-highlight)]" />
                                Thanks for visiting
                            </div>

                            <div className="space-y-3">
                                <h2 className="max-w-[14ch] text-3xl text-foreground sm:text-4xl">
                                    Your time here means a lot.
                                </h2>
                                <p className="max-w-2xl text-base leading-7 text-foreground/76">
                                    Whether you came to explore the work, check the technical details, or simply look around, I appreciate you spending part of your day here.
                                </p>
                                <p className="max-w-2xl text-sm uppercase tracking-[0.22em] text-muted-foreground">
                                    Built with care, clarity, and respect for the people using it.
                                </p>
                            </div>
                        </div>

                        <div className="flex h-full flex-col justify-between gap-8 md:border-l md:border-[color:var(--stroke-subtle)] md:pl-8">
                            <div className="flex flex-wrap gap-3 md:justify-end">
                                {footerLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="rounded-full border border-border bg-muted/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="#hero"
                                className="inline-flex items-center gap-2 self-start rounded-full border border-[rgba(223,132,91,0.26)] bg-[linear-gradient(180deg,#f7ebd7,#f0e0c5)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--color-primary-foreground)] shadow-[0_16px_32px_rgba(255,232,194,0.12)] transition-transform hover:-translate-y-0.5 md:self-end"
                            >
                                Back to top
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="border-t border-[color:var(--stroke-subtle)] px-6 py-4 md:px-8">
                        <div className="flex flex-col gap-3 text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--foreground-muted)] md:flex-row md:items-center md:justify-between">
                            <p>Denis Kirimi</p>
                            <p>Thoughtful systems for real-world work</p>
                            <p>{new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
