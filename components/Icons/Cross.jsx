import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'

export default function Cross() {
    return (
        <div className='bg-gray-100 h-7 w-7 rounded-full flex justify-center items-center'>
            <XMarkIcon className='text-gray-700 w-4 h-4' />
        </div>
    )
}
