'use client'

import { CornerUpLeft, Undo2 } from 'lucide-react';
import { useRouter } from 'next/navigation'

export default function BackButton() {

    const router = useRouter();

    return (
        <button onClick={()=> router.back()} className='bg-grayshade/5 rounded-full px-3 py-1 border border-neutral-500/20'>
            <div className='flex items-center gap-2 text-xs'><CornerUpLeft size={15}/> Back</div>
        </button>
    )
}