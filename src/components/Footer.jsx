import Link from "next/link";
import { Button } from "./ui/button";
import { NavList } from "./NavList";

export default function Footer() {
    return (
        <footer className="container w-full mx-auto px-3 py-8">
            <nav className="w-full bg-background">
                <div className="flex flex-wrap gap-4">
                    <NavList/>
                </div>
            </nav>
        </footer>
    )
}