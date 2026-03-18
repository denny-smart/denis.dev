import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="scroll-to-top-on-load" strategy="beforeInteractive">
          {`
            if ("scrollRestoration" in history) {
              history.scrollRestoration = "manual";
            }
            window.scrollTo(0, 0);
          `}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={cn(
        manrope.variable,
        newsreader.variable,
        ibmPlexMono.variable,
        "min-h-screen bg-background font-sans antialiased text-foreground selection:bg-accent selection:text-accent-foreground"
      )}
      >
        {children}
      </body>
    </html>
  );
}
