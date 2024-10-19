'use client'

import { ChevronLeft, CornerUpLeft, Undo2 } from 'lucide-react';
import { useRouter } from 'next/navigation'

export default function BackButton({className}) {

    const router = useRouter();

    return (
        <button onClick={()=> router.back()} className={'bg-grayshade/5 rounded-md p-2 border border-neutral-500/20 group ' + className}>
            <ChevronLeft className='group-hover:scale-125 transition'/>
        </button>
    )
}