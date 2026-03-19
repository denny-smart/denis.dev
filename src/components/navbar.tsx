"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Modal } from "@/components/ui/modal";
import { ContactForm } from "@/components/contact-form";

const links = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[linear-gradient(180deg,rgba(37,49,44,0.9),rgba(28,37,33,0.78))] shadow-[0_8px_34px_rgba(10,14,12,0.18)] backdrop-blur-xl"
            >
                <div className="flex w-full items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                    <Link href="/" className="font-mono text-lg font-bold tracking-tighter text-[color:var(--accent-secondary)] drop-shadow-[0_0_18px_rgba(235,199,132,0.18)]">
                        denis.dev
                    </Link>

                    <div className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,248,237,0.08)] md:flex">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="rounded-full px-4 py-2 text-sm font-medium text-[color:var(--foreground-subtle)] transition-colors hover:bg-white/[0.06] hover:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="hidden rounded-full border border-[rgba(223,132,91,0.26)] bg-[linear-gradient(180deg,#f6ebd7,#f0e0c5)] px-4 py-2 text-sm font-semibold text-[color:var(--color-primary-foreground)] shadow-[0_14px_28px_rgba(255,235,200,0.12)] transition-transform hover:scale-105 active:scale-95 md:inline-block"
                    >
                        Let&apos;s Talk
                    </button>
                    <button className="text-[color:var(--foreground-subtle)] md:hidden">
                        {/* Mobile burger icon placeholder */}
                        Menu
                    </button>
                </div>
            </motion.nav>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onBackdropClick={closeModalToHero}
            >
                <ContactForm onSuccess={() => setIsModalOpen(false)} />
            </Modal>
        </>
    );
};
