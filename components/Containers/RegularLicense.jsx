import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from 'react'

export default function RegularLicense() {
    return (
        <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white border border-[#e5e5e7]/92">
            <p
                className="text-xl font-semibold text-primary-black"
            >
                Regular License
            </p>
            <div className="space-y-[10px]">
                <p className="text-[44px] font-semibold text-primary-red">$39 <span className="text-lg text-left text-[#626262] font-normal">one-time</span></p>
                <p
                    className="text-base text-left text-[#626262]"
                >
                    Perfect for getting started
                </p>
            </div>

            <div className="flex flex-col gap-[15px]">
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Lifetime source code.</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> One-time payment</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> No hidden charges</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Full software installation</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Free payment gateway setup</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Software documentation</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Lifetime free updates</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Admin, vendor & delivery boy panel</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Android user app included</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Monthly support</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/cross-white.svg" alt="" /> iOS version not included</p>
            </div>

            <button className="flex justify-center items-center w-full h-14 gap-2.5 rounded-lg border border-primary-red cursor-pointer">
                <p className="text-base font-medium text-center text-primary-red">
                    Buy Regular License</p>
                <ArrowRightIcon className="h-5 w-5 text-primary-red" />
            </button>
        </div>
    )
}
