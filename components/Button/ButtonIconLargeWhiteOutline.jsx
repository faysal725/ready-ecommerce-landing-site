'use client'

import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function ButtonIconLargeWhiteOutline({ name = "", seoClass = "", additionalClass = "", onClick = () => { }, children }) {

    return (
        <button
            onClick={() => onClick()}
            className={"h-14 px-5 bg-transparent rounded-lg inline-flex justify-center items-center gap-2.5 transition-all duration-200 hover:shadow-inner-custom cursor-pointer border " + seoClass + additionalClass}
        >
            <div className="text-base font-medium text-center text-white">
                {name}
            </div>
            {children}
        </button>
    )
}