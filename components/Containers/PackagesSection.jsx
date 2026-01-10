import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function PackagesSection() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

            {/* Basic  */}
            <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white border border-[#e5e5e7]/92">
                <p
                    className="text-xl font-semibold text-primary-black"
                >
                    Discovery Phase
                </p>
                <div className="space-y-2.5">
                    <p className="text-[44px] font-semibold text-primary-red">$999</p>
                    <p
                        className="text-base text-left text-[#626262]"
                    >
                        Define your product clearly before development begins.
                    </p>
                </div>

                <div className="flex flex-col gap-[15px] flex-1">
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" />Requirement analysis & workshops</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" />UX wireframes & feature scope</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" />Technical roadmap & architecture planning</p>
                </div>

                <button className="flex justify-center items-center w-full h-14 gap-2.5 rounded-lg border border-primary-red cursor-pointer">
                    <p className="text-base font-medium text-center text-primary-red">
                        Get Started</p>
                    <ArrowRightIcon className="h-5 w-5 text-primary-red" />
                </button>
            </div>


            {/* Premiume */}
            <div className="flex flex-col gap-6 p-6 rounded-2xl border border-[#e5e5e7]/92 bg-radial-[at_100%_20%] from-pink-700  to-primary-red to-50% relative overflow-hidden">
                <span className=" text-sm font-medium text-black py-[3.5px] text-center absolute bg-yellow-400 w-72 rotate-45 top-12 -right-[90px]">Recommended</span>
                <p
                    className="text-xl font-semibold text-white"
                >
                    Core Build
                </p>
                <div className="space-y-[10px]">
                    <p className="text-[44px] font-semibold text-white">$1,999</p>
                    <p
                        className="text-base text-left text-white/80"
                    >
                        Launch a functional MVP ready for real users.
                    </p>
                </div>

                <div className="flex flex-col gap-[15px] flex-1">
                    <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" />Backend & frontend development</p>
                    <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" />Essential integrations & workflows</p>
                    <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" />Testing, revisions, and deployment support</p>
                </div>

                <button className="flex justify-center items-center w-full h-14 gap-2.5 rounded-lg cursor-pointer bg-white">
                    <p className="text-base font-medium text-center text-primary-red">
                        Start Building</p>
                    <ArrowRightIcon className="h-5 w-5 text-primary-red" />
                </button>
            </div>


            {/* Advance  */}
            <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white border border-[#e5e5e7]/92">
                <p
                    className="text-xl font-semibold text-primary-black"
                >
                    Enterprise & Scale
                </p>
                <div className="space-y-[10px]">
                    <p className="text-[44px] font-semibold text-primary-red">Custom Quote</p>
                    <p
                        className="text-base text-left text-[#626262]"
                    >
                        Advanced solutions for high-growth platforms.
                    </p>
                </div>

                <div className="flex flex-col gap-[15px] flex-1">
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" />Custom modules & AI features</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" />App publishing & optimization</p>
                    <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" />Request a Quote</p>
                </div>



                <button className="flex justify-center items-center w-full h-14 gap-2.5 rounded-lg border border-primary-red cursor-pointer">
                    <p className="text-base font-medium text-center text-primary-red">
                        Buy Now</p>
                    <ArrowRightIcon className="h-5 w-5 text-primary-red" />
                </button>
            </div>


        </div>
    )
}
