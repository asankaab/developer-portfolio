import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client"
import { childCard } from "@/app/(app)/animation";

export default function Card({href, title, date, image}) {

    return (
        <motion.div className="bg-background group shadow-xl shadow-neutral-500/5 p-4 border border-black/5 rounded-xl transition" variants={childCard}>
        <Link href={href}>
            <div className="overflow-hidden flex justify-center items-center rounded-lg border border-black/5 aspect-video">
                <Image src={urlFor(image).width(900).url()} width={900} height={900} alt="card image" className="transition group-hover:scale-110" />
            </div>
            <div className="flex justify-between pt-3">
                <h1 className="font-medium transition opacity-70 group-hover:opacity-100">{title}</h1>
                <p className="text-xs opacity-70">{date}</p>
            </div>
        </Link>
        </motion.div>
    )
}