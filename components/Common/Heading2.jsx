import clsx from "clsx";

export default function Heading2({
    varient = "light",
    title,
    headingText = "something",
    subHeadingText = "something",
    containerAdditionalClass = "",
    headingAdditionalClass = "",
    subHeadingAdditionalClass = ""
}) {
    return (
        <section className={clsx(containerAdditionalClass, " flex flex-col items-center gap-2.5 md:gap-5")}>
            {
                title && <div className="flex justify-center items-center">
                    <div className="text-white p-2.5 rounded-[50px] bg-white/[0.16] border border-[#f8d5de]/20">
                        <p>{title}</p>
                    </div>
                </div>
            }
            <div className="flex flex-col items-center gap-1.5 md:gap-2.5">
                <p className={clsx(headingAdditionalClass, " text-[28px] lg:text-4xl font-semibold text-center leading-tight md:leading-normal capitalize", varient === "light" ? "text-primary-black" : "text-white")}>{headingText}</p>
                <p className={clsx(subHeadingAdditionalClass, " text-base lg:text-2xl text-center ", varient === "light" ? "text-[#626262]" : "text-white/60")}>{subHeadingText}</p>

            </div>
        </section>
    );
}

