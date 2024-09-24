import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Card from "@/components/Card";
import ReviewCard from "@/components/ReviewCard";
import Link from "next/link";
import { NavList } from "@/components/NavList";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { client } from "@/sanity/lib/client";
import { getProjectList, getTestimonials } from "@/hooks/useData";
import Footer from "@/components/Footer";

export default async function Home() {

  const cardData = await getProjectList();
  const testimonials = await getTestimonials();

  return (
    <>
    <main className="container w-full mx-auto px-3">
      <div className="min-h-80 flex flex-wrap">
        <div className="md:w-1/2 grid items-center">
          <div className="flex gap-2 w-3/4">
            <Avatar>
              <AvatarImage src="./avatar.png" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-5xl col-span-3">Hello! I&apos;m Asanka Abewickrama</h1>
          </div>
        </div>
        <div className="md:w-1/2 grid items-center">
          <div className="grid gap-2">
            <h2 className="text-2xl md:text-3xl">A web designer/developer and graphic designer</h2>
            <p>Passionate create and develop great experiences.</p>
            <div className="flex gap-2">
              <Link href="/work"><Button>See Work</Button></Link>
              <Link href="/contact"><Button variant="outline">Contact</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div className="w-full bg-grayshade py-4">
      <div className="container w-full mx-auto px-3">
        <section className="py-6 md:py-10 grid grid-cols-12">
          <div className=" flex flex-wrap col-span-12 md:col-span-4">
            <div className="grid items-center">
              <div className="grid gap-2">
                <h2 className="text-2xl md:text-2xl">Working Experience</h2>
                <p>Freelance graphic designer</p>
                <p>&mdash; Since 2015</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-wrap col-span-12 md:col-span-8">
            <div className="grid items-center">
              <p>I am working as a freelance graphic designer since 2015. My main platform is Fiverr.com and I have mainly designed logos. I also designed flyers, posters, business cards and website designs for various clients all over the world.</p>
            </div>
          </div>
        </section>
        <section className="py-6 md:py-10">
          <div className="grid gap-2">
              <h2 className="text-2xl md:text-2xl">Portfolio</h2>
              <p>Most Recent Works</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
            {cardData?.map((item) => {
              return (
                <Card key={item._id} href={"work/" + item.slug.current} title={item.title} date={item.date} image={item.images[0]} />
              )
            })}
          </div>
        </section>
        <section className="py-6 md:py-10">
          <div className="grid gap-2">
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
        </section>
      </div>
    </div>
    <div className="container w-full mx-auto px-3">
      <div className="min-h-80 flex flex-col justify-center items-center">
          <h1 className="text-5xl pb-4">Let&apos;s discuss!</h1>
          <Link href="/contact"><Button>Contact</Button></Link>          
      </div>
      <Footer/>
    </div>
    </>
  );
}
