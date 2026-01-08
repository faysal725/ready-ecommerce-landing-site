import React from 'react'




import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion2"


export default function Faq({ faqData = [] }) {
    return (
        <div>
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                {
                    faqData.map((faq, index) => (

                        <AccordionItem key={Math.random(index)} value={"item-" + (index + 1)}>
                            <AccordionTrigger>{index + 1}. {faq.question}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance text-sm lg:text-lg text-left text-primary-black pt-8">
                                <p>
                                    {faq.answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
    )
}
