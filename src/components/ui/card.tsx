"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    noPadding?: boolean;
    disableHoverEffect?: boolean;
    hideBottomAccent?: boolean;
}

export const Card = ({
    children,
    className,
    noPadding = false,
    disableHoverEffect = false,
    hideBottomAccent = false,
}: CardProps) => {
    const grain =
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cg fill='%23fff7ee' fill-opacity='0.7'%3E%3Ccircle cx='18' cy='20' r='1'/%3E%3Ccircle cx='68' cy='34' r='0.8'/%3E%3Ccircle cx='112' cy='18' r='0.85'/%3E%3Ccircle cx='42' cy='86' r='0.9'/%3E%3Ccircle cx='98' cy='98' r='1'/%3E%3Ccircle cx='124' cy='118' r='0.75'/%3E%3C/g%3E%3C/svg%3E\")";

    return (
        <motion.div
            whileHover={disableHoverEffect ? undefined : { y: -8, rotate: -0.45, scale: 1.01 }}
            whileTap={disableHoverEffect ? undefined : { scale: 0.995 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, mass: 0.8 }}
            className={cn(
                "group relative isolate overflow-hidden rounded-[1.9rem_1.45rem_2.15rem_1.55rem] border border-white/10 bg-[linear-gradient(145deg,rgba(36,48,43,0.94),rgba(21,28,25,0.8))] text-card-foreground shadow-[0_28px_70px_rgba(5,8,7,0.28),inset_0_1px_0_rgba(255,244,234,0.12),inset_0_-12px_24px_rgba(8,10,9,0.18)] backdrop-blur-md transition-[border-color,box-shadow,transform] duration-500",
                !disableHoverEffect && "hover:border-accent/35 hover:shadow-[0_32px_80px_rgba(7,10,9,0.34),inset_0_1px_0_rgba(255,244,234,0.18),inset_0_-12px_24px_rgba(8,10,9,0.22)]",
                !noPadding && "p-6 md:p-7",
                className
            )}
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,244,234,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(200,115,77,0.16),transparent_24%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-soft-light"
                style={{
                    backgroundImage: grain,
                    backgroundSize: "140px 140px",
                }}
            />
            {!hideBottomAccent && (
                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            )}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};
