import type {Metadata} from "next";
import {Quicksand} from "next/font/google";
import "./globals.css";
import React from "react";

const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Musify",
    description: "Stream and enjoy music online with Musify, built using Next.js, Tailwind, and Firebase.",
    keywords: ["Next.js", "Musify", "Music", "Online streaming"],
    authors: [{ name: "Mai Tất Duy"}],
    creator: "Mai Tất Duy",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={quicksand.className}
        >
        {children}
        </body>
        </html>
    );
}
