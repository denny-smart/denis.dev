"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

type LayoutProps = {
    children: React.ReactNode;
}

const commands = {
    help: "Available commands: help, email, socials, status, clear",
    email: "contact@secure-arch.dev", // user can update this
    socials: "GitHub: github.com/username | LinkedIn: linkedin.com/in/username",
    status: "System Operational. All services running.",
    clear: "CLEAR_ACTION",
};

export const ContactTerminal = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([
        "Welcome to the secure terminal interface.",
        "Type 'help' to see available commands.",
    ]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        if (!cmd) return;

        const response = commands[cmd as keyof typeof commands];

        if (response === "CLEAR_ACTION") {
            setHistory([]);
        } else if (response) {
            setHistory(prev => [...prev, `> ${input}`, response]);
        } else {
            setHistory(prev => [...prev, `> ${input}`, `Command not found: ${cmd}`]);
        }

        setInput("");
    };

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <section className="py-24 px-4 flex justify-center" id="contact">
            <div className="w-full max-w-3xl">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-emerald-500 mb-4">
                        Initiate Handshake
                    </h2>
                    <p className="text-zinc-400">
                        Use the terminal below to establish communication protocol.
                    </p>
                </div>

                <Card className="min-h-[400px] bg-black border-zinc-800 font-mono text-sm p-0 overflow-hidden shadow-2xl shadow-emerald-900/10">
                    <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border-b border-zinc-800">
                        <TerminalIcon className="h-4 w-4 text-emerald-500" />
                        <span className="text-zinc-400">guest@secure-arch:~</span>
                        <div className="flex gap-1.5 ml-auto">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center p-0.5" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 text-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/20 text-emerald-500" />
                        </div>
                    </div>

                    <div
                        className="p-6 h-[350px] overflow-y-auto cursor-text"
                        onClick={focusInput}
                    >
                        <div className="space-y-2">
                            {history.map((line, i) => (
                                <div key={i} className={line.startsWith(">") ? "text-zinc-500" : "text-emerald-500"}>
                                    {line}
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleCommand} className="mt-2 flex items-center gap-2">
                            <span className="text-emerald-500">{">"}</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="bg-transparent border-none outline-none text-emerald-500 w-full placeholder-zinc-800"
                                autoFocus
                            />
                            <motion.div
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="w-2 h-4 bg-emerald-500"
                            />
                        </form>
                    </div>
                </Card>
            </div>
        </section>
    );
};
