import clsx from "clsx";

export default function Heading({ varient = "light", headingText = "something", subHeadingText = "something", containerAdditionalClass = "", headingAdditionalClass= "", subHeadingAdditionalClass = "" }) {
    return (
        <section className={clsx(containerAdditionalClass," flex flex-col items-center gap-2.5 md:gap-4")}>
            <p className={clsx(headingAdditionalClass," text-[28px] lg:text-4xl font-semibold text-center leading-tight md:leading-normal capitalize", varient === "light" ? "text-primary-black" : "text-white")}>{headingText}</p>
            <p className={clsx(subHeadingAdditionalClass, " text-sm lg:text-2xl text-center ", varient === "light" ? "text-[#626262]" : "text-white/60")}>{subHeadingText}</p>
        </section>
    );
}

