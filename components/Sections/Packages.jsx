import React from 'react'
import ButtonIconSmall from '../Button/ButtonIconSmall'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import ButtonIconLarge from '../Button/ButtonIconLarge'
import ButtonIconLargeWhite from '../Button/ButtonIconLargeWhite'
import Tick from '../Icons/Tick'
import Cross from '../Icons/Cross'

export default function Packages() {
    return (
        <div className="grid grid-cols-4 rounded-3xl p-4 md:p-9 gap-[15px] min-w-[1174px] bg-white">
            <div className="flex justify-start items-center">
                <p
                    className="text-[28px] font-semibold text-left text-[#24262d]"
                >
                    Feature Comparison
                </p>
            </div>
            <div className='flex flex-col gap-[15px] p-4'>
                <p
                    className="text-xl font-semibold text-left text-[#24262d]"
                >
                    Basic
                </p>

                <div className="space-y-2.5">
                    <p
                        className="text-[44px] font-semibold text-left text-primary-red leading-tight"
                    >
                        $160
                    </p>
                    <p
                        className="text-base text-left text-[#626262]"
                    >
                        Essential setup service
                    </p>

                </div>

                <ButtonIconLarge name="Buy Now" additionalClass="w-full">

                    <ArrowRightIcon className="h-5 w-5 text-white" />
                </ButtonIconLarge>
            </div>


            <div className='flex flex-col gap-[15px] p-4'>
                <p
                    className="text-xl font-semibold text-left text-[#24262d]"
                >
                    Advance
                </p>

                <div className="space-y-2.5">
                    <p
                        className="text-[44px] font-semibold text-left text-primary-red leading-tight"
                    >
                        $399
                    </p>
                    <p
                        className="text-base text-left text-[#626262]"
                    >
                        Professional setup package
                    </p>

                </div>

                <ButtonIconLarge name="Buy Now" additionalClass="w-full">

                    <ArrowRightIcon className="h-5 w-5 text-white" />
                </ButtonIconLarge>
            </div>


            <div className='flex flex-col gap-[15px] bg-linear-to-b from-pink-600 to-primary-red p-4 rounded-2xl overflow-hidden relative'>
                <span className=" text-sm font-medium text-black py-[3.5px] text-center absolute bg-yellow-400 w-72 rotate-45 top-10 -right-24 ">Recommended</span>
                <p
                    className="text-xl font-semibold text-left text-white"
                >
                    Premium
                </p>

                <div className="space-y-2.5">
                    <p
                        className="text-[44px] font-semibold text-left text-white leading-tight"
                    >
                        $599
                    </p>
                    <p
                        className="text-base text-left text-gray-200"
                    >
                        Essential setup service
                    </p>

                </div>

                <ButtonIconLargeWhite name="Buy Now" additionalClass="w-full">

                    <ArrowRightIcon className="h-5 w-5 text-primary-red" />
                </ButtonIconLargeWhite>
            </div>


            <span className="col-span-4 border-t border-[#e5e5e7]/92 mt-[30px]"></span>
            <div className="">
                <p className="text-base font-medium text-[#626262]">
                    Admin and vendor panel setup on your hosting
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>

            <span className="col-span-4 border-t border-[#e5e5e7]/92 mb-6 mt-1"></span>
            <div className="">
                <p className="text-base font-medium text-[#626262]">
                    User, vendor, delivery apps connected with admin system
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>

            
            <span className="col-span-4 border-t border-[#e5e5e7]/92 mb-6 mt-1"></span>
            <div className="">
                <p className="text-base font-medium text-[#626262]">
                    Website installation and server configuration
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            
            <span className="col-span-4 border-t border-[#e5e5e7]/92 mb-6 mt-1"></span>
            <div className="">
                <p className="text-base font-medium text-[#626262]">
                    App name, logo, colors, and splash screen customization
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Cross />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>

            <span className="col-span-4 border-t border-[#e5e5e7]/92 mb-6 mt-1"></span>
            <div className="">
                <p className="text-base font-medium text-[#626262]">
                    Business email (SMTP) setup
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Cross />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>

            <span className="col-span-4 border-t border-[#e5e5e7]/92 mb-6 mt-1"></span>
            <div className="">
                <p className="text-base font-medium text-[#626262]">
                    Google Maps and required third-party API configuration
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Cross />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            
            <span className="col-span-4 border-t border-[#e5e5e7]/92 mb-6 mt-1"></span>
            <div className="">
                <p className="text-base font-medium text-[#626262]">
                    Social login activation
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Cross />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            
            <span className="col-span-4 border-t border-[#e5e5e7]/92 mb-6 mt-1"></span>
            <div className="">
                <p className="text-base font-medium text-[#626262]">
                    OTP verification setup
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Cross />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            
            <span className="col-span-4 border-t border-[#e5e5e7]/92 mb-6 mt-1"></span>
            <div className="">
                <p className="text-base font-medium text-[#626262]">
                    Push notification configuration
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Cross />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            
            <span className="col-span-4 border-t border-[#e5e5e7]/92 mb-6 mt-1"></span>
            <div className="">
                <p className="text-base font-medium text-[#626262]">
                    Payment gateway setup using your credentials
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Cross />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>

            
            <span className="col-span-4 border-t border-[#e5e5e7]/92 mb-6 mt-1"></span>
            <div className="">
                <p className="text-base font-medium text-[#626262]">
                    Language and localization setup
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Cross />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            
            <span className="col-span-4 border-t border-[#e5e5e7]/92 mb-6 mt-1"></span>
            <div className="">
                <p className="text-base font-medium text-[#626262]">
                    Included revision support
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Cross />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            
            <span className="col-span-4 border-t border-[#e5e5e7]/92 mb-6 mt-1"></span>
            <div className="">
                <p className="text-base font-medium text-[#626262]">
                    Android apps publish support (User, Vendor, Delivery)
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Cross />
            </div>
            <div className="flex justify-center items-center">
                <Cross />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            
            <span className="col-span-4 border-t border-[#e5e5e7]/92 mb-6 mt-1"></span>
            <div className="">
                <p className="text-base font-medium text-[#626262]">
                    iOS app publish support (User, Vendor, Delivery)
                </p>
            </div>
            <div className="flex justify-center items-center">
                <Cross />
            </div>
            <div className="flex justify-center items-center">
                <Cross />
            </div>
            <div className="flex justify-center items-center">
                <Tick />
            </div>
            <span className="col-span-4 border-t border-[#e5e5e7]/92 mb-6 mt-1"></span>
        </div>
    )
}
