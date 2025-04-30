import { getUser } from "@/api/sanityfetch"
import * as motion from "framer-motion/client"
import { parent } from "../animation";
import { PortableText } from "next-sanity";
import { description } from "@/components/PortableComponents";

export default async function Page() {

    const user = await getUser();
    
    return (
        <motion.div  variants={parent} viewport={{once: true}} initial="hidden" whileInView="visible" className="container w-full mx-auto px-3">
            <section className="grid grid-cols-12">
                <div className="grid gap-2 col-span-12 md:col-span-8">
                    <h2 className="text-2xl md:text-2xl mb-2">About</h2>
                    <PortableText value={user.description} components={description} />
                </div>
            </section>
        </motion.div>
    )
}