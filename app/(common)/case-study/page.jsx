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
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import ButtonIconLargeWhiteOutline from "@/components/Button/ButtonIconLargeWhiteOutline";
import SolutionSection from "@/components/Sections/SolutionSection";

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



export default function CaseStudy() {

  const faqData = [
    { question: "How much does customization cost?", answer: "Pricing depends on scope and complexity. We always share a clear quote upfront." },
    { question: "How long does it take?", answer: "Demo" },
    { question: "Can we extend it later?", answer: "Demo" },
    { question: "Do you provide support after launch?", answer: "Demo" },
  ]
  return (
    <div>
      <Herosection3 mainComponent={<HeadingSection />} additionalContainerClass="min-h-[746px]" />


      

      {/* our vision section */}
      <OurVisionSection />

      {/* solution section */}
      <SolutionSection />

      {/* built section */}
      <BuiltSection />



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
