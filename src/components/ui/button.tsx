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
        primary: "border border-accent/20 bg-accent text-accent-foreground shadow-[0_18px_36px_rgba(200,115,77,0.26)] hover:bg-[#d27f59]",
        secondary: "border border-white/10 bg-white/[0.06] text-foreground hover:bg-white/[0.1]",
        outline: "border border-white/12 bg-white/[0.03] text-foreground hover:border-accent/40 hover:bg-white/[0.08]",
        ghost: "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground",
    };

    const sizes = {
        default: "h-10 px-6",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
    };

    return (
        <motion.button
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, mass: 0.8 }}
            className={cn(
                "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-[background-color,border-color,color,transform,box-shadow] focus:outline-none focus:ring-2 focus:ring-accent/40 focus:ring-offset-2 focus:ring-offset-background",
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
