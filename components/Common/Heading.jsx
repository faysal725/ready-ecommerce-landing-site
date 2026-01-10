import clsx from "clsx";

export default function Heading({ varient = "light", headingTitle, headingText = "", subHeadingText = "", containerAdditionalClass = "", headingAdditionalClass = "", subHeadingAdditionalClass = "" }) {
    return (
        <section className={clsx(containerAdditionalClass, " flex flex-col items-center gap-2.5 md:gap-4")}>
            {
                headingTitle && <div className="flex justify-center items-center">
                    <div className=" p-2.5 px-5 rounded-[50px] bg-primary-red/5 text-base text-primary-red border border-primary-red/20">
                        <p>{headingTitle}</p>
                    </div>
                </div>
            }


            <p className={clsx(headingAdditionalClass, " text-[28px] lg:text-4xl font-semibold text-center leading-tight md:leading-normal capitalize", varient === "light" ? "text-primary-black" : "text-white", headingText == "" ? "hidden" : "")}>{headingText}</p>
            <p className={clsx(subHeadingAdditionalClass, " text-sm lg:text-2xl text-center ", varient === "light" ? "text-[#626262]" : "text-white/60", subHeadingText == "" ? "hidden" : "")}>{subHeadingText}</p>
        </section>
    );
}

