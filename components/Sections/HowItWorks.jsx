import React from 'react'
import Heading from '../Common/Heading'
import SectionContainer from '../Common/SectionContainer'
import GradientBorderWrapper from '../wrapper/GradientBorderWrapper'
import clsx from 'clsx'




function Workflow() {

    const workflows = [
        { iconSrc: "/icons/sections/howItWorks/desktop.svg", title: "Purchase & Download", description: "Instant access to all source code and assets" },
        { iconSrc: "/icons/sections/howItWorks/gear.svg", title: "Quick Setup", description: "Follow our wizard-guided installation process" },
        { iconSrc: "/icons/sections/howItWorks/global.svg", title: "Configure & Secure", description: "Set up payments, domains, and security settings" },
        { iconSrc: "/icons/sections/howItWorks/rocket.svg", title: "Launch & Grow", description: "Go live and start accepting orders immediately" },
    ]

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 lg:gap-11 relative">

                <div className='absolute top-10 w-full z-10'>
                    <svg
                        width="100%"
                        height="1"
                        viewBox="0 0 225 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <line
                            x1="-4.37114e-8"
                            y1="0.5"
                            x2="224.974"
                            y2="0.49998"
                            stroke="url(#paint0_radial_2262_2859)"
                            strokeOpacity="0.56"
                            strokeDasharray="2 2"
                        ></line>
                        <defs>
                            <radialGradient
                                id="paint0_radial_2262_2859"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientTransform="matrix(250.752 0 -293.628 3.05691 -6.88251 1)"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#DD2C5C"></stop>
                                <stop offset="0.795527" stopColor="#771832" stopOpacity="0"></stop>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>

                {/* <span className='absolute top-0 right-0 w-full border-dashed border'></span> */}


                {workflows.map((workflow, index) => (
                    <div key={index} className="flex flex-col items-center gap-[30px] z-10 ">
                        <div className={clsx('w-full flex justify-center bg-white  lg:mask-l-from-white lg:mask-l-to-transparent lg:mask-alpha', index === 0 && ' lg:mask-r-from-white lg:mask-r-from-65% lg:mask-r-to-transparent  lg:mask-l-from-100% ', index +1 === workflows.length ?  'lg:mask-r-from-white lg:mask-l-from-65% lg:mask-r-to-transparent  lg:mask-r-from-100% ': 'lg:mask-r-from-white lg:mask-l-from-65% lg:mask-r-to-transparent  lg:mask-r-from-65%')}>
                            <GradientBorderWrapper
                                colors={['#F8D5DE', '#ff8dac']}
                                thickness="2"
                                borderRadius="15px"
                                padding="0px"
                                angle="350deg"
                            >
                                <div className='bg-pink-100 p-5 rounded-xl'>
                                    <img src={workflow.iconSrc} alt="" className='w-9 h-9' />
                                </div>
                            </GradientBorderWrapper>
                        </div>
                        <div className='flex flex-col items-center text-center gap-2.5'>
                            <p className='text-lg font-semibold text-primary-black'>{workflow.title}</p>
                            <p className='text-base text-center text-[#626262] font-["roboto"]'>{workflow.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default function HowItWorks() {
    return (
        <>
            <SectionContainer
                HeadingComponent={
                    <Heading headingText="How It Works" subHeadingText="From purchase to launch in four simple steps." varient="light" />
                }
                mainComponent={<Workflow />}
            />
        </>
    )
}
