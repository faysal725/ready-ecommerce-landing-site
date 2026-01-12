import React from 'react'
import GradientBorderWrapper from '../wrapper/GradientBorderWrapper'

export default function ProblemSection() {


    const problemData = [
        { title: "Businesses struggled with rigid eCommerce systems that were hard to customize.", imgSrc: "/images/sections/problemSection/1.png" },
        { title: "Managing vendors, deliveries, payments, and apps required multiple tools.", imgSrc: "/images/sections/problemSection/2.png" },
        { title: "Launching a scalable multi-vendor platform took months and high development costs.", imgSrc: "/images/sections/problemSection/3.png" },
    ]
    return (
        <section className='pt-6 md:pt-[50px]'>
        <div className="max-w-[994px] mx-auto py-6 md:py-[75px] px-4 md:px-[54px] rounded-3xl bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url(/images/sections/ProblemSection/bg.png)" }}>
            <p className='text-[28px] md:text-4xl font-semibold text-center text-white'>
                The <span className='relative'>Problem <img src="/icons/sections/ProblemSection/underline.svg" className="absolute -bottom-4 left-1/2 -translate-x-1/2 hidden md:block" alt="" /> </span> We Identified
            </p>
            <div className="pt-6 md:pt-[60px] flex justify-start items-stretch overflow-x-scroll scrollbar_hide lg:grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 snap-x">
                {
                    problemData.map((problem, index) => (
                        <div key={index} className="min-w-[280px] flex flex-col gap-4 md:gap-[30px] rounded-3xl p-6 bg-white/6 border border-[#e9ecef]/20 snap-center">

                            <div className='w-14 h-14 md:w-[68px] md:h-[68px] flex justify-center items-center rounded-xl bg-white'>
                                <img src={problem.imgSrc} className='w-8 h-8 md:w-12 md:h-12' alt="" />
                            </div>
                            <p className="text-sm md:text-lg text-left text-white/80">{problem.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>

        </section>
    )
}
