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
                <p className=" text-primary-red">
                    <span className="text-2xl font-normal"> <s>$39</s> </span>
                    <span className="text-[44px] font-semibold">$39</span>
                    <span className="text-lg text-left text-[#626262] font-normal">one-time</span>
                </p>
                <p
                    className="text-base text-left text-[#626262]"
                >
                    Perfect for getting started
                </p>
            </div>

            <div className="flex flex-col gap-[15px]">
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Lifetime License Validity</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Permitted for 1 Domain</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5">
                    <img src="/icons/tick-red.svg" alt="" /> 6 months of general and technical support (As per Envato support policy)
                </p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> All Premium Features</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> Lifetime Free Update
                </p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-red.svg" alt="" /> For Personal Project
                </p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/cross-white.svg" alt="" /> For Commercial Projects (if end product is paid)</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/cross-white.svg" alt="" /> Postman Collection for REST API Documentation</p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/cross-white.svg" alt="" /> Admin Panel FREE Installation in cPanel (one time)
                </p>
                <p className="text-base text-left text-[#626262] flex justify-start items-start gap-2 leading-5"> <img src="/icons/cross-white.svg" alt="" /> Priority Support
                </p>
            </div>

            <button className="flex justify-center items-center w-full h-14 gap-2.5 rounded-lg border border-primary-red cursor-pointer">
                <p className="text-base font-medium text-center text-primary-red">
                    Buy Regular License</p>
                <ArrowRightIcon className="h-5 w-5 text-primary-red" />
            </button>
        </div>
    )
}
