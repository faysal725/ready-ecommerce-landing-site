'use client'

import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function ButtonLargeWhite({
    name = "",
    seoClass = "",
    additionalClass = "",
    onClick = () => { }
}) {

    return (
        <button
            onClick={() => onClick()}
            className={"h-12 md:h-14 px-5 bg-white rounded-lg inline-flex justify-center items-center gap-2.5 transition-all duration-200 hover:shadow-inner-custom cursor-pointer " + seoClass + additionalClass}
        >
            <div className="text-base font-medium text-center text-primary-red">
                {name}
            </div>
        </button>
    )
}