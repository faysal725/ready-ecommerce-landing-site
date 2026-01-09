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

function HeadingSection() {
  return (
    <div className="relative">


      <Heading3
        title="Custom Software Development"
        headingText="Build an eCommerce Platform That Fits Your Business"
        subHeadingText="Outgrown templates and plug-ins? We design and develop custom eCommerce software tailored to your exact business model—from advanced workflows to AI-powered features and scalable multi-vendor systems."
        varient="dark"
        buttonSection={
          <div className="flex justify-center items-center flex-wrap gap-[15px]">

            <Link href="#" target="_blank">
              <ButtonLarge name="Start Your Project" additionalClass="w-full md:w-[220px]" />
            </Link>

            

            <Link href="https://demo.readyecommerce.app/admin/" target="_blank">
              <ButtonIconLargeWhiteOutline name="See Portfolio" additionalClass="w-full md:w-[220px]" >
                <ArrowRightIcon className="h-5 w-5 text-white" />
              </ButtonIconLargeWhiteOutline>
            </Link>
          </div>
        }
      />
    </div>
  )
}


export default function Services() {

  const faqData = [
    { question: "How much does customization cost?", answer: "Pricing depends on scope and complexity. We always share a clear quote upfront." },
    { question: "How long does it take?", answer: "Demo" },
    { question: "Can we extend it later?", answer: "Demo" },
    { question: "Do you provide support after launch?", answer: "Demo" },
  ]
  return (
    <div>
      <Herosection3 mainComponent={<HeadingSection />} />




      <CTASection
        heading="Let’s Build Something That Works for You"
        description="Tell us what you need—we’ll take care of the rest.
      ">
        <ButtonLargeWhite name="Schedule a Meeting" />
      </CTASection>
    </div>
  );
}
