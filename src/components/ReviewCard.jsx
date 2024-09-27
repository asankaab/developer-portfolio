import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client"
import { child } from "@/app/(app)/animation";

export default function ReviewCard({description, name}) {
    return (
        <motion.div variants={child} className="bg-background p-4 border border-black/5 rounded-2xl min-h-36">
            <p className="text-sm">{description}</p>
            <h4 className="font-medium italic text-xs pt-1 text-neutral-500">&mdash; {name}</h4>
        </motion.div>
    )
}