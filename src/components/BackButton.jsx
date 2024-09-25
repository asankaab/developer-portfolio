'use client'

import { Undo2 } from 'lucide-react';
import { useRouter } from 'next/navigation'

export default function BackButton() {

    const router = useRouter();

    return (
        <button onClick={()=> router.back()} className='bg-grayshade rounded-full px-4 py-2 border'>
            <div className='flex items-center gap-2 text-xs'><Undo2 size={15}/> Back</div>
        </button>
    )
}