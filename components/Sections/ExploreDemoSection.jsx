'use client'
import { useScrollTo } from '@/app/hooks/useScrollTo'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function ExploreDemoSection() {
    
    const { scrollToSection } = useScrollTo();
    return (
        <button onClick={() => scrollToSection('onlineBusiness')} className='max-w-[228px] w-full h-14 relative overflow-hidden flex justify-center items-center gap-2.5 px-5 rounded-lg cursor-pointer transition-all duration-300 hover:scale-110 border border-white'>
            <PlayCircleIcon className="h-7 w-7 text-white" />
            <p className="text-base font-medium text-center text-white">
                Explore The Demo
            </p>
        </button>
    )
}
