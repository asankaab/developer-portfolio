'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
// import '@/app/main.css'
 
export default function Loading() {
  return (
    <div className="container w-full mx-auto px-3">
      <div className="flex justify-center items-center min-h-dvh">
        <div className="loader"></div>
      </div>
      <div className='fixed bottom-5 right-5'>
        <Image src="./logo_contained.svg" width={40} height={40} alt='logo'/>
      </div>
    </div>
  )
}