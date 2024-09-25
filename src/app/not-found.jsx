'use client'

import './main.css'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
 
export default function NotFound() {

  return (
    <div className="container w-full mx-auto px-3">
      <div className="min-h-svh flex flex-col justify-center items-center gap-2">
        <h2 className='text-3xl'>Not Found!</h2>
        <p>Could not find requested resource.</p>
        <BackButton/> 
      </div>
      <div className='absolute bottom-0'><Footer/></div>
    </div>
  )
}