import React from 'react'
import SectionContainer from '../Common/SectionContainer'
import StepContainer from '../Containers/StepContainer'
import Heading from '../Common/Heading'



function StepNoComponent({ step }) {
    return (
        <img src={step} alt="" className='w-7 h-7' />
    )
}

function StepDescriptionComponent({ descriptionData }) {

    return (
        <div className='flex flex-col justify-start gap-2.5 h-28'>
            <p className="text-base font-medium text-left text-primary-red">{descriptionData.year}</p>
            <div>
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
            mainComponent={<StepContainer stepData={stepData} />}
            backgroundColorClass="bg-white"
        />
    )
}


