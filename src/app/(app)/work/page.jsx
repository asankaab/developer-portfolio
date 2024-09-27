import Card from "@/components/Card";
import { getProject, getProjectList } from "@/hooks/useData";
import { urlFor } from "@/sanity/lib/image";
import * as motion from "framer-motion/client"
import { parent } from "@/app/(app)/animation";

export default async function Page({params}) {

  const cardData = await getProjectList();

  return (
    <div className="container w-full mx-auto px-3">
      <motion.section variants={parent} initial="hidden" whileInView="visible" className="py-6 md:py-10">
        <div className="grid gap-2">
            <h2 className="text-2xl md:text-2xl">Portfolio</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
          {cardData?.map((item) => {
            return (
              <Card key={item._id} href={"work/" + item.slug.current} title={item.title} date={item.date} image={item.images[0]} />
            )
          })}
        </div>
    </motion.section>
  </div>
  )
}