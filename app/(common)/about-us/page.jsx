import ButtonLargeWhite from "@/components/Button/ButtonLargeWhite";
import Faq from "@/components/Sections/Faq";
import CTASection from "@/components/Sections/CTASection";
import Herosection3 from "@/components/Sections/Herosection3";
import Heading3 from "@/components/Common/Heading3";
import Link from "next/link";
import ButtonLarge from "@/components/Button/ButtonLarge";
import SectionContainer from "@/components/Common/SectionContainer";
import Heading from "@/components/Common/Heading";
import BuiltSection from "@/components/Sections/BuiltSection";
import HowCustomizationWorksSection from "@/components/Sections/HowCustomizationWorksSection";
import GrowingBusinessSection from "@/components/Sections/GrowingBusinessSection";
import ButtonIconLargeWhite from "@/components/Button/ButtonIconLargeWhite";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ButtonIconLargeWhiteOutline from "@/components/Button/ButtonIconLargeWhiteOutline";
import InvestmentSection from "@/components/Sections/InvestmentSection";
import CustomServicesSection from "@/components/Sections/CustomServicesSection";
import ConsultationSection2 from "@/components/Sections/ConsultationSection2";
import { Fragment } from "react";
import GradientBorderWrapper from "@/components/wrapper/GradientBorderWrapper";
import clsx from "clsx";
import TestimonialCarousel2 from "@/components/Sections/TestimonialCarousel2";
import ButtonIconLarge from "@/components/Button/ButtonIconLarge";
import BehindStorySection from "@/components/Sections/BehindStorySection";
import Title from "@/components/Additional/Title";

function HeadingSection() {
  return (
    <div className="relative">

      <img src="/icons/sections/AboutUsHeading/arrow.svg" alt="" className="absolute right-36 top-[60px] hidden lg:block" />
      <Heading3
        headingText="Where Innovation Meets Excellence"
        subHeadingText="At Ready eCommerce, we craft digital experiences that empower businesses and delight customers worldwide. "
        varient="dark"
        buttonSection={
          <div className="flex justify-center items-center flex-wrap gap-[15px]">

            {/* <Link href="#" target="_blank">
              <ButtonLarge name="Start Your Project" additionalClass="w-full md:w-[220px]" />
            </Link> */}

            <ButtonIconLarge name="Explore The Demo" additionalClass="flex-row-reverse">
              {/* <ArrowRightIcon className="h-5 w-5 text-white" /> */}
              <img src="/icons/playIcon.svg" alt="" />
            </ButtonIconLarge>

          </div>
        }
      />
    </div>
  )
}



