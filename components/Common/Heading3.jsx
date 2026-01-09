import clsx from "clsx";

export default function Heading3({
    varient = "light",
    title,
    headingText = "something",
    subHeadingText = "something",
    containerAdditionalClass = "",
    headingAdditionalClass = "",
    subHeadingAdditionalClass = "",
    buttonSection
}) {
    return (
        <section className={clsx(containerAdditionalClass, " flex flex-col items-center gap-2.5 md:gap-5")}>
            {
                title && <div className="flex justify-center items-center">
                    <div className="text-primary-red p-2.5 rounded-[50px] bg-primary-red/25 border border-[#f8d5de]/20">
                        <p>{title}</p>
                    </div>
                </div>
            }
            <div className="flex flex-col items-center max-w-[752px]">
                <p className={clsx(headingAdditionalClass, " text-[28px] md:text-4xl lg:md:text-5xl font-semibold text-center leading-[35px] md:leading-[60px] capitalize relative", varient === "light" ? "text-primary-black" : "text-white")}>{headingText}</p>
                <p className={clsx(subHeadingAdditionalClass, " text-sm md:text-2xl text-center pt-6 pb-6 sm:pb-10", varient === "light" ? "text-[#626262]" : "text-white/60")}>{subHeadingText}</p>
                {buttonSection && buttonSection}
            </div>
        </section>
    );
}

