import { getUser } from "@/hooks/useData"

export default async function Page() {

    const user = await getUser();
    return (
        <div className="container w-full mx-auto px-3">
            <section className="py-6 md:py-10 grid grid-cols-12">
                <div className="grid gap-2 col-span-12 md:col-span-8">
                    <h2 className="text-2xl md:text-2xl">About</h2>
                    <p>{user.description}</p>
                </div>
            </section>
        </div>
    )
}