import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google"; // Import Roboto_Mono
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Initialize Roboto Mono
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono"
});

export const metadata: Metadata = {
  title: "Security Architect | Automation & Systems",
  description: "Portfolio of a security-focused software architect specializing in automation and defensive systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        inter.variable,
        robotoMono.variable, // Add mono variable
        "min-h-screen bg-background font-sans antialiased text-foreground selection:bg-accent selection:text-accent-foreground"
      )}>
        {children}
      </body>
    </html>
  );
}
