import React from 'react'
import SectionContainer from '../Common/SectionContainer'
import StepContainer from '../Containers/StepContainer'



function StepNoComponent({ step }) {
    return (
        <p className="text-lg md:text-[28px] font-semibold text-left text-black">{step}</p>
    )
}

function StepDescriptionComponent({ descriptionData }) {

    return (
        <div className='flex flex-col justify-start gap-2.5'>
            <div className="flex justify-between items-center flex-1">
                <p className="text-sm md:text-base font-semibold text-primary-black">
                    {descriptionData.title}
                </p>

                <div className='bg-primary-red h-fit gap-2.5 rounded-[40px] px-2.5 py-1 w-fit text-white'>
                    <p className='text-[8px] md:text-xs font-medium text-center text-nowrap text-white'>{descriptionData.duration}</p>
                </div>
            </div>

            <p className='text-xs md:text-sm'>{descriptionData.description}</p>
        </div>
    )
}

export default function HowCustomizationWorksSection() {

    const stepData = [
        { stepComponent: <StepNoComponent step={1} />, stepDescriptionComponent: <StepDescriptionComponent descriptionData={{ title: "Get the Core Product", description: "Purchase Ready eCommerce from our official store or marketplace.", duration: "1 day" }} /> },
        { stepComponent: <StepNoComponent step={2} />, stepDescriptionComponent: <StepDescriptionComponent descriptionData={{ title: "Share Your Requirements", description: "Purchase Ready eCommerce from our official store or marketplace.", duration: "1-2 day" }} /> },
        { stepComponent: <StepNoComponent step={3} />, stepDescriptionComponent: <StepDescriptionComponent descriptionData={{ title: "Review the Proposal", description: "We provide a clear scope of work, cost estimate, and delivery timeline for approval.", duration: "2-3 days" }} /> },
        { stepComponent: <StepNoComponent step={4} />, stepDescriptionComponent: <StepDescriptionComponent descriptionData={{ title: "Development & Updates", description: "Our team builds your custom features in phases and keeps you updated throughout the process.", duration: "2 weeks" }} /> },
        { stepComponent: <StepNoComponent step={5} />, stepDescriptionComponent: <StepDescriptionComponent descriptionData={{ title: "Testing & Review", description: "In-house QA testing ensures performance, security, and stability before your review.", duration: "2-3 days" }} /> },
        { stepComponent: <StepNoComponent step={5} />, stepDescriptionComponent: <StepDescriptionComponent descriptionData={{ title: "Final Delivery", description: "We deliver the final code, assist with deployment, and provide documentation and support.", duration: "1-2 days" }} /> },
    ]
    return (
        <section className="container flex flex-col items-start gap-6 md:gap-[60px] py-[50px]">
            <div className="space-y-2.5 max-w-xl">
                <p className="text-[28px] text-center md:text-start md:text-4xl font-semibold text-[#24262d]">
                    How Customization Works
                </p>
                <p className="text-sm  md:text-2xl text-center md:text-start text-[#626262]">
                    A simple, structured process designed to save time and reduce risk.
                </p>
            </div>

            <div className='w-full'>
                <StepContainer stepData={stepData} />
            </div>
        </section>
    )
}


