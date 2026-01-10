import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import PlanSection from "../Containers/PlanSection";
import PackagesSection from "../Containers/PackagesSection";


function InvestmentSection() {

    return (
        <SectionContainer
            HeadingComponent={
                <Heading
                    headingText="Flexible Investment Packages"
                    subHeadingText="Clear starting points with room to scale as your project grows."
                    varient="light"
                />
            }
            mainComponent={<PackagesSection />}
            backgroundColorClass="bg-white !pt-6 md:!pt-[50px]"
        />
    )
}

export default InvestmentSection;