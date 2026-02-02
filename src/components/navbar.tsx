"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Modal } from "@/components/ui/modal";
import { ContactForm } from "@/components/contact-form";

const links = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Notes", href: "#notes" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md"
            >
                <div className="flex w-full items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                    <Link href="/" className="font-mono text-lg font-bold tracking-tighter text-emerald-500">
                        denis.dev
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

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="hidden rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-semibold text-zinc-950 transition-transform hover:scale-105 active:scale-95 md:inline-block"
                    >
                        Let's Talk
                    </button>
                    <button className="md:hidden text-zinc-400">
                        {/* Mobile burger icon placeholder */}
                        Menu
                    </button>
                </div>
            </motion.nav>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ContactForm onSuccess={() => setIsModalOpen(false)} />
            </Modal>
        </>
    );
};
