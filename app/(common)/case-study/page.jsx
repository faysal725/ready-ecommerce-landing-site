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
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import ButtonIconLargeWhiteOutline from "@/components/Button/ButtonIconLargeWhiteOutline";
import SolutionSection from "@/components/Sections/SolutionSection";
import InterfaceDecisionSection from "@/components/Sections/InterfaceDecisionSection";
import TechnologySection from "@/components/Sections/TechnologySection";
import ImpactSection from "@/components/Sections/ImpactSection";
import ProblemSection from "@/components/Sections/ProblemSection";
import { Fragment } from "react";
import clsx from "clsx";

function HeadingSection() {
  return (
    <div className="relative">


      <Heading3
        headingText="The Story Behind Ready eCommerce"
        subHeadingText="How we built a scalable, multi-vendor eCommerce platform designed for real-world businesses."
        varient="dark"
        buttonSection={
          <div className="flex justify-center items-center flex-wrap gap-[15px]">

            <Link href="#" target="_blank">
              <ButtonLarge name="View Live Demo" additionalClass="w-full md:w-[220px]" />
            </Link>



            <Link href="https://demo.readyecommerce.app/admin/" target="_blank">
              <ButtonIconLargeWhiteOutline name="View Pricing" additionalClass="w-full md:w-[220px]" >
                <ArrowRightIcon className="h-5 w-5 text-white" />
              </ButtonIconLargeWhiteOutline>
            </Link>
          </div>
        }
      />
    </div>
  )
}

function SoftwareSolutionSection() {
  const servicesData = [
    {
      name: "Admin Panel",
      description: "Manage products, orders, users, and reports.",
      imageSrc: "/icons/sections/onlineBusiness/panel.svg"
    },
    {
      name: "User App",
      description: "Browse, order, pay, and track deliveries easily.",
      imageSrc: "/icons/sections/onlineBusiness/user-app.svg"
    },
    {
      name: "Seller App",
      description: "Handle sales and orders on the go.",
      imageSrc: "/icons/sections/onlineBusiness/seller-app.svg"
    },
    {
      name: "Delivery App",
      description: "Accept orders, navigate, and update delivery status.",
      imageSrc: "/icons/sections/onlineBusiness/delivery.svg"
    },
    {
      name: "Website",
      description: "Shop online, place orders, and track purchases.",
      imageSrc: "/icons/sections/onlineBusiness/link.svg"
    },
  ]
  return (
    <section className="relative z-10 lg:pt-6">
      <div className="container mx-auto ">
        <div className="p-0 lg:p-6 pt-14 lg:pt-16 rounded-2xl lg:-mt-28 lg:border flex justify-center lg:justify-between items-center flex-wrap lg:flex-nowrap gap-4 gap-y-10 lg:gap-0 lg:shadow-xl shadow-red-light bg-white">
          {
            servicesData.map((service, index) => {
              const isFirst = index === 0
              const isLast = index === servicesData.length - 1

              return (
                <Fragment key={index} >
                  <div className="flex items-center flex-col justify-center gap-4 lg:flex-1 border border-[#f8d5de] rounded-xl min-w-[177px]">
                    <div className={clsx("w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center -mt-8", isFirst ? "bg-primary-red" : "bg-red-light ")}>
                      <img src={service.imageSrc} alt="" className={clsx("w-6 h-6", isFirst && "opacity-100 brightness-0 invert")} />
                    </div>
                    <p className="text-base md:text-lg font-semibold text-center pb-2 md:pb-7">{service.name}</p>
                  </div>
                  <div className={clsx("w-7 h-0.5 bg-[#f8d5de] hidden", isLast ? "hidden" : "lg:block")}></div>
                </Fragment>
              )
            }
            )
          }
        </div>
      </div>
    </section>
  )
}

function OurVisionSection() {


  return (
    <SectionContainer
      mainComponent={<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
        <div className="flex justify-start items-center">
          <div className=" max-w-[494px] mx-auto lg:mx-0">
            <p className="text-[28px] md:text-4xl font-semibold pt-5 pb-4 leading-snug md:leading-normal text-center lg:text-start">Our Vision</p>
            <p className="text-sm lg:text-xl  text-[#626262] text-center lg:text-start">
              We set out to create an all-in-one eCommerce ecosystem that is flexible, scalable, and easy to manage — without sacrificing performance or user experience.
            </p>
          </div>
        </div>
        <div className="">
          <img src="/images/sections/OurVision/1.png" alt="" className="w-full" />
        </div>
      </div>}
      backgroundColorClass="!pb-[50px]"
    />
  )
}


function WhyWorksSection() {
  const reasonsToWorkData = ["Design for founders, not just developers", "Flexible enough for agencies and enterprises", "Build in scalability without complexity", "Backed by continuous updates and support"]

  return (
    <section className="max-w-[666px] mx-auto py-[50px] lg:py-[100px] flex flex-col gap-6 md:gap-[60px] px-4 md:px-0">
      <p className="text-[28px] md:text-4xl font-semibold text-center text-primary-black">Why Ready eCommerce Works</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
        {reasonsToWorkData.map((reason, index) => (
          <div key={index} className="p-4 rounded-lg flex justify-start items-stretch gap-[15px] border border-red-light">
            <img src="/icons/tick-red-solid.svg" alt="" className="h-[30px] w-[30px]" />

            <p className="text-xs md:text-base font-medium text-left text-[#626262]">
              Design for founders, not just developers
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}


export default function CaseStudy() {

  const faqData = [
    { question: "How much does customization cost?", answer: "Pricing depends on scope and complexity. We always share a clear quote upfront." },
    { question: "How long does it take?", answer: "Demo" },
    { question: "Can we extend it later?", answer: "Demo" },
    { question: "Do you provide support after launch?", answer: "Demo" },
  ]
  return (
    <div>
      <Herosection3 mainComponent={<HeadingSection />} additionalContainerClass="lg:min-h-[746px]" />


      <SoftwareSolutionSection />


      {/* The Problem We Identified */}
      <ProblemSection />

      {/* our vision section */}
      <OurVisionSection />

      {/* solution section */}
      <SolutionSection />

      {/* design & ux decision */}
      <InterfaceDecisionSection />


      {/* technology and architecture */}
      <TechnologySection />


      <ImpactSection />

      {/* why ready ecommerce works */}
      <WhyWorksSection />


      <CTASection
        heading="Ready to Build Your Own eCommerce Platform?"
        description="Explore the demo, review pricing, or talk to our team to see how Ready eCommerce fits your business.">
        <div className="flex flex-wrap justify-center items-center gap-4 w-full">
          <ButtonIconLargeWhite name="View Demo" >
            <ArrowRightIcon className="h-5 w-5 text-primary-red" />
          </ButtonIconLargeWhite>

          <ButtonIconLargeWhiteOutline name="Contact Us" additionalClass="w-fit md:w-[210px]" />
        </div>
      </CTASection>
    </div>
  );
}
