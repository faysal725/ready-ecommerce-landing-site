import ButtonLargeWhite from "@/components/Button/ButtonLargeWhite";
import Heading from "@/components/Common/Heading";
import Heading2 from "@/components/Common/Heading2";
import SectionContainer from "@/components/Common/SectionContainer";
import ExtendedLicense from "@/components/Containers/ExtendedLicense";
import PlanSection from "@/components/Containers/PlanSection";
import RegularLicense from "@/components/Containers/RegularLicense";
import Faq from "@/components/Sections/Faq";
import CTASection from "@/components/Sections/CTASection";
import Herosection2 from "@/components/Sections/Herosection2";
import HowItWorks from "@/components/Sections/HowItWorks";


function HeadingSection() {
  return (
    <div className="relative md:pb-20">
      <img src="/icons/sections/idealLicense/arrow.svg" alt="" className="absolute h-20 top-20 -right-20 hidden sm:block" />


      <Heading2
        title="Transparent Pricing"
        headingText="Choose Your Perfect Plan"
        subHeadingText="One-time payment, lifetime value. No subscriptions, no hidden fees."
        varient="dark"
        containerAdditionalClass="md:gap-2.5"
      />
    </div>
  )
}

export default function Pricing() {


  const faqData = [
    {question: "How long does the installation take?", answer: "Most installations are completed within 24 hours after we receive your credentials."},
    {question: "Which payment gateways are supported?", answer: "Demo"},
    {question: "Can I customize the design?", answer: "Demo"},
    {question: "Will I receive updates in the future?", answer: "Demo"},
    {question: "Is technical knowledge required?", answer: "Demo"},
    {question: "Can I migrate from Shopify or WooCommerce?", answer: "Demo"},
  ]
  return (
    <div>
      <Herosection2 mainComponent={<HeadingSection />} />


      {/* perfect plan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-5 md:gap-9 container relative z-0 pb-[50px] -mt-64 md:-mt-52">
        <RegularLicense />

        <ExtendedLicense />
      </div>

      {/* how it works */}
      <HowItWorks />

      {/* need help installing */}
      <SectionContainer
        HeadingComponent={
          <Heading
            headingText="Need Help Installing?"
            subHeadingText="Let our experts handle the technical setup while you focus on your business."
            varient="light"
          />
        }
        mainComponent={<PlanSection />}
        backgroundColorClass="bg-white !py-[50px]"
      />


      {/* faq section */}
      <section className="max-w-[800px] mx-auto py-[50px] px-6 lg:px-0">
        <div className="space-y-6 lg:space-y-[60px]">
          <p className="text-2xl md:text-4xl font-semibold text-center text-primary-black">Frequently Asked Questions</p>

          <Faq faqData={faqData}/>
        </div>
      </section>


      <CTASection
        heading="Still Have Questions?"
        description="Schedule a call with our team to discuss your specific needs.
      ">
        <ButtonLargeWhite name="Schedule a Meeting" />
      </CTASection>
    </div>
  );
}
