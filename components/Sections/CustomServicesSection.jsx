import Heading from "@/components/Common/Heading";
import SectionContainer from "@/components/Common/SectionContainer";
import GradientBorderWrapper from "../wrapper/GradientBorderWrapper";
import clsx from "clsx";
import SliderContainer from "../Containers/SliderContainer";


function FeatureCard({ featureCardData }) {

    return (
        <div className="min-w-[300px] flex-1 flex flex-col items-center gap-3 md:gap-[30px] rounded-2xl transition-all duration-200 snap-center border border-[#e5e5e7]/92 hover:border-red-light hover:bg-red-light/20 p-4">
            <div className='w-full flex justify-start'>

                <div className='bg-linear-to-b from-[#D63384] via-primary-red to-primary-red h-[68px] w-[68px] rounded-xl flex justify-center items-center'>
                    <img src={featureCardData.iconSrc} alt="" className='w-9 h-9' />
                </div>
            </div>
            <div className='flex flex-col items-start text-start gap-[15px] w-full'>
                <p
                    className="text-base md:text-xl font-semibold text-left text-primary-black"
                >
                    {featureCardData.title}
                </p>
                <p className="text-sm md:text-lg text-left text-[#4a4a4a]">
                    {featureCardData.description}
                </p>

                <ul className="flex flex-col gap-2.5">
                    {featureCardData.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2.5">
                            <img src="/icons/tick-red.svg" alt="" className="w-4 h-4" />
                            <p className="text-xs md:text-base text-left text-[#626262]">{feature}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default function CustomServicesSection() {

    const featureData = [
        {
            title: "Full-Stack eCommerce Development",
            description: "End-to-end platform development built for scale and performance.",
            iconSrc: "/icons/sections/CustomServicesSection/1.svg",
            features: [
                "Custom backend & frontend architecture",
                "User, vendor, and delivery workflows",
                "Secure payments, analytics, & admin controls",
            ]
        },
        {
            title: "AI & Automation Solutions",
            description: "Smart features that reduce manual work and improve conversions.",
            iconSrc: "/icons/sections/CustomServicesSection/2.svg",
            features: [
                "Recommendation engines & automation logic",
                "Inventory and order intelligence",
                "Chatbots and API-based AI integrations",
            ]
        },
        {
            title: "Multi-Platform & Localization",
            description: "From small tweaks to advanced workflows, everything is built to grow with you.",
            iconSrc: "/icons/sections/CustomServicesSection/3.svg",
            features: [
                "Web, Android, and iOS applications",
                "Multi-language, multi-currency & RTL support",
                "Performance and scalability optimization",
            ]
        },
        {
            title: "Security by Design",
            description: "Enterprise-grade protection built into every layer.",
            iconSrc: "/icons/sections/CustomServicesSection/4.svg",
            features: [
                "GDPR & PCI-compliant implementations",
                "Secure authentication & data handling",
                "Ongoing monitoring and risk prevention",
            ]
        },
    ]
    return (
        <SectionContainer
            HeadingComponent={
                <Heading
                    headingText="Our Custom Development Services"
                    subHeadingText="Pick your focus—or mix them for a full-stack powerhouse."
                    varient="light"
                />
            }
            mainComponent={
                <>
                    <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {
                            featureData.map((feature, index) => (
                                <FeatureCard key={index} featureCardData={feature} />
                            ))
                        }
                    </div>

                    <div className="flex justify-start items-stretch gap-4 md:hidden overflow-x-scroll snap-x scrollbar_hide">
                        {
                            featureData.map((feature, index) => (
                                <FeatureCard key={index} featureCardData={feature} />
                            ))
                        }

                    </div>
                </>
            }

            backgroundColorClass="!pt-6 md:!pt-[50px] !pb-6 md:!pb-[50px]"
        />
    )
}