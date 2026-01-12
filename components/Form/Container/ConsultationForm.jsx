'use client'

import React, { useEffect, useState } from 'react'
import InputText from '../InputText'
import Dropdown from '../Dropdown'
import Textarea from '../Textarea'
import { Button } from '@/components/ui/button'
import InputPhone from '../InputPhone'
import InputFile from '../InputFile'
import ButtonLarge from '@/components/Button/ButtonLarge'
import { fullBaseUrl } from '@/lib/exportVariables'
import crud from '@/lib/axios'
import ReCaptcha from '../ReCaptcha'
import { ToastContainer, toast } from 'react-toastify';


export default function ConsultationForm({ countryOption }) {

  // base api
  const businessTypeApi = fullBaseUrl() + '/business-types'
  const userDataApi = fullBaseUrl() + '/contact-user-data-store'

  // state
  const [businessTypeOptions, setBusinessTypeOptions] = useState([])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business_type: '',
    country_id: '',
    message: '',
    attachment: [],
  })

  const [loading, setLoading] = useState(false)



  async function getBusinessTypeOptions() {
    try {
      const res = await crud.get(businessTypeApi);
      // console.log(res.data.data)
      setBusinessTypeOptions(res.data.data)
      // return res.data; 
    } catch (err) {
      // toast.error(err.response?.data?.message || "Login failed");
      // return rejectWithValue(err.response.data);
    }
  }




  // need to change future badly
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget;
    const consultFormData = new FormData(form);
    console.log("attachmet:", consultFormData.get("requirements"));


    setLoading(true)

    try {
      const submitData = new FormData()
      submitData.append('name', formData.name)
      submitData.append('email', formData.email)
      submitData.append('phone', formData.phone)
      submitData.append('business_type', consultFormData.get("business_type"))
      submitData.append('country_id', formData.country_id)
      submitData.append('message', formData.message)

      
      
      if (formData.attachment) {
        console.log(formData.attachment)
        submitData.append('attachment[]', consultFormData.get("requirements"))
        console.log(submitData)
      }

      // console.log(submitData)
      const res = await crud.post(userDataApi, submitData, {
        headers: {
          'Accept': "application/json",
        },
      })

      console.log('Success:', res.data)

      toast.success(res.data.message);
      // optional: reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        business_type: '',
        country_id: '',
        message: '',
        attachment: [],
      })

    } catch (error) {
      console.log('Submit error:', error.response?.data || error.message)
      toast.error(error.response?.data.message );
    } finally {
      setLoading(false)
    }
  }



  useEffect(() => {
    getBusinessTypeOptions();
  }, [])


  return (
    <form onSubmit={handleSubmit} className='w-full h-fit rounded-xl bg-white border border-white/20 p-4 md:p-6 relative z-10'>
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
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          placeholder="name"
        />
        <InputPhone
          title="Phone Number"
          onCountryChange={(id) => setFormData({ ...formData, country_id: id })}
          countryOption={countryOption.countries}
          onPhoneNumberChange={(phone) =>
            setFormData({ ...formData, phone: phone })
          }
          phoneLabel="Phone Number"
        />
        <InputText
          label="email"
          title="Email Address"
          type="email"
          required={true}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          placeholder="example@email.com"
        />
        <Dropdown
          label="business_type"
          title="Business Type"
          options={businessTypeOptions}
          onChange={(e) =>
            setFormData({ ...formData, business_type: e.target.value })
          }
        />
        <Textarea
          label="message"
          title="Your Message"
          placeholder="Write something..."
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />

        <InputFile
          label="requirements"
          title="Upload Requirements (Optional)"
          accept="image/png, image/jpeg"
          onChange={(file) =>
            setFormData({ ...formData, attachment: file })
          }
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
