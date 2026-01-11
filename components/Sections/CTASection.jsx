import React from 'react'
import SectionContainer from '../Common/SectionContainer'
import Heading from '../Common/Heading'
import ButtonLargeWhite from '../Button/ButtonLargeWhite'

export default function CTASection({heading= "", description="", children}) {
    return (
        <div className='relative pb-[50px] md:pb-20'>

            <div className='px-4 2xl:px-0'>
                <div className='container bg-linear-to-b from-pink-500  to-primary-red to-50% py-6 md:py-[60px] rounded-3xl relative z-10'>
                    <Heading headingText={heading} subHeadingText={description} varient="dark" subHeadingAdditionalClass="max-w-[748px]"/>

                    <div className="flex justify-center items-center gap-[15px] pt-6 md:pt-10 relative w-full md:w-fit mx-auto">
                        {children}

                        <img src="/icons/sections/CTASection/arrow.svg" alt="" className='absolute top-4 -right-28 w-[55px] h-[67px] hidden md:block' />
                    </div>

                </div>
            </div>

            <div className="bg-deep-navy h-1/2 absolute bottom-0 w-full hidden md:block z-0"></div>
        </div>
    )
}
