import { getProject } from "@/hooks/useData";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Loading from "../../loading";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default async function Page({params}) {

  const project = await getProject(params.slug)

    return (
    <div className="w-full py-4">
      <div className="container w-full mx-auto px-3">
        <section className="py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative border border-black/5 rounded-xl overflow-hidden">
          <Carousel>
              <CarouselContent className="aspect-square">
                {project.images?.map((item) => {
                  return (
                    <CarouselItem key={item._key} className="flex justify-center items-center bg-grayshade">
                      <Image className="h-auto w-auto scale-75 rounded-lg" src={urlFor(item).width(800).url()} width={900} height={900} alt="image"/>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <div className="absolute bottom-8 right-20">
                <CarouselPrevious/><CarouselNext/>
              </div>
            </Carousel>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl">{project.title}</h1>
              <span className="text-xs bg-grayshade px-2 py-1 rounded-full">{project.date}</span>
            </div>
            <p className="py-2">{project.description}</p>
          </div>
        </section>
      </div>
    </div>
    )
}