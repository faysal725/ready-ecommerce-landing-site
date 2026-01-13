import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Heading from "../Common/Heading";
import RegularLicense from "../Containers/RegularLicense";
import ExtendedLicense from "../Containers/ExtendedLicense";



function IdealLicenseSection() {


    return (
        <section className="pt-6 lg:pt-0 pb-[100px]">

            <div className="container flex flex-col items-center gap-6 lg:gap-[60px] overflow-hidden">
                <div className="flex flex-col items-center gap-5">

                    <span
                        className="w-fit relative p-2.5 lg:px-4 rounded-[50px] bg-red-light/30 border border-[#f8d5de]"
                    >
                        <p className="text-base text-center text-primary-red">Flexible Pricing</p>
                    </span>
                    <div className="relative">
                        <img src="/icons/sections/idealLicense/arrow.svg" alt="" className="absolute h-24 -top-0 -right-20" />
                        <Heading
                            headingText="Find Your Ideal License"
                            subHeadingText="Choose the plan that aligns with your requirements."
                            varient="light"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:px-6">

                    {/* redular license  */}
                    <RegularLicense />

                    {/* extended license */}
                    <ExtendedLicense />
                </div>
            </div>
        </section>
    )
}


export default IdealLicenseSection;