import clsx from 'clsx'
import React from 'react'

export default function TestimonialCards2({ testimonialData }) {

    return (
        <div className={clsx("w-full md:h-[415px] relative gap-6 p-4 md:p-6 rounded-xl snap-center bg-primary-red text-white")}>
            <img src="/icons/sections/GrowingBusinessSection/quote2.svg" alt="" className='absolute top-5 right-5 z-0' />
            <div className='relative z-10 flex flex-col justify-center h-full'>
                <p className='text-xl md:text-[28px] text-wrap line-clamp-3'>
                    {testimonialData.review}
                </p>
                <div className='pt-6'>
                    <p className={clsx("text-base font-medium text-left text-white")}>{testimonialData.user.name}</p>
                    <p
                        className={clsx("text-sm text-left text-white/83")}
                    >{testimonialData.user.position}
                    </p>
                </div>
            </div>
        </div>
    )
}
