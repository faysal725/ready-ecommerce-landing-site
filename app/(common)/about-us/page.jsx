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

function HeadingSection() {
  return (
    <div className="relative">

    <img src="/icons/sections/AboutUsHeading/arrow.svg" alt="" className="absolute right-36 top-[60px] hidden lg:block"/>
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





export default function AboutUs() {


  return (
    <div>
      <Herosection3 mainComponent={<HeadingSection />} />



      {/* built section */}
      <CustomServicesSection />


      <ConsultationSection2 headingText="Let's Start a Conversation" subHeadingText="Have a question or want to work together? We'd love to hear from you." />



    </div>
  );
}
