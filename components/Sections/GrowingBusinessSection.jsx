import React from 'react'
import Heading from '../Common/Heading'
import clsx from 'clsx';



function TestimonialCard({ item, indexNo }) {

    const isEven = indexNo % 2 === 0;
    return (
        <div className={clsx("min-w-[300px] w-[300px] h-[211px] relative gap-6 p-6 rounded-xl snap-center ", isEven ? 'bg-[#ffedf1]' : 'bg-primary-red text-white')}>
            <img src="/icons/sections/GrowingBusinessSection/quote2.svg" alt="" className='absolute top-5 right-5 z-0' />
            <div className='relative z-10 flex flex-col justify-end h-full'>
                <p className=' text-base text-wrap line-clamp-3'>
                    {item.review}
                </p>
                <div className='pt-6'>
                    <p className={clsx("text-xs font-medium text-left ", !isEven ? 'text-white' : 'text-primary-black')}>{item.user.name}</p>
                    <p
                        className={clsx("text-[10px] text-left ", !isEven ? 'text-white' : 'text-[#626262]/83')}
                    >
                        — {item.user.position}
                    </p>
                </div>
            </div>
        </div>
    )
}



export default function GrowingBusinessSection() {


    const testimonialData = [
        {
            review: "“They understood our business needs quickly and delivered exactly what we needed.”",
            user: {
                name: "Mikel D.",
                position: "Founder, SaaS Startup"
            }
        },

        {
            review: "“They understood our business needs quickly and delivered exactly what we needed.”",
            user: {
                name: "Mikel D.",
                position: "Founder, SaaS Startup"
            }
        },


        {
            review: "“They understood our business needs quickly and delivered exactly what we needed.”",
            user: {
                name: "Mikel D.",
                position: "Founder, SaaS Startup"
            }
        },


        {
            review: "“They understood our business needs quickly and delivered exactly what we needed.”",
            user: {
                name: "Mikel D.",
                position: "Founder, SaaS Startup"
            }
        },


        {
            review: "“They understood our business needs quickly and delivered exactly what we needed.”",
            user: {
                name: "Mikel D.",
                position: "Founder, SaaS Startup"
            }
        },
    ]
    return (
        <div className='py-6 md:py-[50px] flex flex-col gap-[60px]'>
            <div className="relative container">
                <img src="/icons/sections/GrowingBusinessSection/underline.svg" alt="" className="absolute w-52 top-9 hidden lg:block right-[400px] xl:right-[500px]" />
                <Heading headingText="Trusted by Growing Businesses" subHeadingText="Teams worldwide rely on us to adapt their platforms as they scale." varient="light" />
            </div>


            <div className='max-w-[100vw] overflow-hidden space-y-2 lg:mask-alpha lg:mask-r-from-black lg:mask-r-from-70% lg:mask-r-to-transparent lg:mask-l-from-black lg:mask-l-from-70% lg:mask-l-to-transparent hidden lg:block'>
                <marquee className="marq overflow-hidden" direction="left" loop={true}>
                    <div className="flex justify-center items-center gap-4">
                        {
                            testimonialData.map((item, index) => (
                                <TestimonialCard key={Math.random(index)} item={item} indexNo={index} />
                            )
                            )
                        }
                    </div>
                </marquee>


                <marquee className="marq overflow-hidden" direction="right" loop={true}>
                    <div className="flex justify-center items-center gap-4">
                        {
                            testimonialData.map((item, index) => (
                                <TestimonialCard key={Math.random(index)} item={item} indexNo={index} />
                            )
                            )
                        }
                    </div>
                </marquee>

            </div>

            <div className="container flex justify-start items-center gap-4 lg:hidden overflow-x-scroll snap-x scrollbar_hide">
                {
                    testimonialData.map((item, index) => (
                        <TestimonialCard key={Math.random(index)} item={item} indexNo={index} />
                    )
                    )
                }

            </div>
        </div>
    )
}




