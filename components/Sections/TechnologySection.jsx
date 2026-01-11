import ButtonIconSmall from "../Button/ButtonIconSmall";
import ButtonLarge from "../Button/ButtonLarge";
import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import GradientContainer from "../Containers/GradientContainer";
import Link from "next/link";
import GradientBorderWrapper from "../wrapper/GradientBorderWrapper";



function TechnologyCard({ technologyCardData }) {


    return (
        <div className="w-full rounded-lg  flex flex-col items-center snap-center gap-[15px] p-3 sm:p-6 bg-white border border-[#e9ecef]/60  transition-all duration-200 hover:border-red-light hover:shadow-xl shadow-red-light">
            <img src={technologyCardData.imageSrc} alt="" className="w-14 h-14 object-contain"/>

            <p className="text-xs lg:text-lg font-medium text-center text-[#626262]">
                {technologyCardData.title}
            </p>
        </div>
    )
}

function AllTechnologies() {

    // all services are in here
    const technologiesData = [
        {
            title: "Laravel-based backend with secure APIs",
            imageSrc: "/images/sections/TechnologySection/1.png",

        },
        {
            title: "Vue.js powered website",
            imageSrc: "/images/sections/TechnologySection/2.png",

        },
        {
            title: "Android & iOS mobile application",
            imageSrc: "/images/sections/TechnologySection/3.png",

        },
        {
            title: "Modular system for easy customization",
            imageSrc: "/images/sections/TechnologySection/4.png",

        },
        {
            title: "Optimized security and performance layers",
            imageSrc: "/images/sections/TechnologySection/5.png",

        },
        {
            title: "Build for speed and scalability",
            imageSrc: "/images/sections/TechnologySection/6.png",

        },
    ]

    return (

        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 relative">
                {/* cards */}
                {
                    technologiesData.map((technology, index) => {
                        return (
                            <TechnologyCard key={index} technologyCardData={technology} />
                        )
                    })
                }

            </div>

        </>

    )
}


export default function TechnologySection() {
    return (
        <>
            <SectionContainer
                HeadingComponent={
                    <Heading
                        headingText="Technology & Architecture" 
                        subHeadingText="Built with a modern, scalable architecture to support high performance and long-term growth."
                        varient="light"
                        subHeadingAdditionalClass="max-w-[828px]"
                    />
                }
                mainComponent={<AllTechnologies />}
                backgroundColorClass=""
            />
        </>
    );
}