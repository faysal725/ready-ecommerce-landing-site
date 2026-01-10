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



function StepContainer() {


  const steps = [
    {
      title: "Discovery",
      description: "We understand your goals, challenges, and success metrics.",
      iconSrc: "/icons/sections/JourneyStep/1.svg",
    },
    {
      title: "Design",
      description: "UX/UI prototypes aligned with user behavior and business logic.",
      iconSrc: "/icons/sections/JourneyStep/2.svg",
    },
    {
      title: "Development",
      description: "Agile sprints with continuous progress updates.",
      iconSrc: "/icons/sections/JourneyStep/3.svg",
    },
    {
      title: "Testing Refinement",
      description: "In-house QA & feedback-driven improvements.",
      iconSrc: "/icons/sections/JourneyStep/4.svg",
    },
    {
      title: "Launch & Support",
      description: "Deployment, documentation, and post-launch assistance.",
      iconSrc: "/icons/sections/JourneyStep/5.svg",
    },
  ]

  return (
    <div className="relative">
      <span className="w-full h-0.5  absolute top-1/2 left-0 bg-gray-400/20 hidden lg:block"></span>
      <div className="flex justify-start items-center overflow-x-scroll snap-x scrollbar_hide gap-4">
        {
          steps.map((step, index) => {
            return (
              <StepCard key={index} stepData={step} stepNo={index + 1} />
            )
          })
        }
      </div>
    </div>
  )
}

const StepCard = ({ stepData, stepNo }) => {
  console.log(stepData)
  return (
    <div className={clsx("min-w-[214px] p-4 flex flex-col justify-center gap-2.5 rounded-xl relative overflow-hidden snap-center h-[225.03px] bg-white", stepNo % 2 == 0 && "mt-0 xl:mt-12")}>
      <span className=" text-sm font-medium text-white py-[3.5px] text-center absolute bg-primary-red w-52 rotate-45 top-6 -right-[60px]">STEP — 0{stepNo}</span>
      <div>
        <GradientBorderWrapper
          colors={['#ffffff', '#ff8dac']}
          thickness="2"
          borderRadius="50%"
          padding="0px"
          angle="150deg"
        >
          <div className='bg-pink-100 p-3 rounded-full w-fit'>
            <img src={stepData.iconSrc} alt="" className='w-6 h-6' />
          </div>
        </GradientBorderWrapper>
      </div>
      <p
        className="text-lg font-semibold text-left text-primary-black"
      >
        {stepData.title}
      </p>
      <p className="text-sm text-left text-[#626262]">
        {stepData.description}
      </p>
    </div>
  )
}


const IdeasSection = () => {


  return (
    <section className="py-[50px] pt-[100px]">
      <div className="max-w-[1020px] mx-auto flex flex-col gap-[60px] px-4 px-0">
        <div className="flex flex-col items-center gap-4 md:gap-10">
          <p className="text-[28px] md:text-4xl font-semibold font-[Poppins text-center">
            Where Your <span className="text-primary-red">Ideas Drive the Build</span>
          </p>
          <p className="text-sm md:text-xl text-center text-[#626262]">
            Why settle for generic when you can have genius? Whether you're scaling a niche marketplace, automating logistics, or pioneering AR shopping, our custom development turns ideas into revenue engines. <span className="text-[#24262d]">100+ projects live, 98% client retention</span>.
          </p>
        </div>


        <div className="grid grid-cols-3 gap-2 md:gap-6">
          <GradientBorderWrapper
            colors={['#ffcbd94d', '#f97e7e5c', '#ff8dac']}
            thickness="2"
            borderRadius="22px"
            padding="0px"
            angle="350deg"
          >
            <div className="p-3 md:p-6 h-[111px] md:h-[145px] relative flex flex-col items-center justify-end bg-white rounded-3xl">
              <div className="absolute -top-6 md:-top-8 right-0 w-full flex justify-center">
                <div className='bg-linear-to-b from-[#D63384] via-primary-red to-primary-red h-12 w-12 md:h-16 md:w-16 rounded-xl flex justify-center items-center'>
                  <img src="/icons/sections/IdeasSection/2.svg" alt="" className='w-7 h-7' />
                </div>
              </div>

              <p
                className="text-xl md:text-4xl font-bold text-center text-primary-red"
              >
                150+
              </p>

              <p className="text-xs md:text-base text-center text-primary-black">
                Projects Delivered
              </p>

            </div>

          </GradientBorderWrapper>


          <GradientBorderWrapper
            colors={['#ffcbd94d', '#f97e7e5c', '#ff8dac']}
            thickness="2"
            borderRadius="22px"
            padding="0px"
            angle="180deg"
          >
            <div className="p-3 md:p-6 h-[111px] md:h-[145px] relative flex flex-col items-center justify-end bg-white rounded-3xl">
              <div className="absolute -top-6 md:-top-8 right-0 w-full flex justify-center">
                <div className='bg-linear-to-b from-[#D63384] via-primary-red to-primary-red h-12 w-12 md:h-16 md:w-16 rounded-xl flex justify-center items-center'>
                  <img src="/icons/sections/IdeasSection/2.svg" alt="" className='w-7 h-7' />
                </div>
              </div>

              <p
                className="text-xl md:text-4xl font-bold text-center text-primary-red"
              >
                98%
              </p>

              <p className="text-xs md:text-base text-center text-primary-black">
                Client Satisfaction
              </p>

            </div>

          </GradientBorderWrapper>


          <GradientBorderWrapper
            colors={['#ffcbd94d', '#f97e7e5c', '#ff8dac']}
            thickness="2"
            borderRadius="22px"
            padding="0px"
            angle="350deg"
          >
            <div className="p-3 md:p-6 h-[111px] md:h-[145px] relative flex flex-col items-center justify-end bg-white rounded-3xl">
              <div className="absolute -top-6 md:-top-8 right-0 w-full flex justify-center">
                <div className='bg-linear-to-b from-[#D63384] via-primary-red to-primary-red h-12 w-12 md:h-16 md:w-16 rounded-xl flex justify-center items-center'>
                  <img src="/icons/sections/IdeasSection/3.svg" alt="" className='w-7 h-7' />
                </div>
              </div>

              <p
                className="text-xl md:text-4xl font-bold text-center text-primary-red"
              >
                2 Weeks
              </p>

              <p className="text-xs md:text-base text-center text-primary-black">
                Average Delivery Time
              </p>

            </div>

          </GradientBorderWrapper>

        </div>
      </div>
    </section>
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


      <IdeasSection />


      {/* built section */}
      <CustomServicesSection />


      {/* investment section */}
      <InvestmentSection />


      <SectionContainer
        HeadingComponent={
          <Heading

            headingTitle="How We Work"
            headingText="Our 5-Step Custom Journey"
            varient="light"
          />
        }
        mainComponent={<StepContainer />}
        backgroundColorClass="bg-[#fff1f4]"
      />

      <ConsultationSection2 />
    </div>
  );
}
