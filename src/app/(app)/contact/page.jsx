import { getUserContact } from "@/api/sanityfetch"
import Link from "next/link";
import * as motion from "framer-motion/client"
import { child, parent } from "../animation";
import { Mail, Phone } from "lucide-react";

export default async function Page() {

    const user = await getUserContact();

    return (
        <motion.div variants={parent} viewport={{once: true}} initial="hidden" whileInView="visible" className="container w-full mx-auto px-3">
            <section className="grid grid-cols-12">
                <div className="grid gap-2 col-span-12 md:col-span-8">
                    <h2 className="text-2xl md:text-2xl">Contact</h2>
                    <p className="text-foregroundLight">{user.contactnarrate}</p>
                    <motion.span variants={child} className="inline-flex flex-wrap gap-2 items-center hover:text-foregroundLight"><Mail size={18}/><Link className="block hover:scale-110 origin-left transition" href={"mailto:" + user.email}>{user.email}</Link></motion.span>
                    <motion.span variants={child} className="inline-flex flex-wrap gap-2 items-center hover:text-foregroundLight"><Phone size={18}/><Link className="block hover:scale-110 origin-left transition" href={"tel:" + user.phone}>{user.phone}</Link></motion.span>
                    <motion.div variants={child} className="flex gap-4">
                        {user.socialmedia?.map((link) => {
                            return (
                                <Link key={link._key} aria-label={link.name} href={link.url} target="_blank" className="block hover:scale-110 transition hover:text-foregroundLight">
                                    <i className={`fa-brands fa-${link.name} block`}></i>
                                    <span className="ml-2">{link.name}</span>
                                </Link>
                            )
                        })}                     
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}