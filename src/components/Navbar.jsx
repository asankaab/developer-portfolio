"use client"

import { faDribbble, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { client } from "@/utils/sanity/client"

export default function Navbar() {

    const [navItems, setNavItems] = useState([])

    async function getContent() {
        const CONTENT_QUERY = `*[_type == "project"] {
        ...,
        coverImage {
          ...,
          asset->
        },
        duration {
          ...
        },
        tags[],
        body
      }
      `
        const content = await client.fetch(CONTENT_QUERY)
        setNavItems(content);
      }

    const [toggle, setToggle] = useState("-top-[70vh]");

    function menuTrigger() {
        if (toggle === "-top-[70vh]") {
            setToggle("top-12");
        } else {
            setToggle("-top-[70vh]");
        }
    }

    return (
        <div className="container border-b md:border-b-0 mx-auto py-3 bg-background z-50">
            <div className=" flex justify-between items-center px-3">
                <Menu onClick={menuTrigger} className="cursor-pointer md:hidden"/>
                <nav className="hidden left-0 w-full bg-background transition-all duration-700">
                    <ul className="flex flex-col md:flex-row divide-y md:divide-y-0 container mx-auto px-3">
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
            <nav className={"md:hidden left-0 w-full bg-background transition-all duration-700" + " " + toggle}>
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