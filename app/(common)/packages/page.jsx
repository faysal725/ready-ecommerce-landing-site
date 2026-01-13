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
import Packages from "@/components/Sections/Packages";


function HeadingSection() {
  return (
    <div className="relative md:pb-20">
      <Heading2
        headingText="Installation & Setup Packages"
        subHeadingText="Already have your license? Choose the right installation package and let our experts handle the full setup—from server configuration to a ready-to-launch eCommerce system."
        varient="dark"
        containerAdditionalClass="md:gap-2.5"
      />
    </div>
  )
}

export default function Pricing() {
  return (
    <div>
      <Herosection2 mainComponent={<HeadingSection />} />


      {/* perfect plan */}
      <div className="container relative z-0 pb-[100px] -mt-52 overflow-x-scroll scrollbar_hide">
        <Packages />
      </div>





      <CTASection
        heading="Choose Your Plan and Kickstart Your Business!"
        description="Everything you need to launch quickly and grow effortlessly.
      ">
        <ButtonLargeWhite name="Start Now" additionalClass="w-52" />
      </CTASection>
    </div>
  );
}
