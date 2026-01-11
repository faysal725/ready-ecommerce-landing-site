import ButtonIconSmall from "../Button/ButtonIconSmall";
import ButtonLarge from "../Button/ButtonLarge";
import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import GradientContainer from "../Containers/GradientContainer";
import Link from "next/link";
import GradientBorderWrapper from "../wrapper/GradientBorderWrapper";



function FeatureCard({ featureCardData }) {


    return (
        <div className="w-full rounded-lg  flex flex-col items-center snap-center gap-[15px] p-3 sm:p-4 bg-white">
            <img src={featureCardData.imageSrc} alt="" className="w-14 h-14 object-cover"/>

            <p className="text-xs sm:text-base font-medium text-center text-[#626262]">
                {featureCardData.title}
            </p>
        </div>
    )
}

function AllFeatures() {

    // all services are in here
    const servicesData = [
        {
            title: "Role-based dashboards for clarity",
            imageSrc: "/images/sections/InterfaceDecisionSection/1.png",

        },
        {
            title: "Minimal, clean layouts for faster actions",
            imageSrc: "/images/sections/InterfaceDecisionSection/2.png",

        },
        {
            title: "Mobile-first flows for real-world usage",
            imageSrc: "/images/sections/InterfaceDecisionSection/3.png",

        },
        {
            title: "Consistent design system across all apps",
            imageSrc: "/images/sections/InterfaceDecisionSection/4.png",

        },
    ]

    return (

        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 relative">
                {/* cards */}
                {
                    servicesData.map((service, index) => {
                        return (
                            <FeatureCard key={index} featureCardData={service} />
                        )
                    })
                }

            </div>

        </>

    )
}


export default function InterfaceDecisionSection() {
    return (
        <>
            <SectionContainer
                HeadingComponent={
                    <Heading
                        headingText="Design & UX Decisions" subHeadingText="Every interface was designed to reduce friction and improve clarity for different user roles."
                        varient="light"
                        subHeadingAdditionalClass="max-w-[828px]"
                    />
                }
                mainComponent={<AllFeatures />}
                backgroundColorClass="bg-[#fff1f4]"
            />
        </>
    );
}