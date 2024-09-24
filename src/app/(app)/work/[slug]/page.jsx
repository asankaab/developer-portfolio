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
          <div className="relative">
          <Carousel>
              <CarouselContent>
                {project.images?.map((item) => {
                  return (
                    <CarouselItem key={item._id}>
                      <Image src={urlFor(item).width(1200).url()} width={800} height={800} alt="image"/>
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
            <h1 className="text-3xl">{project.title}</h1>
          </div>
        </section>
      </div>
    </div>
    )
}