import React from 'react'
import SectionContainer from '../Common/SectionContainer'
import StepContainer from '../Containers/StepContainer'
import Heading from '../Common/Heading'



function StepNoComponent({ step }) {
    return (
        <img src={step} alt="" className='w-5 h-5 md:w-7 md:h-7' />
    )
}

function StepDescriptionComponent({ descriptionData }) {

    return (
        <div className='flex flex-col justify-start gap-2.5 md:h-28'>
            <p className="text-base font-medium text-left text-primary-red">{descriptionData.year}</p>
            <div className='space-y-2.5'>
                <p className="text-base font-semibold text-left text-primary-black">{descriptionData.title}</p>
                <p className="text-sm text-left text-[#2b2424]/60">
                    {descriptionData.description}
                </p>
            </div>
        </div>
    )
}

export default function BehindStorySection() {

    const stepData = [
        { stepComponent: <StepNoComponent step={"/icons/sections/BehindStorySection/1.svg"} />, stepDescriptionComponent: <StepDescriptionComponent descriptionData={{ year: "2020", title: "Founded", description: "Started with a vision to revolutionize ecommerce solutions." }} /> },
        { stepComponent: <StepNoComponent step={"/icons/sections/BehindStorySection/2.svg"} />, stepDescriptionComponent: <StepDescriptionComponent descriptionData={{ year: "2021", title: "Global Expansion", description: "Expanded operations to 10+ countries with diverse clients." }} /> },
        { stepComponent: <StepNoComponent step={"/icons/sections/BehindStorySection/3.svg"} />, stepDescriptionComponent: <StepDescriptionComponent descriptionData={{ year: "2022", title: "Product Launch", description: "Launched our flagship ecommerce platform to rave reviews." }} /> },
        { stepComponent: <StepNoComponent step={"/icons/sections/BehindStorySection/4.svg"} />, stepDescriptionComponent: <StepDescriptionComponent descriptionData={{ year: "2023", title: "Industry Leader", description: "Recognized as a top innovator in digital commerce solutions." }} /> },
    ]
    return (
        <SectionContainer
            HeadingComponent={
                <Heading
                    headingTitle="Our Journey"
                    headingText="Behind the Story"
                    subHeadingText="From a small startup to a global force in ecommerce innovation"
                    varient="light"
                />
            }
            mainComponent={
                <div className="">
                    <StepContainer stepData={stepData} isReverse={true} showTail={true} />
                    <div className='flex flex-col items-start md:items-center mt-[50px]'>
                        <img src="/icons/sections/GrowingBusinessSection/quote2.svg" alt="" className="w-[50px] mx-auto" />

                        <p className="text-xl md:text-[28px] italic text-start md:text-center font-medium text-primary-black my-4 md:mt-6 md:mb-5 font-['poppins']">
                            We believe in creating technology that empowers businesses to <br /> reach their full potential in the digital age.
                        </p>
                        <p className="text-lg text-start md:text-center text-[#626262]/60 font-['poppins']">— Founding Team</p>
                    </div>
                </div>
            }
            backgroundColorClass="bg-white"
        />
    )
}


