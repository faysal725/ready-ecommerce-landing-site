import ButtonLargeWhite from "@/components/Button/ButtonLargeWhite";
import AdminDashboardSection from "@/components/Sections/AdminDashboardSection";
import CTASection from "@/components/Sections/CTASection";
import Integrations from "@/components/Sections/Integrations";



const HeroSection = () => {

  return (
    <section className=" bg-deep-navy min-h-[490px] md:min-h-[590px] overflow-hidden flex flex-col justify-start md:justify-center items-center relative py-6">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-[169px] z-10 h-full">
        <div className="flex flex-col justify-center items-center lg:items-start gap-[10px] lg:gap-6">
          <span className="p-2.5 rounded-[50px] bg-primary-red/24 border border-[#f8d5de]/16">
            <p className="text-xs md:text-base text-center text-primary-red">Powerful Features</p>
          </span>
          <p className="text-[28px] md:text-5xl font-bold leading-snug text-center lg:text-start text-white">Everything You Need to 
            <span className="relative"><span className="z-10 relative"> Succeed </span>
              <img src="/icons/sections/HeroSection/underline.svg" alt="" className="w-44 absolute -bottom-1.5 -right-10 z-0 hidden lg:block"/>
              </span>
              </p>
          <p className="text-sm lg:text-2xl font-medium text-center lg:text-start text-white/80">A complete ecosystem of tools designed to power your e-commerce empire.</p>
        </div>
        <div className="flex justify-center lg:justify-end items-center">
          <img src="/images/sections/herosection/heroImg2.png" alt="" />
        </div>
      </div>


      <div className="absolute left-0 -top-96 w-full h-full flex justify-center items-center z-0">
        <span className="w-[800px] h-[800px] bg-radial-[at_50%_75%] from-transparent via-[#ffcc009d] to-transparent to-90% rounded-full  blur-[270px] translate-x-44">

        </span>

      </div>
    </section>
  )
}

export default function Features() {
  return (
    <div>
      {/* herosection */}
      <HeroSection />

      {/* control center */}
      <AdminDashboardSection />

      {/* integration */}
      <Integrations
        heading="Seamless Integrations"
        description="Connect with your favorite tools and services out of the box."
      />

      <CTASection
        heading="Ready to Explore All Features?"
        description="Choose the plan that fits your business and launch your platform with confidence.
      ">
        <ButtonLargeWhite name="View Pricing" />
      </CTASection>
    </div>
  );
}
