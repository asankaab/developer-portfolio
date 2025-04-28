import { getProject } from "@/hooks/useData";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import BackButton from "@/components/BackButton";
import { PortableText } from "next-sanity";
import Spacer from "@/components/Spacer";
import { description } from "@/components/PortableComponents";

export default async function Page({params}) {

  const urlPara = await params;

  const project = await getProject(urlPara.slug)
  console.log(project)

  if (project) {

    return (
    <div className="w-full">
      <Spacer/>
      <div className="container w-full mx-auto px-3">
        <div className="flex justify-between items-center pb-2">
          <BackButton/>              
          <span className="text-xs bg-grayshade px-2 py-1 rounded-full">{project.date}</span>
        </div>
        <section>
          <div className="flex justify-center">
            <div className="w-11/12 md:w-11/12">
              <Carousel>
                  <CarouselContent>
                    {project.images.map((item) => {
                      return (
                        <CarouselItem key={item._key}>
                          <Image className="rounded-xl border" src={urlFor(item).width(1920).height(1200).url()} width={1920} height={1200} alt={item.asset._ref}/>
                        </CarouselItem>
                      )
                    })}
                  </CarouselContent>
                  <CarouselPrevious/><CarouselNext/>
              </Carousel>
            </div>
          </div>
          <div className="md:flex gap-4 mt-8 w-11/12 mx-auto justify-between items-start">
            <div className="w-full md:w-8/12">
              <h1 className="text-3xl py-2">{project.title}</h1>
              <PortableText value={project.description} components={description}/>
            </div>
            <div className="p-2 w-full md:w-4/12 border rounded-xl">links</div>
          </div>
        </section>
      </div>
    </div>
    )
  } else {
    return <div className="container w-full mx-auto px-3">
      <h1>Content not found!</h1>
      <BackButton/>
    </div>
  }
}