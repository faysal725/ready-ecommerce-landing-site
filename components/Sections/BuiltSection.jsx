import Heading from "@/components/Common/Heading";
import SectionContainer from "@/components/Common/SectionContainer";
import GradientBorderWrapper from "../wrapper/GradientBorderWrapper";
import clsx from "clsx";
import SliderContainer from "../Containers/SliderContainer";


function FeatureCard({ featureCardData }) {

    return (
        <div className="min-w-[280px] flex flex-col items-center gap-[30px] rounded-2xl transition-all duration-200 snap-center border border-[#e5e5e7]/92 hover:border-red-light hover:bg-red-light/20 p-4">
            <div className='w-full flex justify-start'>
                <GradientBorderWrapper
                    colors={['#F8D5DE', '#ff8dac']}
                    thickness="2"
                    borderRadius="15px"
                    padding="0px"
                    angle="300deg"
                >
                    <div className='bg-pink-100 p-5 rounded-xl'>
                        <img src={featureCardData.iconSrc} alt="" className='w-9 h-9' />
                    </div>
                </GradientBorderWrapper>
            </div>
            <div className='flex flex-col items-start text-start gap-2.5 w-full'>
                <p className='text-lg font-semibold text-primary-black'>{featureCardData.title}</p>
                <p className='text-base text-start text-[#626262] font-["roboto"]'>{featureCardData.description}</p>
            </div>
        </div>
    )
}

export default function BuiltSection() {

    const featureData = [
        {
            title: "Custom-First Approach",
            description: "Every customization is designed around your business logic—not generic templates.",
            iconSrc: "/icons/sections/BuiltSection/1.svg",
        },
        {
            title: "Platform Experts",
            description: "Work directly with the developers who built the system and know it inside out.",
            iconSrc: "/icons/sections/BuiltSection/2.svg",
        },
        {
            title: "Scalable Architecture",
            description: "From small tweaks to advanced workflows, everything is built to grow with you.",
            iconSrc: "/icons/sections/BuiltSection/3.svg",
        },
        {
            title: "Security by Design",
            description: "All custom code follows strict security standards and internal review processes.",
            iconSrc: "/icons/sections/BuiltSection/4.svg",
        },
        {
            title: "Fast & Transparent Delivery",
            description: "Clear timelines, regular updates, and full visibility at every stage.",
            iconSrc: "/icons/sections/BuiltSection/5.svg",
        },
        {
            title: "Quality Assured",
            description: "In-house QA testing ensures stability, performance, and reliability before delivery.",
            iconSrc: "/icons/sections/BuiltSection/6.svg",
        },
    ]
    return (
        <SectionContainer
            HeadingComponent={
                <Heading headingText="Built Around Your Business, Not Templates" subHeadingText="We don’t force your business into a fixed system. Instead, we adapt the platform to work exactly the way you need." varient="light" />
            }
            mainComponent={
                <>
                    <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {
                            featureData.map((feature, index) => (
                                <FeatureCard key={index} featureCardData={feature} />
                            ))
                        }
                    </div>

                    <div className="flex justify-start items-center gap-4 md:hidden overflow-x-scroll snap-x scrollbar_hide">
                        {
                            featureData.map((feature, index) => (
                                <FeatureCard key={index} featureCardData={feature} />
                            ))
                        }

                    </div>
                </>
            }
        />
    )
}