import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function Card({href, title, date, image}) {
    return (
        <Link href={href} className="bg-background p-4 border border-black/5 rounded-2xl transition hover:scale-105 group">
            <div className="overflow-hidden flex justify-center items-center rounded-lg border border-black/5 aspect-video">
                <Image src={urlFor(image).width(600).url()} width={800} height={700} alt="card image" className="transition group-hover:scale-110" />
            </div>
            <h1 className="font-medium pt-1">{title}</h1>
            <p className="text-xs  group-hover:translate-x-2 transition duration-700">{date}</p>
        </Link>
    )
}