"use client"

import { faDribbble, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircleX, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { NavList } from "./NavList";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

    const pathname = usePathname()

    const [nav, setNav] = useState(" top-0")

    useEffect(() => {

        let prev = 0;

        const onScroll = () => {
            if (window.scrollY > prev + 10) {
                prev = window.scrollY
                setNav(" -top-20")
            } else if (window.scrollY < prev) {
                prev = window.scrollY + 10
                setNav(" -top-0")
            }
        };
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    const [menuopen, setmenuopen] = useState(false)
    const [toggle, setToggle] = useState("-top-[100vh]");

    function menuTrigger() {
        if (!menuopen) {
            setmenuopen(true)
            setToggle("top-0");
        } else {
            setmenuopen(false)
            setToggle("-top-[100vh]");
        }
    }

    return (
        <div className={"bg-background fixed w-full z-50 transition-all duration-500" + nav}>
            <div className="container mx-auto py-6 flex justify-between items-center px-3 border-b md:border-b-0">
                <Menu onClick={menuTrigger} className={ menuopen ? " hidden" : "" +"cursor-pointer md:hidden"}/>
                <CircleX onClick={menuTrigger} className={ !menuopen ? " hidden" : "" +"cursor-pointer md:hidden"} />
                <nav className="hidden md:block left-0 w-full bg-background transition-all duration-700">
                    <div className="flex gap-4">
                        <NavList className="transition text-secondary hover:text-black" urlPath={pathname} />
                    </div>
                </nav>
                <div className="flex gap-10 items-center">
                    <p className=" text-nowrap text-xs">Based in Matara, Sri Lanka</p>
                    <div className="flex gap-4">
                        <Link href="https://www.instagram.com/asanka_abew" target="_blank"><FontAwesomeIcon className="hover:scale-110 hover:rotate-12 transition" icon={faInstagram}/></Link>
                        <Link href="https://dribbble.com/asanka_abew" target="_blank"><FontAwesomeIcon className="hover:scale-125 hover:rotate-12 transition" icon={faDribbble}/></Link>                        
                    </div>
                </div>
            </div>
            <nav className={"md:hidden w-full min-h-svh bg-background transition-all duration-700 absolute -z-10" + " " + toggle}>
                <div className="h-20 w-full "></div>
                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 container mx-auto px-3">
                    <NavList onClick={menuTrigger} className="py-3 text-secondary hover:text-black" />
                </div>
            </nav>
        </div>
    )
}