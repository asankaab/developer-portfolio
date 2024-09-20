"use client"

import { Instagram, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="container border-b w-full mx-auto px-2 py-3">
            <Menu/>
            <nav className="flex-col gap-4 hidden">
                <Link href="/" >Home</Link>
                <Link href="/" >Work</Link>
                <Link href="/" >About</Link>
                <Link href="/" >Contact</Link>
            </nav>
            <div>
                <Instagram />
            </div>
        </div>
    )
}