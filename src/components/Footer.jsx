import Link from "next/link";
import { Button } from "./ui/button";
import { NavList } from "./NavList";
import { getUser } from "@/api/sanityfetch";

export default async function Footer() {

    const user = await getUser();
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="container w-full mx-auto px-3 py-8">
            <nav className="w-full bg-background">
                <div className="text-xs">
                    {/* <NavList/> */}
                    <span>&copy; 2024</span>
                    {currentYear > 2024 ? <span>&mdash;{currentYear}</span> : null}
                    <span> | {user.name}</span>
                </div>
            </nav>
        </footer>
    )
}