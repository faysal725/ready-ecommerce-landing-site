import React from 'react'
import GradientBorderWrapper from '../wrapper/GradientBorderWrapper'

export default function ImpactSection() {


    const impactData = [
        { title: "Weeks instead of months", description: "Faster Launch" },
        { title: "Weeks instead of months", description: "Multi-Vendor Ready" },
        { title: "Multi-language And multi-currency support", description: "Global Use" },
    ]
    return (
        <section className="max-w-[994px] mx-auto py-6 md:py-[100px] px-4 md:px-[54px] bg-deep-navy rounded-3xl">
            <p className='text-[28px] md:text-4xl font-semibold text-center text-white'>
                Real-World Impact
            </p>
            <div className="pt-6 md:pt-[60px] pb-[10px] md:pb-10 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
                {
                    impactData.map((impact, index) => (
                        <GradientBorderWrapper
                            key={index}
                            colors={['#0A1A2F', '#ff3f73a1']}
                            thickness="2"
                            borderRadius="25px"
                            padding="0px"
                            angle="50deg"
                        >
                            <div className='p-6 bg-gradient-to-br from-primary-red from-[-40%] via-deep-navy via-[50%] to-primary-red to-[150%] rounded-3xl flex flex-col gap-6 h-full'>
                                <p className="text-base md:text-[22px] font-bold text-center text-primary-red">{impact.title}</p>
                                <p class="text-sm md:text-lg text-center text-white/70">{impact.description}</p>
                            </div>
                        </GradientBorderWrapper>
                    ))
                }
            </div>
            <p className="text-sm md:text-lg text-center text-white/70 max-w-xl mx-auto">
                Ready eCommerce helps businesses move from idea to operation faster, with fewer technical
                barriers.
            </p>
        </section>
    )
}
