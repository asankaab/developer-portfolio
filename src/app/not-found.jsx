'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import './main.css'
import Footer from '@/components/Footer'
import { useRouter } from 'next/navigation'
 
export default function NotFound() {

  const router = useRouter();

  return (
    <div className="container w-full mx-auto px-3">
      <div className="min-h-svh flex flex-col justify-center items-center gap-2">
        <h2 className='text-3xl'>Not Found!</h2>
        <p>Could not find requested resource.</p>
        <Link href="/"><Button onClick={()=> router.back()}>Go Back</Button></Link>      
      </div>
      <div className='absolute bottom-0'><Footer/></div>
    </div>
  )
}