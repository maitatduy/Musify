import type {Metadata} from "next";
import {Quicksand} from "next/font/google";
import "./globals.css";
import React from "react";
import Play from "@/app/components/play/Play";
import Sider from "@/app/components/sider/Sider";
import Search from "@/app/components/search/Search";

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
            className={`${quicksand.className} bg-[#292929]`}
        >
        <div className={"container mx-auto"}>
            <div className={"flex items-start"}>
                <div className={"w-[280px]"}>
                    <Sider/>
                </div>
                <div className={"flex-1 ml-5"}>
                    <Search/>
                    <main className={"mb-[120px] mt-[30px]"}>
                        {children}
                    </main>
                </div>
            </div>
        </div>
        <Play/>
        </body>
        </html>
    );
}
