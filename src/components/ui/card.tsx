"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    noPadding?: boolean;
}

export const Card = ({ children, className, noPadding = false }: CardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm",
                "shadow-lg shadow-black/20",
                "transition-colors hover:border-zinc-700/80",
                !noPadding && "p-6",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};
