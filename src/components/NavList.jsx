import Link from "next/link"
import * as motion from "framer-motion/client"

export function NavList({className, onClick, urlPath}) {

    const navItems = [
        {title: "Home", path: "/"},
        {title: "Work", path: "/work"},
        {title: "About", path: "/about"},
        {title: "Contact", path: "/contact"}
    ]

    const child = {
    visible: { opacity: 1, transition: { duration: 0.4, type: "tween" } },
    hidden: { opacity: 0, },
    }

    return (
        <>
            {navItems?.map((item, index) => {
                
                let active = "";
                
                if (urlPath === item.path) {
                    active = " md:bg-black/10 scale-x-100";
                }

                return ( 
                    <Link onClick={onClick} className={className} key={index} href={item.path} >
                        <motion.div variants={child} className="group overflow-hidden text-foreground">{item.title}
                            <div className={"md:bg-foreground transition h-0.5 w-full origin-bottom-left scale-x-0 group-hover:scale-x-100" + active}></div>
                        </motion.div>
                    </Link>
                )
            })}
        </>
    )
}