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

function HeadingSection() {
  return (
    <div className="relative">


      <Heading3
        headingText="Custom Solutions That Fit the Way You Do Business"
        subHeadingText="Every business runs differently. We customize Ready eCommerce to match your goals, workflows, and growth plans—without compromising performance or security."
        varient="dark"
        buttonSection={
          <div className="flex justify-center items-center">

            <Link href="https://demo.readyecommerce.app/admin/" target="_blank">
              <ButtonLarge name="Request a Quote" additionalClass="w-[220px]" />
            </Link>
          </div>
        }
      />
    </div>
  )
}


export default function Customization() {

  const faqData = [
    { question: "How much does customization cost?", answer: "Pricing depends on scope and complexity. We always share a clear quote upfront." },
    { question: "How long does it take?", answer: "Demo" },
    { question: "Can we extend it later?", answer: "Demo" },
    { question: "Do you provide support after launch?", answer: "Demo" },
  ]
  return (
    <div>
      <Herosection3 mainComponent={<HeadingSection />} />


      {/* built section */}
      <BuiltSection />


      {/* how customization works */}
      <HowCustomizationWorksSection />



      {/* growing business */}
      <GrowingBusinessSection />

      {/* faq section */}
      <section className="max-w-[800px] mx-auto py-[50px] px-6 lg:px-0">
        <div className="space-y-6 lg:space-y-[60px]">
          <p className="text-2xl md:text-4xl font-semibold text-center text-primary-black">Questions? We’ve Got Answers</p>

          <Faq faqData={faqData} />
        </div>
      </section>


      <CTASection
        heading="Let’s Build Something That Works for You"
        description="Tell us what you need—we’ll take care of the rest.
      ">
        <ButtonLargeWhite name="Schedule a Meeting" />
      </CTASection>
    </div>
  );
}
