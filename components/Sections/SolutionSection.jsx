
import ButtonIconSmall from "../Button/ButtonIconSmall";
import ButtonLarge from "../Button/ButtonLarge";
import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import GradientContainer from "../Containers/GradientContainer";
import Link from "next/link";
import GradientBorderWrapper from "../wrapper/GradientBorderWrapper";



function ServiceCard({ serviceCardData }) {


    return (
        <div className="min-w-[280px] bg-white/[0.03] border border-[#e9ecef]/60  transition-all duration-200 hover:border-red-light hover:shadow-xl shadow-red-light hover:bg-red-light/10 rounded-xl overflow-hidden relative z-10 p-6 snap-center">
            {
                serviceCardData.isAddon && (
                    <span className=" text-sm font-medium text-black py-[3.5px] text-center absolute bg-yellow-400 w-52 rotate-45 top-4 -right-[70px]">Add-on</span>
                )
            }

            <div className="flex flex-col items-center gap-6 ">
                <GradientBorderWrapper
                    colors={['#F8D5DE', '#ff8dac']}
                    thickness="2"
                    borderRadius="15px"
                    padding="0px"
                    angle="300deg"
                >
                    <div className="w-[68px] h-[68px] bg-red-light flex justify-center items-center rounded-xl">
                        <img src={serviceCardData.imageSrc} alt="" />
                    </div>
                </GradientBorderWrapper>
                <div className="w-full space-y-4">
                    <p
                        className="w-full text-2xl font-semibold text-center text-primary-black"
                    >
                        {serviceCardData.name}
                    </p>
                    <p className="text-base text-center text-[#626262]">
                        {serviceCardData.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

function AllServices() {

    // all services are in here
    const servicesData = [
        {
            name: "Customer App",
            description: "Browse, order, pay, and track deliveries easily.",
            imageSrc: "/icons/sections/onlineBusiness/user-app.svg",
            isAddon: false
        },
        {
            name: "Customer Website",
            description: "Shop online, place orders, and track purchases.",
            imageSrc: "/icons/sections/onlineBusiness/link.svg",
            isAddon: false
        },
        {
            name: "Admin Panel",
            description: "Manage products, orders, users, and reports.",
            imageSrc: "/icons/sections/onlineBusiness/panel.svg",
            isAddon: false
        },
        {
            name: "Seller Panel",
            description: "Upload products, manage orders, and track earnings.",
            imageSrc: "/icons/sections/onlineBusiness/store.svg",
            isAddon: false
        },
        {
            name: "Seller App",
            description: "Handle sales and orders on the go.",
            imageSrc: "/icons/sections/onlineBusiness/seller-app.svg",
            isAddon: true
        },
        {
            name: "Delivery App",
            description: "Accept orders, navigate, and update delivery status.",
            imageSrc: "/icons/sections/onlineBusiness/delivery.svg",
            isAddon: true
        },
    ]

    return (

        <>
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative">
                {/* cards */}
                {
                    servicesData.map((service, index) => {
                        return (
                            <ServiceCard key={index} serviceCardData={service} />
                        )
                    })
                }

            </div>

            <div className="flex lg:hidden justify-start items-stretch gap-3 overflow-x-scroll snap-x scrollbar_hide">
                {
                    servicesData.map((service, index) => {
                        return (
                            <ServiceCard key={index} serviceCardData={service} />
                        )
                    })
                }
            </div>

        </>

    )
}


export default function SolutionSection() {
    return (
        <>
            <SectionContainer
                HeadingComponent={
                    <Heading
                        headingText="The Ready eCommerce Solution" subHeadingText="One platform. Multiple applications. Complete control."
                        varient="light"
                    />
                }
                mainComponent={<AllServices />}
                backgroundColorClass="!pt-[50px]"
            />
        </>
    );
}