import clsx from "clsx";


export default function Herosection2({mainComponent, additionalContainerClass}) {
    return (
        <section className={clsx(additionalContainerClass," bg-linear-to-b from-pink-600 to-primary-red h-[490px] md:h-[590px] overflow-hidden flex flex-col justify-start md:justify-center items-center relative pt-6 lg:pt-0")}>
            <div className="container flex flex-col gap-6 lg:gap-[60px] items-center justify-center z-10">
               {
                mainComponent && mainComponent
               }
            </div>

            <div className="absolute left-0 top-0 w-full h-full z-0 flex justify-center items-start">
                <span className="w-[836px] h-[836px] bg-[#ffcc009d] to-transparent to-100% rounded-full blur-[320px]  block -translate-y-72">

            </span>
            </div>
        </section>
    );
}

