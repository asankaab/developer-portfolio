import { getUser } from "@/hooks/useData"
import Link from "next/link";

export default async function Page() {

    const user = await getUser();
    return (
        <div className="container w-full mx-auto px-3">
            <section className="py-6 md:py-10">
                <div className="grid gap-2">
                    <h2 className="text-2xl md:text-2xl">Contact</h2>
                    <p><span className="text-xs">Email </span><Link href={"mailto:" + user.email}>{user.email}</Link></p>
                </div>
            </section>
        </div>
    )
}