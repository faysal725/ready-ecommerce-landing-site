
import React from 'react'
import InputText from '../InputText'
import Dropdown from '../Dropdown'
import Textarea from '../Textarea'
import { Button } from '@/components/ui/button'
import InputPhone from '../InputPhone'
import InputFile from '../InputFile'
import ButtonLarge from '@/components/Button/ButtonLarge'
import { fullBaseUrl } from '@/lib/exportVariables'
import crud from '@/lib/axios'
// import ReCaptcha from '../ReCaptcha'
import { ToastContainer, toast } from 'react-toastify';
import BusinessTypeDropdownSection from '@/components/Sections/BusinessTypeDropdownSection'


export default function ConsultationForm({ countryOption }) {

  // base api
  const businessTypeApi = fullBaseUrl() + '/business-types'
  const userDataApi = fullBaseUrl() + '/contact-user-data-store'







  // need to change future badly
  async function submitForm(formData) {
    'use server'

    // console.log(countryOption, 'asdfasdfsdf')

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      country_id: formData.get('country_id'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    }

    // 👉 Call your API here
    // const res = await fetch('https://example.com/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    //   cache: 'no-store',
    // })

    // if (!res.ok) {
    //   throw new Error('Failed to submit form')
    // }

    // const result = await res.json()
    console.log(data)
  }




  return (
    <form action={submitForm} className='w-full h-fit rounded-xl bg-white border border-white/20 p-4 md:p-6 relative z-10'>
      <p
        className=" text-lg font-semibold text-left text-primary-red"
      >
        Fill the Form — We'll Call You Back In 24hr
      </p>


      <div className='flex flex-col gap-4 mt-6 md:mt-9 mb-0 lg:mb-6'>
        <InputText
          label="name"
          title="Full Name"
          type="text"
          required={true}
          placeholder="Name"
        />
        <InputPhone
          title="Phone Number"
          countryOption={countryOption.countries}
          phoneLabel="Phone Number"
        />
        <InputText
          label="email"
          title="Email Address"
          type="email"
          required={true}
          placeholder="example@email.com"
        />
        {/* <Dropdown
          label="business_type"
          title="Business Type"
          options={businessTypeOptions}
        /> */}
        <BusinessTypeDropdownSection />
        <Textarea
          label="message"
          title="Your Message"
          placeholder="Write something..."
          required
        />

        <InputFile
          label="requirements"
          title="Upload Requirements (Optional)"
          accept="image/png, image/jpeg"
        />

        {/* <ReCaptcha /> */}
        <ButtonLarge
          name="Explore The Demo"
          additionalClass="w-full lg:w-[234px]"
        />
      </div>
    </form>
  )
}
