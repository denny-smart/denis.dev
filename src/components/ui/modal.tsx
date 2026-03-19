"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    onBackdropClick?: () => void;
}

export const Modal = ({ isOpen, onClose, children, title, onBackdropClick }: ModalProps) => {
    const spring = { type: "spring" as const, stiffness: 100, damping: 15, mass: 0.9 };
    const ease = [0.22, 1, 0.36, 1] as const;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.28, ease }}
                        onClick={onBackdropClick ?? onClose}
                        className="fixed inset-0 z-50 bg-[radial-gradient(circle_at_top,rgba(255,244,234,0.08),transparent_28%),rgba(10,14,12,0.76)] backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 28, filter: "blur(12px)" }}
                            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.94, y: 34, filter: "blur(14px)" }}
                            transition={{
                                opacity: { duration: 0.18, ease },
                                filter: { duration: 0.26, ease },
                                scale: { duration: 0.26, ease },
                                y: { duration: 0.26, ease },
                                ...spring,
                            }}
                            className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto origin-top"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {title && (
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-2xl font-bold text-emerald-500">{title}</h2>
                                    <motion.button
                                        onClick={onClose}
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                        transition={spring}
                                        className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
                                    >
                                        <X className="w-5 h-5 text-zinc-400" />
                                    </motion.button>
                                </div>
                            )}
                            {children}

                            {!title && (
                                <motion.button
                                    onClick={onClose}
                                    aria-label="Close contact form"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    transition={spring}
                                    className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-[rgba(36,47,42,0.86)] p-2 text-foreground shadow-[0_12px_32px_rgba(10,14,12,0.24)] transition-colors hover:border-accent/30 hover:bg-[rgba(49,64,58,0.92)]"
                                >
                                    <X className="h-5 w-5 text-[color:var(--foreground-subtle)]" />
                                </motion.button>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
