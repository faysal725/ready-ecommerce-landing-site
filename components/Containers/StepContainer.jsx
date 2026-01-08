'use client'

import clsx from 'clsx'

export default function StepContainer({ stepData }) {

    return (
        <>

            <div className="hidden md:block">
                {
                    stepData.map((step, index) => {
                        const isEven = index % 2 === 0;
                        const isFirst = index === 0;
                        const isLast = index === stepData.length - 1;
                        return (
                            <div key={index} className="grid grid-cols-12">
                                <div className='col-span-5'>
                                    {!isEven && (
                                        <div className='rounded-xl border border-gray-200 p-4'>
                                            {step.stepDescriptionComponent}
                                        </div>
                                    )}
                                </div>
                                <div className='col-span-2 flex flex-col justify-center items-center relative'>
                                    <span className={clsx("block flex-1 border ", isFirst ? "border-transparent" : "border-[#dcdcdc]")}></span>
                                    <div
                                        className="flex flex-col justify-center items-center h-[68px] w-[68px] relative rounded-[100px] bg-white border border-[#dcdcdc] relative z-10"
                                    >
                                        {step.stepComponent}

                                    </div>
                                    <div className='absolute w-full h-full z-0 top-0 right-0 flex justify-center items-center'>
                                        <span className={clsx('w-full border ', !isEven ? 'border-[#dcdcdc]' : 'border-transparent')}></span>
                                        <span className={clsx('w-full border ', isEven ? 'border-[#dcdcdc]' : 'border-transparent')}></span>
                                    </div>

                                    <span className={clsx("block flex-1 border ", isLast ? "border-transparent" : "border-[#dcdcdc]")}></span>
                                </div>

                                <div className='col-span-5'>
                                    {isEven && (
                                        <div className='rounded-xl border border-gray-200 p-4'>
                                            {step.stepDescriptionComponent}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })
                }
            </div>


            <div className="flex flex-col gap-3 md:hidden">
                {
                    stepData.map((step, index) => {
                        const isEven = index % 2 === 0;
                        const isFirst = index === 0;
                        const isLast = index === stepData.length - 1;
                        return (
                            <div key={index} className="flex justify-start items-center">
                                <div
                                    className="flex flex-col justify-center items-center min-h-10 min-w-10 rounded-[100px] bg-white border border-[#dcdcdc] relative z-10"
                                >
                                    {step.stepComponent}

                                </div>

                                <span className='min-w-4 md:min-w-8 block border border-gray-200'></span>
                                <div className='rounded-xl border border-gray-200 p-4 flex-1'>

                                    {step.stepDescriptionComponent}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}