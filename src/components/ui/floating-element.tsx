"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export const FloatingElement = ({
    children,
    delay = 0,
    className
}: FloatingElementProps) => {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{
                y: [0, -20, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            whileHover={{
                scale: 1.05,
                y: 0, // Pause vertical motion (or rather, snap to center)
                transition: { duration: 0.3 }
            }}
            className={cn(
                "relative rounded-xl border border-white/20 bg-white/40 p-4 shadow-xl backdrop-blur-md",
                className
            )}
        >
            {children}
        </motion.div>
    );
};
