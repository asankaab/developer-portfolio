import { getUser } from "@/hooks/useData"
import * as motion from "framer-motion/client"
import { parent } from "../animation";
import { PortableText } from "next-sanity";
import Spacer from "@/components/Spacer";

export default async function Page() {

    const user = await getUser();
    return (
        <motion.div  variants={parent} viewport={{once: true}} initial="hidden" whileInView="visible" className="container w-full mx-auto px-3">
            <Spacer/>
            <section className="grid grid-cols-12">
                <div className="grid gap-2 col-span-12 md:col-span-8">
                    <h2 className="text-2xl md:text-2xl">About</h2>
                    <PortableText value={user.description}/>
                </div>
            </section>
        </motion.div>
    )
}