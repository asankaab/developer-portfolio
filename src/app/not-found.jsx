import { Button } from '@/components/Button'
import './main.css'
import BackButton from '@/components/BackButton'
import Link from 'next/link'
import { HomeIcon } from 'lucide-react'
 
export default function NotFound() {

  return (
    <div className="container w-full mx-auto px-3">
      <div className="min-h-svh flex flex-col justify-center items-center gap-2">
        <h2 className='text-3xl'>Not Found!</h2>
        <p>Could not find requested resource.</p>
        <div className='flex gap-2'>
          <BackButton/>
          <Link className='bg-grayshade/5 rounded-md p-2 border border-neutral-500/20 text-xs flex gap-2 group' href='/'><HomeIcon size={24} className='group-hover:scale-125 transition'/></Link>
        </div>
        
      </div>
    </div>
  )
}