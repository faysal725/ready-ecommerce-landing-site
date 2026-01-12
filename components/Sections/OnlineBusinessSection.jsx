'use client'


import ButtonIconSmall from "../Button/ButtonIconSmall";
import ButtonLarge from "../Button/ButtonLarge";
import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import GradientContainer from "../Containers/GradientContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

// buttons
function ExploreBtn({ onClick = () => { } }) {


    return (
        <button
            className="h-12 px-5 bg-gradient-to-b from-[#D63384] via-primary-red to-primary-red rounded-lg inline-flex justify-center items-center gap-2.5 transition-all duration-200 hover:shadow-inner-custom cursor-pointer"
            onClick={() => onClick()}
        >
            <div className="text-base font-medium text-center text-white">
                Explore The Demo
            </div>
        </button>
    )
}

function AppStoreBtn({ name = "", onClick = () => { }, children }) {
    return (
        <button
            onClick={() => onClick()}
            className={"h-10 px-5 bg-primary-red rounded-lg inline-flex justify-center items-center gap-2.5 transition-all duration-200 hover:shadow-inner-custom cursor-pointer "}
        >
            {children}
            <div className="text-[10px] text-nowrap font-medium text-center text-white">
                {name}
            </div>
        </button>
    )
}

function ProductGrid() {


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative">


            {/* card 1 */}
            <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 ">
                <div className="flex flex-col items-center gap-6 ">
                    <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                        <img src="/icons/sections/onlineBusiness/user-app.svg" alt="" />
                    </div>
                    <div className="w-full space-y-4">
                        <p
                            className="w-full text-2xl font-semibold text-center text-white"
                        >
                            Customer App
                        </p>
                        <p className="text-base text-center text-white/60">
                            Browse, order, pay, and track deliveries easily.
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-[10px]">
                        <Link href="https://play.google.com/store/apps/details?id=com.readyecommerce.apps&pcampaignid=web_share" target="_blank">
                            <ButtonIconSmall name="Google Play" >
                                <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                            </ButtonIconSmall>
                        </Link>


                        <Link href="https://testflight.apple.com/join/7BsdzGjD" target="_blank">

                            <ButtonIconSmall name="App Store" >
                                <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                            </ButtonIconSmall>
                        </Link>

                    </div>
                </div>
            </div>


            {/* card 2 */}
            <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 ">
                <div className="flex flex-col items-center gap-6 ">
                    <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                        <img src="/icons/sections/onlineBusiness/link.svg" alt="" />
                    </div>
                    <div className="w-full space-y-4">
                        <p
                            className="w-full text-2xl font-semibold text-center text-white"
                        >
                            Customer Website
                        </p>
                        <p className="text-base text-center text-white/60">
                            Shop online, place orders, and track purchases.
                        </p>
                    </div>

                    <Link href="https://demo.readyecommerce.app/" target="_blank">
                        <ButtonLarge name="Explore The Demo" additionalClass="w-[220px]" />
                    </Link>
                </div>
            </div>

            {/* card 3 */}
            <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 ">
                <div className="flex flex-col items-center gap-6 ">
                    <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                        <img src="/icons/sections/onlineBusiness/panel.svg" alt="" />
                    </div>
                    <div className="w-full space-y-4">
                        <p
                            className="w-full text-2xl font-semibold text-center text-white"
                        >
                            Admin Panel
                        </p>
                        <p className="text-base text-center text-white/60">
                            Manage products, orders, users, and reports.
                        </p>
                    </div>

                    <Link href="https://demo.readyecommerce.app/admin/" target="_blank">
                        <ButtonLarge name="Explore The Demo" additionalClass="w-[220px]" />
                    </Link>
                </div>
            </div>



            {/* card 4 */}
            <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 ">
                <div className="flex flex-col items-center gap-6 ">
                    <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                        <img src="/icons/sections/onlineBusiness/store.svg" alt="" />
                    </div>
                    <div className="w-full space-y-4">
                        <p
                            className="w-full text-2xl font-semibold text-center text-white"
                        >
                            Seller Panel 
                        </p>
                        <p className="text-base text-center text-white/60">
                            Upload products, manage orders, and track earnings.
                        </p>
                    </div>

                    <Link href="https://demo.readyecommerce.app/shop/login" target="_blank">
                        <ButtonLarge name="Explore The Demo" additionalClass="w-[220px]" />
                    </Link>
                </div>
            </div>


            {/* card 6 */}
            <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 ">
                <span className=" text-sm font-medium text-black py-[3.5px] text-center absolute bg-yellow-400 w-52 rotate-45 top-4 -right-[70px]">Add-on</span>

                <div className="flex flex-col items-center gap-6 h-full">
                    <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                        <img src="/icons/sections/onlineBusiness/seller-app.svg" alt="" />
                    </div>
                    <div className="w-full space-y-4">
                        <p
                            className="w-full text-2xl font-semibold text-center text-white"
                        >
                            Seller App
                        </p>
                        <p className="text-base text-center text-white/60">
                            Handle sales and orders on the go.
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-[10px] mt-auto">

                        <Link href="https://play.google.com/store/apps/details?id=com.readyecommerce.sellerapp&pcampaignid=web_share" target="_blank">
                            <ButtonIconSmall name="Google Play" >
                                <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                            </ButtonIconSmall>
                        </Link>


                        <Link href="https://testflight.apple.com/join/6eW97THc" target="_blank">

                            <ButtonIconSmall name="App Store" >
                                <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                            </ButtonIconSmall>
                        </Link>

                    </div>
                </div>
            </div>



            {/* card 7 */}
            <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 ">
                <span className=" text-sm font-medium text-black py-[3.5px] text-center absolute bg-yellow-400 w-52 rotate-45 top-4 -right-[70px]">Add-on</span>

                <div className="flex flex-col items-center gap-6 ">
                    <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                        <img src="/icons/sections/onlineBusiness/delivery.svg" alt="" />
                    </div>
                    <div className="w-full space-y-4">
                        <p
                            className="w-full text-2xl font-semibold text-center text-white"
                        >
                            Delivery App
                        </p>
                        <p className="text-base text-center text-white/60">
                            Accept orders, navigate, and update delivery status.
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-[10px]">

                        <Link href="https://play.google.com/store/apps/details?id=rider.readyecommerce.app&pcampaignid=web_share" target="_blank">
                            <ButtonIconSmall name="Google Play" >
                                <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                            </ButtonIconSmall>
                        </Link>


                        <Link href="https://testflight.apple.com/join/Dk56F7uj" target="_blank">

                            <ButtonIconSmall name="App Store" >
                                <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                            </ButtonIconSmall>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

function ProductSlider() {


    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        arrow: false,
        autoplay: true,
        speed: 500,
        rtl: false,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2.5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5,
                    initialSlide: 1.5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings}>

                {/* card 1 */}
                <div className='px-3 '>
                    <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 h-full">
                        <div className="flex flex-col items-center gap-6 ">
                            <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                                <img src="/icons/sections/onlineBusiness/user-app.svg" alt="" />
                            </div>
                            <div className="w-full space-y-4">
                                <p
                                    className="w-full text-2xl font-semibold text-center line-clamp-1 text-white"
                                >
                                    Customer App
                                </p>
                                <p className="text-base text-center text-white/60 line-clamp-2">
                                    Browse, order, pay, and track deliveries easily.
                                </p>
                            </div>

                            <div className="flex justify-center items-center gap-2.5">
                                <Link href="https://play.google.com/store/apps/details?id=com.readyecommerce.apps&pcampaignid=web_share" target="_blank">
                                    <AppStoreBtn name="Google Play" >
                                        <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                                    </AppStoreBtn>
                                </Link>
                                <Link href="https://testflight.apple.com/join/7BsdzGjD" target="_blank">
                                    <AppStoreBtn name="App Store" >
                                        <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                                    </AppStoreBtn>
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>

                {/* card 2 */}
                <div className='px-3 '>

                    <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 h-full">
                        <div className="flex flex-col items-center gap-6 ">
                            <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                                <img src="/icons/sections/onlineBusiness/link.svg" alt="" />
                            </div>
                            <div className="w-full space-y-4">
                                <p
                                    className="w-full text-2xl font-semibold text-center line-clamp-1 text-white"
                                >
                                    Customer Website
                                </p>
                                <p className="text-base text-center text-white/60 line-clamp-2">
                                    Shop online, place orders, and track purchases.
                                </p>
                            </div>

                            <Link href="https://demo.readyecommerce.app/" target="_blank">
                                <ExploreBtn />
                            </Link>
                        </div>
                    </div>
                </div>



                {/* card 3 */}
                <div className='px-3 '>

                    <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 h-full">
                        <div className="flex flex-col items-center gap-6 ">
                            <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                                <img src="/icons/sections/onlineBusiness/panel.svg" alt="" />
                            </div>
                            <div className="w-full space-y-4">
                                <p
                                    className="w-full text-2xl font-semibold text-center line-clamp-1 text-white"
                                >
                                    Admin Panel
                                </p>
                                <p className="text-base text-center text-white/60 line-clamp-2">
                                   Manage products, orders, users, and reports.
                                </p>
                            </div>

                            <Link href="https://demo.readyecommerce.app/admin/" target="_blank">
                                <ExploreBtn />
                            </Link>
                        </div>
                    </div>
                </div>



                {/* card 4 */}
                <div className='px-3 '>

                    <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 h-full">
                        <div className="flex flex-col items-center gap-6 ">
                            <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                                <img src="/icons/sections/onlineBusiness/store.svg" alt="" />
                            </div>
                            <div className="w-full space-y-4">
                                <p
                                    className="w-full text-2xl font-semibold text-center line-clamp-1 text-white"
                                >
                                    Seller Panel
                                </p>
                                <p className="text-base text-center text-white/60 line-clamp-2">
                                    Upload products, manage orders, and track earnings.
                                </p>
                            </div>

                            <Link href="https://demo.readyecommerce.app/shop/login" target="_blank">
                                <ExploreBtn />
                            </Link>
                        </div>
                    </div>
                </div>



                {/* card 5 */}
                <div className='px-3 '>
                    <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 h-full">
                        <span className=" text-sm font-medium text-black py-[3.5px] text-center absolute bg-yellow-400 w-52 rotate-45 top-4 -right-[70px]">Add-on</span>

                        <div className="flex flex-col items-center gap-6 ">
                            <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                                <img src="/icons/sections/onlineBusiness/seller-app.svg" alt="" />
                            </div>
                            <div className="w-full space-y-4">
                                <p
                                    className="w-full text-2xl font-semibold text-center line-clamp-1 text-white"
                                >
                                    Seller App
                                </p>
                                <p className="text-base text-center text-white/60 line-clamp-2">
                                    Handle sales and orders on the go.
                                </p>
                            </div>


                            <div className="flex justify-center items-center gap-2.5">

                                <Link href="https://play.google.com/store/apps/details?id=com.readyecommerce.sellerapp&pcampaignid=web_share" target="_blank">
                                    <AppStoreBtn name="Google Play" >
                                        <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                                    </AppStoreBtn>
                                </Link>

                                <Link href="https://testflight.apple.com/join/6eW97THc" target="_blank">
                                    <AppStoreBtn name="App Store" >
                                        <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                                    </AppStoreBtn>
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>

                {/* card 6 */}
                <div className='px-3 '>
                    <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 h-full">
                        <span className=" text-sm font-medium text-black py-[3.5px] text-center absolute bg-yellow-400 w-52 rotate-45 top-4 -right-[70px]">Add-on</span>

                        <div className="flex flex-col items-center gap-6 ">
                            <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                                <img src="/icons/sections/onlineBusiness/delivery.svg" alt="" />
                            </div>
                            <div className="w-full space-y-4">
                                <p
                                    className="w-full text-2xl font-semibold text-center line-clamp-1 text-white"
                                >
                                    Delivery App
                                </p>
                                <p className="text-base text-center text-white/60 line-clamp-2">
                                    Accept orders, navigate, and update delivery status.
                                </p>
                            </div>


                            <div className="flex justify-center items-center gap-2.5">
                                
                                <Link href="https://play.google.com/store/apps/details?id=rider.readyecommerce.app&pcampaignid=web_share" target="_blank">
                                <AppStoreBtn name="Google Play" >
                                    <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                                </AppStoreBtn>
                                </Link>

                                
                                <Link href="https://testflight.apple.com/join/Dk56F7uj" target="_blank">
                                <AppStoreBtn name="App Store" >
                                    <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                                </AppStoreBtn>
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>

            </Slider>
        </div>
    )
}

function AllServices() {

    // all services are in here
    const services = []

    return (
        <div className="relative">
            <div className="absolute -top-20 -left-20 bg-primary-red z-0 block w-96 h-96 rounded-full blur-[150px]"></div>


            <div className="hidden lg:block">
                <ProductGrid />
            </div>



            <div className="block lg:hidden">
                <ProductSlider />
            </div>
        </div>

    )
}


export default function OnlineBusinessSection() {
    return (
        <>
            <SectionContainer
                HeadingComponent={
                    <Heading headingText="Simplify Your Online Business" subHeadingText="Manage, sell, and grow—all from one powerful platform." varient="dark" />
                }
                mainComponent={<AllServices />}
                backgroundColorClass="bg-deep-navy"
                sectionId="onlineBusiness"
            />
        </>
    );
}