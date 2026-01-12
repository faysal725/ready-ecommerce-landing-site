import { getCountries } from "@/lib/dataFetching/getCountries";
import ButtonIconSmall from "../Button/ButtonIconSmall";
import ButtonLarge from "../Button/ButtonLarge";
import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import ConsultationForm from "../Form/Container/ConsultationForm";
import VideoPlayer from "../Additional/VideoPlayer";
import { PlayCircleIcon } from "@heroicons/react/24/outline";


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import TestimonialCards from "../Cards/TestimonialCards";
import TestimonialCarousel from "./TestimonialCarousel";







function Testimonials() {

    const testimonialData = [
        {
            rating: 5,
            review: "Great Product & Support!\r\nI’m very happy with this eCommerce script. Everything works perfectly, and the features are just what I needed. The support team is amazing—quick and very helpful. Highly recommended!"
            ,
            user: {
                name: "Kevin King",
                position: "createnet.co.uk",
                image: "https://admin.razinsoft.com/storage/testimonial/image/nx8qkLDHNUqP9463ZpSaibDvEkBZlNnlcgbMFhgN.png"
            }
        },
        {
            rating: 5,
            review: "Absolutely Fantastic Product & Support!\r\nSuper happy with this eCommerce script — smooth UX, powerful features, and top-notch support 🚀🙌\r\nHighly recommended!"
            ,
            user: {
                name: "Dhulfiqar Ali",
                position: "sswholesale.com.au",
                image: "https://admin.razinsoft.com/storage/testimonial/image/EJ7AcjDkZPkoGUqBWpArD1d6aUyNhHA4DRZrUrm0.png"
            }
        },
        {
            rating: 5,
            review: "The code structure is good and got a very kindly professional support. Keep the good work and go ahead.",
            user: {
                name: "Michael Thompson"
                ,
                position: "Techspire Solutions",
                image: "https://admin.razinsoft.com/storage/testimonial/image/tYhohJ74T1FpNkfcixTXOn5i7kyt3iE21LKkqI1n.jpg"
            }
        },
        {
            rating: 5,
            review: "The Ready eCommerce Seller App Addon by Razinsoft is a great tool for managing vendors and stores. It's user-friendly and integrates seamlessly with the main platform, making tasks like order and inventory management much easier. Highly recommend.",
            user: {
                name: "Gabriel Martins",
                position: "Foldz Solution",
                image: "https://admin.razinsoft.com/storage/testimonial/image/SeaOCqySryVm2T9BoW3i2PbPnSQKTKvlVpjKAvtx.jpg"
            }
        },
    ]




    return (
        <>

            <div className="relative ">
                <div className="absolute top-0 left-10 bg-yellow-400 block w-[150px] h-[150px] rounded-full blur-[150px] z-0"></div>
                <div className="absolute top-0 right-1/3 bg-red-600 block w-[150px] h-[150px] rounded-full blur-[100px] z-0"></div>

                <div className="hidden lg:grid grid-cols-4 gap-6 pb-10">
                    {
                        testimonialData.map((testimonial, index) => (

                            <TestimonialCards key={index} testimonialData={testimonial} />
                        ))
                    }
                </div>

                <div className="block lg:hidden">
                    <TestimonialCarousel Testimonials={testimonialData} />
                </div>
            </div>


        </>
    )
}


function TestimonialHeading() {


    return (
        <div className="relative">
            <img src="/icons/sections/testimonial/arrow.svg" alt="" className="absolute w-[60px] top-6 -right-14" />
            <Heading headingText="Loved by Businesses" subHeadingText="See what our customers have to say" varient="dark" />
        </div>
    )
}


export default function TestimonialSection() {
    return (
        <>
            <SectionContainer
                HeadingComponent={
                    <TestimonialHeading />
                }
                mainComponent={<Testimonials />}
                backgroundColorClass="bg-deep-navy pb-6 md:pb-[50px]"
            />
        </>
    );
}