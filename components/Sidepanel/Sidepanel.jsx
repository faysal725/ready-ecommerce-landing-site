'use client'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import clsx from 'clsx'
import styles from "./Sidepanel.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";

export default function Sidepanel() {

    const sectionLinks = {
        features: {
            links: [
                { title: 'super admin panel', href: '/admin' },
                { title: 'User Website', href: '#' },
                { title: 'User App', href: '#' },
                { title: 'Seller App', href: '#' },
                { title: 'Delivery Man App', href: '#' },
                { title: 'Purchase Extension App', href: '#' },
            ]
        },
        pricing: {
            links: [
                { title: 'Setup & Publication', href: '#' },
                { title: 'Custom Software', href: '/blogs' },
                { title: 'Regular & Extended License', href: '#' },
                { title: 'Customization', href: '#' },
                { title: 'Development Products', href: '#' },
            ]
        },
        helpNSupport: {
            links: [
                { title: 'Setup Documentation', href: '#' },
                { title: 'About Us', href: '#' },
                { title: 'Contact Us', href: '#' },
                { title: 'Create Ticket', href: '#' },
                { title: 'Blogs', href: '/blogs' },
            ]
        },
    }


    // hooks
    const currentPath = usePathname();
    const [showMenuBar, setShowMenuBar] = useState(false);
    const [activeSection, setActiveSection] = useState('')


    // path style handler
    function isCurrentPath(pathName) {
        return currentPath === pathName ? styles.select_underline : '';
    }

    // section style handler
    function isCurrentSection(pathName) {
        return activeSection === pathName ? styles.select_underline : '';
    }

    // section handler
    function expandSection(sectionName) {
        if (activeSection === sectionName) {
            setActiveSection('')
        } else {
            setActiveSection(sectionName)
        }
    }


    useEffect(() => {
        // setting active section
        setActiveSection('')
        Object.keys(sectionLinks).map((sectionName, index) => {
            sectionLinks[sectionName].links.map((routeLink, index) => {
                if (routeLink.href == currentPath) {
                    setActiveSection(sectionName)
                }
            })
        })
    }, [currentPath])


    return (
        <>
            <button onClick={() => setShowMenuBar(!showMenuBar)} className="w-10 h-10 flex justify-center items-center rounded cursor-pointer bg-pink-50">

                <Bars3Icon className="h-6 w-6 text-pink-500" />
            </button>


            {/* sidepanel  */}
            <div
                className={clsx("fixed h-full w-full transition-all duration-500  z-50  ease-in-out top-0 right-0 flex justify-end lg:hidden", showMenuBar ? 'translate-x-0 ' : 'translate-x-[100%]')}

            >

                <div onClick={() => setShowMenuBar(false)} className={clsx(" w-full h-full absolute z-0 transition-all duration-1000 ease-in-out", showMenuBar ? 'opacity-100' : 'opacity-0')}>

                </div>
                <div className={clsx("w-full sm:w-[50%] bg-white h-full transition-all duration-200 ease-in-out relative z-10 shadow-2xl ", showMenuBar ? 'translate-x-0' : 'translate-x-[100%]')}>

                    <button onClick={() => setShowMenuBar(false)} className="w-10 h-10 flex justify-center items-center rounded cursor-pointer bg-pink-50 absolute top-5 right-5 ">

                        <XMarkIcon className="h-6 w-6 text-pink-500" />
                    </button>

                    <ul className="flex flex-col items-center gap-6 px-4 h-full w-full mt-28 ">
                        <Link href="/"
                            className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/')}>Home</Link>
                        <div className="flex flex-col items-center">
                            <button onClick={() => expandSection('features')}
                                className={clsx("text-base font-medium text-center text-primary-black hover_underline capitalize w-fit", isCurrentSection('features'))}>features</button>

                            <SubSection shouldExpand={activeSection === 'features'} title={'features'} allLinks={sectionLinks['features']} setActiveSection={setActiveSection} />
                        </div>
                        <div className="flex flex-col items-center">
                            <button onClick={() => expandSection('pricing')}
                                className={clsx("text-base font-medium text-center text-primary-black hover_underline capitalize w-fit", isCurrentSection('pricing'))}>pricing</button>

                            <SubSection shouldExpand={activeSection === 'pricing'} title={'pricing'} allLinks={sectionLinks['pricing']} setActiveSection={setActiveSection} />
                        </div>
                        <Link href="/"
                            className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/services')}>services</Link>
                        <Link href="/"
                            className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/demo')}>demo</Link>
                        
                        
                        <div className="flex flex-col items-center">
                            <button onClick={() => expandSection('helpNSupport')}
                                className={clsx("text-base font-medium text-center text-primary-black hover_underline capitalize w-fit", isCurrentSection('helpNSupport'))}>Help & Support</button>

                            <SubSection shouldExpand={activeSection === 'helpNSupport'} title={'helpNSupport'} allLinks={sectionLinks['helpNSupport']} setActiveSection={setActiveSection} />
                        </div>
                        {/* <Link href="/"
                            className={"text-base font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath('/services')}>Help & Support</Link> */}
                    </ul>
                </div>
            </div>
        </>
    )
}


function SubSection({ allLinks, shouldExpand = false, setActiveSection, title = "" }) {


    const currentPath = usePathname();


    function isCurrentPath(pathName) {
        return currentPath === pathName ? styles.select_underline : '';
    }


    // useeffect 
    // useEffect(() => {
    //     // setting active section
    //     setActiveSection('')
    //     allLinks.links.map((routeLink, index) => {
    //         if (routeLink.href == currentPath) {
    //             console.log(routeLink.href , currentPath, title)
    //             setActiveSection(title)
    //         }
    //     })
    // }, [currentPath])


    return (
        <Transition show={shouldExpand}>
            <div className="flex flex-col items-center pt-1.5 transition-all duration-200 ease-out overflow-hidden  data-closed:opacity-0 gap-1">
                {
                    allLinks.links.map((routeLink, index) => {
                        return (
                            <Link href={routeLink.href} key={index}
                                className={"text-sm font-medium text-center text-primary-black hover_underline " + styles.hover_underline + ' ' + isCurrentPath(routeLink.href)}>
                                {routeLink.title}
                            </Link>
                        )
                    })
                }
            </div>
        </Transition>
    )
}