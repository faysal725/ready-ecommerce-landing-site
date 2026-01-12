import { PlayCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import ExploreDemoSection from './ExploreDemoSection'

export default function Herosection() {
    return (
        <section className='min-h-screen bg-[url(/images/sections/herosection/bg.png)] bg-bottom bg-cover bg-no-repeat'>
            <div className='container pt-[60px] flex flex-col items-center gap-6 relative'>
                <div className=' absolute top-0 -right-20 w-full h-full z-0 flex justify-center items-center'>
                    <img src="/images/sections/herosection/arrow.png" alt="" className='w-[125px] h-auto translate-x-80' />
                </div>



                <div className='w-full flex flex-col items-center relative z-10'>
                    <p className='text-[28px]  md:text-5xl font-bold text-center leading-snug md:leading-16 text-white'> Boost Your Business With <span className='text-[#fc0]'>Ready eCommerce</span> The Key to Your Online Success</p>

                    <p
                        className="text-sm md:text-2xl font-medium text-center text-white/[0.83] py-4 md:pt-6 md:pb-10"
                    >
                        Are you managing online stores and finding it challenging to keep everything efficient? Look no further.
                    </p>

                    <ExploreDemoSection />
                </div>
                <div className='w-full h-full flex justify-center items-center relative z-10'>
                    <img src="/images/sections/herosection/heroImg.png" alt="" className='object-contain' />
                </div>
            </div>
        </section>
    )
}
