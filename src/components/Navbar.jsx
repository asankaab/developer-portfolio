"use client"

import { faDribbble, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [navItems, setNavItems] = useState([])

    // async function getContent() {

    //     const CONTENT_QUERY = `*[_type == "nav"] { title, path }`

    //     const content = await client.fetch(CONTENT_QUERY)
    //     setNavItems(content);
    // }

    const [toggle, setToggle] = useState("-top-[50vh]");

    function menuTrigger() {
        if (toggle === "-top-[50vh]") {
            setToggle("top-14");
        } else {
            setToggle("-top-[50vh]");
        }
    }

    return (
        <div className="bg-background z-50 fixed w-full">
            <div className="container mx-auto py-3 flex justify-between items-center px-3 border-b md:border-b-0">
                <Menu onClick={menuTrigger} className="cursor-pointer md:hidden"/>
                <nav className="hidden md:block left-0 w-full bg-background transition-all duration-700">
                    <ul className="flex gap-4">
                        <Link className="py-3 text-secondary hover:text-black" href="/" >Home</Link>
                        <Link className="py-3 text-secondary hover:text-black" href="/" >Work</Link>
                        <Link className="py-3 text-secondary hover:text-black" href="/" >About</Link>
                        <Link className="py-3 text-secondary hover:text-black" href="/" >Contact</Link>
                    </ul>
                </nav>
                <div className="flex gap-10 items-center">
                    <p className=" text-nowrap text-xs text-secondary">Based in Matara, Sri Lanka</p>
                    <div className="flex gap-4">
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faDribbble}/>
                    </div>
                </div>
            </div>
            <nav className={"md:hidden w-full bg-background transition-all duration-700 absolute" + " " + toggle}>
                    <ul className="flex flex-col md:flex-row divide-y md:divide-y-0 container mx-auto px-3">
                        <Link className="py-3 text-secondary hover:text-black" href="/" >Home</Link>
                        <Link className="py-3 text-secondary hover:text-black" href="/" >Work</Link>
                        <Link className="py-3 text-secondary hover:text-black" href="/" >About</Link>
                        <Link className="py-3 text-secondary hover:text-black" href="/" >Contact</Link>
                    </ul>
            </nav>
        </div>
    )
}