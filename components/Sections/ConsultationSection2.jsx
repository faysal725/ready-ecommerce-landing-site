
import ButtonIconSmall from "../Button/ButtonIconSmall";
import ButtonLarge from "../Button/ButtonLarge";
import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import ConsultationForm2 from "../Form/Container/ConsultationForm2";



async function FormSection() {



    return (
        <div className="max-w-[690px] mx-auto">
            <ConsultationForm2 />
        </div>
    )
}


export default function ConsultationSection2({headingText, subHeadingText}) {
    return (
        <>
            <SectionContainer
                HeadingComponent={
                    <Heading
                        headingText={headingText}
                        subHeadingText={subHeadingText}
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