"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
}

export const Button = ({
    children,
    className,
    variant = "primary",
    ...props
}: ButtonProps) => {
    const variants = {
        primary: "bg-emerald-500 text-zinc-950 hover:bg-emerald-400",
        secondary: "bg-zinc-100 text-zinc-950 hover:bg-zinc-200",
        outline: "border border-zinc-700 text-zinc-300 hover:border-emerald-500 hover:text-emerald-500",
        ghost: "text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/10",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "inline-flex h-10 items-center justify-center rounded-lg px-6 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-black",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};
