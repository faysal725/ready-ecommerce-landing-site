import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import PlanSection from "../Containers/PlanSection";


function InstallationSection() {

    return (
        <SectionContainer
            HeadingComponent={
                <Heading
                    headingText="Installation Service"
                    subHeadingText="Purchase your CodeCanyon license first to unlock these setup plans."
                    varient="light"
                />
            }
            mainComponent={<PlanSection />}
            backgroundColorClass="bg-white"
        />
    )
}

export default InstallationSection;