"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
}

export const Button = ({
    children,
    className,
    variant = "primary",
    size = "default",
    ...props
}: ButtonProps) => {
    const variants = {
        primary: "bg-white text-black hover:bg-zinc-200",
        secondary: "bg-zinc-800 text-white hover:bg-zinc-700",
        outline: "border border-zinc-700 text-zinc-300 hover:border-white hover:text-white",
        ghost: "text-zinc-400 hover:text-white hover:bg-white/10",
    };

    const sizes = {
        default: "h-10 px-6",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};
