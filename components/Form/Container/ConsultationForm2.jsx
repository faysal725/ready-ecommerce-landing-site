'use client'

import React, { useEffect, useState } from 'react'
import InputText from '../InputText'
import Dropdown from '../Dropdown'
import Textarea from '../Textarea'
import InputPhone from '../InputPhone'
import InputFile from '../InputFile'
import ButtonLarge from '@/components/Button/ButtonLarge'
import { fullBaseUrl } from '@/lib/exportVariables'
import crud from '@/lib/axios'


export default function ConsultationForm2({ countryOption }) {


  return (
    <form action="" className='w-full h-fitrelative z-10'>


      <div className='flex flex-col gap-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputText
            label="name"
            title="Name"
            type="text"
            required={true}
            placeholder="name"
            varient="dark"
          />
          <InputText
            label="email"
            title="Email Address"
            type="email"
            required={true}
            placeholder="example@email.com"
            varient="dark"
          />
        </div>
        <InputText
          label="estimated_budget"
          title="Estimated Budget"
          type="text"
          required={true}
          placeholder="$3,000"
          varient="dark"
        />
        <Textarea
          label="project_overview"
          title="Project Overview"
          placeholder="Write project description ..."
          varient="dark"
          required
        />


        <ButtonLarge
          name="Schedule a Meeting"
          additionalClass="w-full"
        />
      </div>
    </form>
  )
}
