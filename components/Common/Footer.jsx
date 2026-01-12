import { MapPinIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-deep-navy pb-14 pt-6">
            <div className='container relative'>
                <div className='w-full h-full px-4 py-6 lg:p-[30px] rounded-3xl border border-white/20 relative z-10'>
                    <div className='mb-4 border-white/30 border-b flex justify-between flex-col md:flex-row pt-0 pb-4 lg:py-[30px] gap-6'>
                        <div className='w-full md:max-w-[364px] flex flex-col gap-[30px]'>
                            <div className='space-y-6'>
                                <img src="/icons/logos/logo-light.svg" alt="" className='w-36 md:w-48' />

                                <p className="text-base text-left text-white/60 max-w-96 leading-snug md:leading-7">
                                    The complete multi-vendor eCommerce solution trusted by thousands of marketplace owners worldwide.
                                </p>
                            </div>
                            <div className='space-y-2.5'>
                                <div className='flex justify-start items-center gap-3'>
                                    <img src="/icons/phone.svg" alt="" className='w-5 h-5' />
                                    <p className='text-base  text-white'>+880 1711257498</p>
                                </div>
                                <div className='flex justify-start items-center gap-3'>
                                    <img src="/icons/mail.svg" alt="" className='w-5 h-5' />
                                    <p className='text-base  text-white'>info@razinsoft.com</p>
                                </div>
                                <div className='flex justify-start items-start gap-3'>
                                    {/* <img src="/icons/mail.svg" alt="" className='w-5 h-5' /> */}
                                    <div>
                                        <MapPinIcon className='h-6 w-6 text-white' />
                                    </div>
                                    <p className='text-base  text-white'>1/1 (A & B), RMR Center, Adabor Bazar Road,
                                        Mohammadpur, Dhaka - 1207, Bangladesh.</p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-[15px]'>
                                <div className='h-[52px] w-[162px] gap-4 px-3 py-2 rounded-xl  border border-white/20 cursor-pointer'>
                                    <img src="/images/footer/codecanyon.png" alt="" className='object-contain h-full w-full' />
                                </div>
                                <Link href="https://razinsoft.com/" target="_blank" className='h-[52px] w-[162px] gap-4 px-3 py-2 rounded-xl  border border-white/20 cursor-pointer'>
                                    <img src="/images/footer/razinsoft.png" alt="" className='object-contain h-full w-full' />
                                </Link>
                            </div>
                        </div>
                        <div className='w-full md:w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-[60px]'>
                            <div>
                                <p className="text-lg font-medium text-white pb-6">Our Top Products</p>

                                <ul className='flex flex-col gap-[15px]'>
                                    <li>
                                        <Link href="https://razinsoft.com/products" target="_blank" className="text-base text-white/60">
                                            Ready Grocery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://razinsoft.com/products" target="_blank" className="text-base text-white/60">
                                            Ready Ride
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://razinsoft.com/products" target="_blank" className="text-base text-white/60">
                                            Ready LMS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://razinsoft.com/products" target="_blank" className="text-base text-white/60">
                                            AliCom
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://razinsoft.com/products" target="_blank" className="text-base text-white/60">
                                            Ready Laundry
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://razinsoft.com/products" target="_blank" className="text-base text-white/60">
                                            Best Laundry
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://razinsoft.com/products" target="_blank" className="text-base text-white/60">
                                            Maditam
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://razinsoft.com/products" target="_blank" className="text-base text-white/60">
                                            Rentdo
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-lg font-medium text-white pb-6">Product Modules</p>

                                <ul className='flex flex-col gap-[15px]'>
                                    <li>
                                        <Link href={'#'} className="text-base text-white/60">
                                            Admin Panel
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'} className="text-base text-white/60">
                                            Vendor Panel
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'} className="text-base text-white/60">
                                            User App
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'} className="text-base text-white/60">
                                            Delivery App
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'} className="text-base text-white/60">
                                            Vue.js Website
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-lg font-medium text-white pb-6">Company</p>

                                <ul className='flex flex-col gap-[15px]'>
                                    <li>
                                        <Link href="https://razinsoft.com/blogs" className="text-base text-white/60">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us" className="text-base text-white/60">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://razinsoft.com/contact-us" className="text-base text-white/60">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/case-study" className="text-base text-white/60">
                                            Case Studies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://readyecommerce.app/docs/" className="text-base text-white/60">
                                            Documents
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://razinsoft.com/privacy-policy" className="text-base text-white/60">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://razinsoft.com/terms-and-conditions" className="text-base text-white/60">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://razinsoft.com/refund-policy" className="text-base text-white/60">
                                            Refund & Services Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
                        <p className="text-base text-white/60">
                            © {new Date().getFullYear()} All rights reserved. Developed by <Link href="https://razinsoft.com/" className='underline text-white' target="_blank">Razinsoft</Link>
                        </p>

                        <div className='flex justify-start items-center gap-3'>
                            <a href="#" target='_blank' className='h-11 w-11 bg-white/10 flex justify-center items-center rounded-full ml-auto'>
                                <img src="/icons/socials/facebook.svg" alt="" className='w-[18px] h-[18px]' />
                            </a>
                            <a href="#" target='_blank' className='h-11 w-11 bg-white/10 flex justify-center items-center rounded-full'>
                                <img src="/icons/socials/X.svg" alt="" className='w-[18px] h-[18px]' />
                            </a>
                            <a href="#" target='_blank' className='h-11 w-11 bg-white/10 flex justify-center items-center rounded-full'>
                                <img src="/icons/socials/youtube.svg" alt="" className='w-[18px] h-[18px]' />
                            </a>
                            <a href="#" target='_blank' className='h-11 w-11 bg-white/10 flex justify-center items-center rounded-full'>
                                <img src="/icons/socials/whatsapp2.svg" alt="" className='w-[18px] h-[18px]' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute -top-60 -right-10 bg-primary-red z-0 block w-[600px] h-[600px] rounded-full blur-[300px] hidden md:block"></div>
                <div className="absolute -bottom-80 left-0 bg-primary-red z-0 block w-[500px] h-[500px] rounded-full blur-[350px]"></div>
            </div>
        </footer>
    )
}
