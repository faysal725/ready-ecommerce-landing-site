import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from 'react'

export default function ExtendedLicense() {
  return (
                    <div className="flex flex-col gap-6 p-6 rounded-2xl  bg-[url(/images/sections/idealLicense/bg.png)] bg-no-repeat bg-cover bg-top-right relative overflow-hidden">
                        <span className=" text-sm font-medium text-black py-[3.5px] text-center absolute bg-yellow-400 w-72 rotate-45 top-7 -right-[110px] lg:top-12 lg:-right-[90px]">Most Popular</span>
                        <p
                            className="text-xl font-semibold text-white"
                        >
                            Extended License
                        </p>
                        <div className="space-y-[10px]">
                            <p className="text-[44px] font-semibold text-white">$199 <span className="text-lg text-left text-white/80 font-normal">one-time</span></p>
                            <p
                                className="text-base text-left text-white/80"
                            >
                                Complete solution with all features
                            </p>
                        </div>

                        <div className="flex flex-col gap-[15px]">
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Lifetime source code.</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> One-time payment</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> No hidden charges</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Full software installation</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Free payment gateway setup</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Software documentation</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Lifetime free updates</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Admin, vendor & delivery boy panel</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Android + iOS user apps</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> All features unlocked</p>
                            <p className="text-base text-left text-white/80 flex justify-start items-start gap-2 leading-5"> <img src="/icons/tick-white.svg" alt="" /> Monthly support</p>
                        </div>

                        <button className="flex justify-center items-center w-full h-14 gap-2.5 rounded-lg  bg-white  cursor-pointer">
                            <p className="text-base font-medium text-center text-primary-red">
                                Buy Regular License</p>
                            <ArrowRightIcon className="h-5 w-5 text-primary-red" />
                        </button>
                    </div>
  )
}
