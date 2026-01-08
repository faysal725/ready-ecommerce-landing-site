import { CheckIcon } from '@heroicons/react/20/solid'
import React from 'react'

export default function Tick() {
    return (
        <div className='bg-red-light/30 h-7 w-7 rounded-full flex justify-center items-center'>
            <CheckIcon className='text-primary-red w-4 h-4' />
        </div>
    )
}
