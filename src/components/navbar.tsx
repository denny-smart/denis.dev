"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Notes", href: "#notes" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed left-0 right-0 top-0 z-50 flex items-center justify-center p-4 min-w-[320px]"
        >
            <div className="flex w-full max-w-5xl items-center justify-between rounded-full border border-zinc-800 bg-zinc-950/50 px-6 py-3 backdrop-blur-md">
                <Link href="/" className="font-mono text-lg font-bold tracking-tighter text-emerald-500">
                    SYS.ARCH
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 transition-colors hover:text-emerald-400"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Link
                    href="#contact"
                    className="hidden rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-semibold text-zinc-950 transition-transform hover:scale-105 active:scale-95 md:inline-block"
                >
                    Let's Talk
                </Link>
                <button className="md:hidden text-zinc-400">
                    {/* Mobile burger icon placeholder */}
                    Menu
                </button>
            </div>
        </motion.nav>
    );
};
