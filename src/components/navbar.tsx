"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollHeroIntoView = () => {
        window.setTimeout(() => {
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 260);
    };

    const closeModalToHero = () => {
        setIsModalOpen(false);
        scrollHeroIntoView();
    };

    const toggleMenu = () => {
        setIsMenuOpen((current) => !current);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-card/90 shadow-[0_8px_34px_rgba(10,14,12,0.18)] backdrop-blur-xl"
            >
                <div className="flex w-full items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                    <Link href="/" className="font-mono text-lg font-bold tracking-tighter text-[color:var(--color-highlight)] drop-shadow-[0_0_18px_rgba(235,199,132,0.18)]">
                        denis.dev
                    </Link>

                    <div className="hidden items-center gap-3 rounded-full border border-border bg-muted/50 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,248,237,0.08)] md:flex">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="rounded-full px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground"
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
                    <button
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-muted/60 text-[color:var(--foreground-subtle)] transition-colors hover:bg-muted md:hidden"
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-x-0 top-full z-40 rounded-b-3xl border-t border-border bg-card/95 px-6 py-5 shadow-[0_28px_78px_rgba(10,14,12,0.28)] backdrop-blur-xl md:hidden"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-sm font-medium text-secondary-foreground">Menu</span>
                                <button
                                    onClick={closeMenu}
                                    aria-label="Close mobile menu"
                                    className="rounded-full border border-border bg-muted/70 p-2 text-[color:var(--foreground-subtle)] transition-colors hover:bg-muted"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="mt-4 flex flex-col gap-2">
                                {links.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="rounded-2xl px-4 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <button
                                onClick={() => {
                                    setIsModalOpen(true);
                                    closeMenu();
                                }}
                                className="mt-4 w-full rounded-full border border-[rgba(223,132,91,0.26)] bg-[linear-gradient(180deg,#f6ebd7,#f0e0c5)] px-4 py-3 text-sm font-semibold text-[color:var(--color-primary-foreground)] shadow-[0_14px_28px_rgba(255,235,200,0.12)] transition-transform hover:scale-105 active:scale-95"
                            >
                                Let&apos;s Talk
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
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