function ImpactSection() {

  const impactCardData = [
    {
      title: "Projects Delivered",
      description: "Successfully completed projects across a wide range of industries, helping businesses achieve measurable growth.",
      impact: "80+",
    },
    {
      title: "Countries Served",
      description: "Expanding our global reach while providing local expertise and tailored solutions for diverse markets.",
      impact: "20+",
    },
    {
      title: "Team Members",
      description: "A team of talented professionals collaborating worldwide to deliver innovative ecommerce experiences.",
      impact: "30+",
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">

      {/* cards */}
      {
        impactCardData.map((impactCard, index) => (
          <div key={impactCard.impact} className="p-4 sm:p-6 flex flex-col gap-3 md:gap-6 rounded-3xl bg-white/[0.96] border border-red-light">
            <p className="text-[32px] md:text-[56px] font-bold text-primary-red leading-[50px]">{impactCard.impact}</p>
            <div className="space-y-2.5">
              <p className="text-base md:text-lg font-semibold text-primary-black">{impactCard.title}</p>
              <p className="text-xs md:text-base text-left text-[#626262]">{impactCard.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}





function MissionSection() {

  const missionCardData = [
    {
      title: "Dynamic App Development",
      description: "Creating cutting-edge mobile and web applications that drive engagement",
      iconSrc: "/icons/sections/MissionSection/1.svg",
    },
    {
      title: "Strategic Partnerships",
      description: "Building lasting relationships with clients and technology partners",
      iconSrc: "/icons/sections/MissionSection/2.svg",
    },
    {
      title: "Scalable Solutions",
      description: "Delivering platforms that grow with your business needs",
      iconSrc: "/icons/sections/MissionSection/1.svg",
    },
  ]
  return (
    <SectionContainer
      mainComponent={<div className="grid grid-cols-1 lg:grid-cols-2 gap-[37px]">

        <div className="hidden lg:flex justify-start items-center">
          <img src="/images/sections/MissionSection/rocket.png" alt="" className="w-full" />
        </div>
        <div className="">
          <div className="flex flex-col items-center lg:items-start">
            <Title title="What Drives Us" />
            <p className="text-[28px] md:text-4xl font-semibold pt-3 lg:pt-5 pb-2 lg:pb-4 leading-snug md:leading-normal">Our Mission</p>
            <p className="text-sm lg:text-xl text-center lg:text-left text-[#626262]">
              We're on a mission to democratize ecommerce technology, making powerful tools accessible to businesses of all sizes. Our goal is to empower entrepreneurs and enterprises alike to thrive in the digital marketplace.
            </p>

            <div className="mt-6 md:mt-[50px] flex flex-col gap-6 w-full">
              {
                missionCardData.map((missionCard, index) => (
                  <div key={index} className="w-full flex justify-start gap-5 md:gap-[30px]">
                    <div>
                      <GradientBorderWrapper
                        colors={['#F8D5DE', '#ff8dac']}
                        thickness="2"
                        borderRadius="15px"
                        padding="0px"
                        angle="300deg"
                      >
                        <div className='bg-pink-100 w-14 h-14 md:w-[68px] md:h-[68px] flex justify-center items-center rounded-xl'>
                          <img src={missionCard.iconSrc} alt="" className='w-[30px] h-[30px]' />
                        </div>
                      </GradientBorderWrapper>
                    </div>
                    <div className="space-y-2.5">
                      <p className="text-base md:text-lg font-semibold text-primary-black">
                        {missionCard.title}
                      </p>
                      <p className="text-xs md:text-base text-left text-[#626262]">
                        {missionCard.description}
                      </p>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>

      }
      backgroundColorClass=""
    />
  )
}

function TransformSection() {
  return (



    <div className="relative">

      <img src="/icons/sections/TransformSection/arrow.svg" alt="" className="absolute left-1/2 translate-x-24 bottom-0 hidden lg:block w-24" />
      <Heading3
        title="Ready to grow?"
        headingText="Transform Your Ecommerce Business with Us"
        subHeadingText="Join hundreds of businesses that have accelerated their growth with our innovative ecommerce solutions. Start your journey today."
        varient="light"
        buttonSection={
          <div className="flex justify-center items-center flex-wrap gap-[15px]">

            <ButtonIconLarge name="Buy Now">
              <ArrowRightIcon className="h-5 w-5 text-white" />
            </ButtonIconLarge>

          </div>
        }
      />
    </div>

  )
}


export default function AboutUs() {


  return (
    <div>
      <Herosection3 mainComponent={<HeadingSection />} />

      {/* behind stor section */}
      <BehindStorySection />


      {/* our impact */}
      <SectionContainer
        HeadingComponent={
          <Heading

            headingText="Our Impact"
            subHeadingText="Numbers that reflect our commitment to excellence"
            varient="light"
          />
        }
        mainComponent={<ImpactSection />}
        backgroundColorClass="bg-[#fff1f4]"
      />



      {/* our mission section */}
      <MissionSection />


      {/* transform section */}
      <SectionContainer
        mainComponent={<TransformSection />}
        backgroundColorClass="!pb-[50px] md:!pb-[100px] !pt-[50px]"
      />



      {/* consultation form */}
      <ConsultationSection2 headingText="Let's Start a Conversation" subHeadingText="Have a question or want to work together? We'd love to hear from you." />



    </div>
  );
}
