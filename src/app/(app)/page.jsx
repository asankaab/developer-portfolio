import { Button } from "@/components/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Card from "@/components/Card";
import ReviewCard from "@/components/ReviewCard";
import Link from "next/link";
import { NavList } from "@/components/NavList";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { client } from "@/sanity/lib/client";
import { getProjectList, getTestimonials, getUser } from "@/hooks/useData";
import Footer from "@/components/Footer";
import { urlFor } from "@/sanity/lib/image";
import * as motion from "framer-motion/client"
import { child, parent } from "./animation";

export default async function Home() {

  const user = await getUser();
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
      <motion.div variants={parent} viewport={{once: true}} initial="hidden" whileInView="visible" className="min-h-80 flex flex-wrap">
        <motion.div variants={child} className="md:w-1/2 grid items-center">
          <div className="flex gap-2 w-3/4">
            <Avatar>
              <AvatarImage src={urlFor(user.photo).width(300).url()} alt="avatar"/>
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-5xl col-span-3">Hello! I&apos;m {user.name}</h1>
          </div>
        </motion.div>
        <motion.div variants={child} className="md:w-1/2 grid items-center">
          <div className="grid gap-2">
            <h2 className="text-2xl md:text-3xl">{user.occupation}</h2>
            <p>{user.slogan}</p>
            <div className="flex gap-2">
              <Link href="/work"><Button>See Work</Button></Link>
              <Link href="/contact"><Button variant="outline">Contact</Button></Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
    <div className="w-full bg-grayshade py-4">
      <div className="container w-full mx-auto px-3">
        <motion.section variants={parent} viewport={{once: true}} initial="hidden" whileInView="visible" className="py-6 md:py-10">
        <motion.h2 variants={child} className="text-2xl md:text-2xl">Work Experience</motion.h2>
        {user?.experience.map((item) => {
            return ( 
          <motion.div variants={child} key={item._key} className=" grid grid-cols-12 pt-5">
            <div className="col-span-12 md:col-span-4 py-2">
                <p className="pb-2">{item.title}</p>
                <span className="border rounded-full bg-black/5 px-2 py-1 text-xs"> &mdash; Since {item.yearStart}  {item.yearEnd ? " to " + item.yearEnd : null }&nbsp;</span>
            </div>
            <div className="col-span-12 md:col-span-8 py-2">
                <p className="text-sm">{item.details}</p>
            </div>
          </motion.div> )
          })}
        </motion.section>
        <motion.section variants={parent} viewport={{once: true}} initial="hidden" whileInView="visible" className="py-6 md:py-10">
          <motion.div variants={child} className="grid gap-2 py-5">
              <h2 className="text-2xl md:text-2xl">Portfolio</h2>
              <p>Most Recent Works</p>
          </motion.div>
          <motion.div variants={parent} viewport={{once: true}} initial="hidden" whileInView="visible" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
            {projectList?.map((item) => {
              return (
                <Card variants={list} key={item._id} href={"work/" + item.slug.current} title={item.title} date={item.date} image={item.images[0]} />
              )
            })}
          </motion.div>
          <div className="flex justify-center items-center pt-8"><Link href="/work"><Button variant="outline" className="hover:bg-foreground hover:text-background">See More</Button></Link></div>          
        </motion.section>
        <motion.section variants={parent} viewport={{once: true}} initial="hidden" whileInView="visible" className="py-6 md:py-10">
          <div className="grid gap-2 py-5">
              <h2 className="text-2xl md:text-2xl">Testimonials</h2>
              <p>Client Reviews</p>
          </div>
          <div className="py-4">
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
              <CarouselPrevious className="hidden md:grid" /><CarouselNext className="hidden md:grid" />
            </Carousel>
          </div>
        </motion.section>
      </div>
    </div>
    <motion.div variants={parent} viewport={{once: true}} initial="hidden" whileInView="visible" className="container w-full mx-auto px-3">
      <motion.div variants={child} className="min-h-80 flex flex-col justify-center items-center">
          <h1 className="text-5xl pb-4">Let&apos;s discuss!</h1>
          <Link href="/contact"><Button>Contact</Button></Link>
      </motion.div>
      <Footer/>
    </motion.div>
    </>
  );
}
