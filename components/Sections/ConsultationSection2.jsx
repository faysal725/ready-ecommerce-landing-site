import { getCountries } from "@/lib/dataFetching/getCountries";
import ButtonIconSmall from "../Button/ButtonIconSmall";
import ButtonLarge from "../Button/ButtonLarge";
import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import ConsultationForm2 from "../Form/Container/ConsultationForm2";



async function FormSection() {

    const countries = await getCountries()


    return (
        <div className="max-w-[690px] mx-auto">
            <ConsultationForm2 countryOption={countries} />
        </div>
    )
}


export default function ConsultationSection2() {
    return (
        <>
            <SectionContainer
                HeadingComponent={
                    <Heading
                        headingText="Let’s Build Something Powerful"
                        subHeadingText="Tell us what you’re planning—we’ll help you shape it into a scalable product. Free 30-minute consultation included."
                        varient="dark"
                        containerAdditionalClass="max-w-4xl"
                    />
                }
                mainComponent={<FormSection />}
                backgroundColorClass="bg-deep-navy"
            />
        </>
    );
}