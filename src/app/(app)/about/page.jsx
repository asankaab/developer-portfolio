import { getUser } from "@/api/sanityfetch"
import * as motion from "framer-motion/client"
import { child, parent } from "../animation";
import { PortableText } from "next-sanity";
import { description } from "@/components/PortableComponents";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { urlFor } from "@/sanity/lib/image";

export default async function Page() {

    const user = await getUser();
    
    return (
        <motion.div  variants={parent} viewport={{once: true}} initial="hidden" whileInView="visible" className="container w-full mx-auto px-3">
            <section className="grid grid-cols-12">
                <div className="grid gap-2 col-span-12 md:col-span-8">
                    <h2 className="text-2xl md:text-2xl mb-2">About</h2>
                    <div className="flex gap-4">
                        <Avatar className="border-2">
                            <AvatarImage src={urlFor(user.photo).width(300).url()} alt="avatar"/>
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <div>
                            <motion.h1 variants={child} className="text-2xl font-medium text-foregroundDark">{user.name}</motion.h1>
                            <motion.h2 variants={child} className="text-lg text-foregroundLight">{user.occupation}</motion.h2>
                        </div>
                    </div>
                    <motion.div variants={child}>
                        <PortableText value={user.about} components={description} />
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}