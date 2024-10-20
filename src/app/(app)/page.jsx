import { Button } from "@/components/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Card from "@/components/Card";
import ReviewCard from "@/components/ReviewCard";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getExperiences, getProjectList, getSkills, getTestimonials, getUser } from "@/hooks/useData";
import { urlFor } from "@/sanity/lib/image";
import * as motion from "framer-motion/client"
import { child, parent, viewPortVal } from "./animation";
import { ArrowDown, Dot } from "lucide-react";
import { PortableText } from "next-sanity";
import { dataView } from "@/components/PortableComponents";

export default async function Home() {

  const user = await getUser();
  const skills = await getSkills();
  const experiences = await getExperiences();
  const projectList = await getProjectList(9);
  const testimonials = await getTestimonials();

  const list = {
    visible: { opacity: 1, transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }, },
    hidden: { opacity: 0 },
  }
  
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 , transition: { duration: 2, type: "tween" }},
  }

  return (
    <>
    <main className="container w-full mx-auto px-3">
      <motion.div variants={parent} viewport={viewPortVal} initial="hidden" whileInView="visible" className="py-20 md:min-h-dvh grid items-center relative">
        <motion.div variants={child} className="flex gap-2 flex-wrap md:flex-nowrap">
          <div className="grid pt-5">
            <Avatar className="border-2">
              <AvatarImage src={urlFor(user.photo).width(300).url()} alt="avatar"/>
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </div>
          <motion.div variants={parent} viewport={viewPortVal} initial="hidden" whileInView="visible" className="grid gap-2">
            <motion.h1 variants={child} className="text-4xl md:text-7xl lg:text-9xl uppercase font-medium">{user.name}</motion.h1>
            <motion.h2 variants={child} className="text-xl md:text-4xl">{user.occupation}</motion.h2>
            <motion.p variants={child} className="text-xs md:text-lg">{user.slogan}</motion.p>
            <motion.div variants={child} className="flex gap-2">
              <Button asChild><Link href="work">See Work</Link></Button>
              <Button asChild variant="outline"><Link href="/contact">Contact</Link></Button>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div variants={child} className="absolute right-0 bottom-10 md:bottom-20 hidden md:grid gap-1 justify-items-center">
          <p style={{textOrientation: 'sideways', writingMode: 'vertical-rl'}} className=" text-xs uppercase tracking-widest">Scroll to bottom</p>
          <motion.div className="grid gap-1 justify-items-center" animate={{ y: 20 }} transition={{ repeat: Infinity, repeatType: "mirror",  duration: 2, ease: "easeInOut" }}>
            <motion.div  animate={{ opacity: 1 }} transition={{ repeat: Infinity, repeatType: "mirror",  duration: 2, ease: "easeInOut" }}><Dot size={10}/></motion.div>
            <ArrowDown size={15}/></motion.div>
        </motion.div>
      </motion.div>
    </main>
    <div className="w-full bg-grayshade py-4">
      <div className="container w-full mx-auto px-3">
      <motion.section variants={parent} viewport={viewPortVal} initial="hidden" whileInView="visible" className="py-6">
        <motion.h2 variants={child} className="text-2xl">Skills</motion.h2>
        {skills?.map((item) => {
            return ( 
          <motion.div variants={child} key={item._id} className=" grid grid-cols-12 pt-2">
            <div className="col-span-12 md:col-span-4 pb-1">
                <p>{item.title}</p>
            </div>
            <div className="col-span-12 md:col-span-8 pb-1">
                <PortableText value={item.details} components={dataView} />
            </div>
          </motion.div> )
          })}
        </motion.section>
        <motion.section variants={parent} viewport={viewPortVal} initial="hidden" whileInView="visible" className="py-6">
        <motion.h2 variants={child} className="text-2xl">Work Experience</motion.h2>
        {experiences?.map((item) => {
            return ( 
          <motion.div variants={child} key={item._id} className=" grid grid-cols-12 pt-2">
            <div className="col-span-12 md:col-span-4 py-2">
                <p className="pb-1">{item.title}</p>
                <span className="border rounded-full bg-black/5 px-2 py-1 text-xs"> &mdash; Since {item.yearStart}  {item.yearEnd ? " to " + item.yearEnd : null }&nbsp;</span>
            </div>
            <div className="col-span-12 md:col-span-8 py-1">
                <p className="text-sm">{item.details}</p>
            </div>
          </motion.div> )
          })}
        </motion.section>
        <motion.section variants={parent} className="py-6">
          <motion.div variants={child} viewport={viewPortVal} initial="hidden" whileInView="visible" className="grid gap-2">
              <h2 className="text-2xl md:text-2xl">Portfolio</h2>
              <p>Most Recent Works</p>
          </motion.div>
          <motion.div variants={parent} viewport={viewPortVal} initial="hidden" whileInView="visible" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
            {projectList?.map((item) => {
              return (
                <Card variants={list} key={item._id} href={"work/" + item.slug.current} title={item.title} date={item.date} image={item.images[0]} />
              )
            })}
          </motion.div>
          <div className="flex justify-center items-center pt-8"><Link href="/work"><Button variant="outline" className="hover:bg-foreground hover:text-background">See More</Button></Link></div>          
        </motion.section>
        <motion.section variants={parent} viewport={viewPortVal} initial="hidden" whileInView="visible" className="py-6 md:py-10">
          <div className="grid gap-2 py-5">
              <h2 className="text-2xl md:text-2xl">Testimonials</h2>
              <p>Client Reviews</p>
          </div>
          <div className="py-4 px-5 md:px-0">
            <Carousel>
              <CarouselContent>
                {testimonials?.map((item) => {
                  return (
                    <CarouselItem key={item._id} className="md:basis-1/2 lg:basis-1/3">
                      <ReviewCard description={item.description} name={item.name}/>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious /><CarouselNext />
            </Carousel>
          </div>
        </motion.section>
      </div>
    </div>
    <motion.div variants={parent} viewport={viewPortVal} initial="hidden" whileInView="visible" className="container w-full mx-auto px-3">
      <motion.div variants={child} className="min-h-80 flex flex-col justify-center items-center">
          <h1 className="text-5xl pb-4">Let&apos;s discuss!</h1>
          <Link href="/contact"><Button>Contact</Button></Link>
      </motion.div>
    </motion.div>
    </>
  );
}
