'use client'

import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Heading from '../Common/Heading'



function AdminPanel() {

    let adminControlPanelObj = [
        { title: "Powerful Dashboard", description: "View key business metrics, sales, and performance insights in real time from a single, intuitive dashboard.", imgSrc: "/images/sections/AdminDashboardSection/dashboard-img.png" },
        { title: "Powerful Admin Panel", description: "Manage your entire platform efficiently with a secure and feature-rich admin control system.", imgSrc: "/images/sections/AdminDashboardSection/dashboard-img.png" },
        { title: "Multi-vendor & Single-vendor Support", description: "Operate as a single store or scale into a full multi-vendor marketplace with ease.", imgSrc: "/images/sections/AdminDashboardSection/dashboard-img.png" },
        { title: "Wallet Management", description: "Track balances, transactions, refunds, and payouts for users and vendors seamlessly.", imgSrc: "/images/sections/AdminDashboardSection/dashboard-img.png" },
        { title: "User Management", description: "Control user accounts, roles, permissions, and activity from one centralized system.", imgSrc: "/images/sections/AdminDashboardSection/dashboard-img.png" },
        { title: "Coupon & Voucher Management", description: "Create, manage, and track discount coupons and vouchers with flexible rules.", imgSrc: "/images/sections/AdminDashboardSection/dashboard-img.png" },
        { title: "Order Management", description: "Monitor and manage orders, statuses, cancellations, and refunds efficiently.", imgSrc: "/images/sections/AdminDashboardSection/dashboard-img.png" },
        { title: "Promotion Management", description: "Run banners, campaigns, and special offers to boost visibility and sales.", imgSrc: "/images/sections/AdminDashboardSection/dashboard-img.png" },
    ]

    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {
                adminControlPanelObj.map((item, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-white border-[1.3px] border-[#e9ecef]/60 transition-all duration-200 hover:bg-[#f8d5de]/10 hover:border-red-light">
                        <div className="space-y-2.5">
                            <p className="text-lg font-semibold text-primary-black">{item.title}</p>
                            <p className="text-base text-[#626262]/60">{item.description}</p>
                        </div>

                        <div className='md:p-6  pt-8'>
                            <img src={item.imgSrc} alt="" className="w-full shadow-2xl shadow-red-light" />
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default function AdminDashboardSection() {
    return (
        <section className="py-10">
            <div className="container flex flex-col gap-[60px]">
                <TabGroup className="w-full space-y-6 md:space-y-[60px]">
                    <TabList className="p-4 rounded-xl  backdrop-blur flex justify-start items-center gap-2.5 overflow-x-scroll scrollbar_hide bg-[#fffbfc]/90 border border-[#e9ecef]/70">
                        <Tab className="min-w-40 group relative gap-1.5 p-2.5 rounded-lg bg-[#f8d5de]/16 border border-[#dd2c5c]/5 cursor-pointer flex justify-center items-center
                            data-[selected]:bg-primary-red">

                            <img
                                src="/icons/sections/AdminDashboardSection/admin.svg"
                                alt=""
                                className="opacity-100 group-data-[selected]:brightness-0 group-data-[selected]:invert"
                            />

                            <p className="text-black group-data-[selected]:text-white">
                                Admin Panel
                            </p>

                        </Tab>
                        <Tab className="min-w-40 group relative gap-1.5 p-2.5 rounded-lg bg-[#f8d5de]/16 border border-[#dd2c5c]/5 cursor-pointer flex justify-center items-center
                            data-[selected]:bg-primary-red">

                            <img
                                src="/icons/sections/AdminDashboardSection/mobile.svg"
                                alt=""
                                className="opacity-100 group-data-[selected]:brightness-0 group-data-[selected]:invert"
                            />

                            <p className="text-black group-data-[selected]:text-white">
                                User App
                            </p>

                        </Tab>
                        <Tab className="min-w-40 group relative gap-1.5 p-2.5 rounded-lg bg-[#f8d5de]/16 border border-[#dd2c5c]/5 cursor-pointer flex justify-center items-center
                            data-[selected]:bg-primary-red">

                            <img
                                src="/icons/sections/AdminDashboardSection/seller.svg"
                                alt=""
                                className="opacity-100 group-data-[selected]:brightness-0 group-data-[selected]:invert"
                            />

                            <p className="text-black group-data-[selected]:text-white">
                                Seller App
                            </p>

                        </Tab>
                        <Tab className="min-w-40 group relative gap-1.5 p-2.5 rounded-lg bg-[#f8d5de]/16 border border-[#dd2c5c]/5 cursor-pointer flex justify-center items-center
                            data-[selected]:bg-primary-red">

                            <img
                                src="/icons/sections/AdminDashboardSection/delivery.svg"
                                alt=""
                                className="opacity-100 group-data-[selected]:brightness-0 group-data-[selected]:invert"
                            />

                            <p className="text-black group-data-[selected]:text-white">
                                Delivery App
                            </p>

                        </Tab>
                        <Tab className="min-w-40 group relative gap-1.5 p-2.5 rounded-lg bg-[#f8d5de]/16 border border-[#dd2c5c]/5 cursor-pointer flex justify-center items-center
                            data-[selected]:bg-primary-red">

                            <img
                                src="/icons/sections/AdminDashboardSection/link.svg"
                                alt=""
                                className="opacity-100 group-data-[selected]:brightness-0 group-data-[selected]:invert"
                            />

                            <p className="text-black group-data-[selected]:text-white">
                                Website
                            </p>

                        </Tab>
                    </TabList>
                    <div>
                        <Heading
                            headingText="Powerful Features, Built to Scale"
                            subHeadingText="Smart tools designed to simplify operations and accelerate growth."
                            varient="light"
                        />
                    </div>
                    <TabPanels>
                        <TabPanel>
                            <AdminPanel />
                        </TabPanel>
                        <TabPanel>Content 2</TabPanel>
                        <TabPanel>Content 3</TabPanel>
                        <TabPanel>Content 4</TabPanel>
                        <TabPanel>Content 5</TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </section>
    )
}
