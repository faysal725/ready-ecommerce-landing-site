'use client'

import React, { useEffect, useState } from 'react'
import Dropdown from '../Form/Dropdown'
import { fullBaseUrl } from '@/lib/exportVariables'
import crud from '@/lib/axios'

export default function BusinessTypeDropdownSection() {

    // base api
    const businessTypeApi = fullBaseUrl() + '/business-types'
    const userDataApi = fullBaseUrl() + '/contact-user-data-store'

    // state
    const [businessTypeOptions, setBusinessTypeOptions] = useState([])


    async function getBusinessTypeOptions() {
        try {
            const res = await crud.get(businessTypeApi);
            console.log(res.data.data)
            setBusinessTypeOptions(res.data.data)
            // return res.data; 
        } catch (err) {
            // toast.error(err.response?.data?.message || "Login failed");
            // return rejectWithValue(err.response.data);
        }
    }






    useEffect(() => {
        getBusinessTypeOptions();
    }, [])
    return (
        <Dropdown
            label="business_type"
            title="Business Type"
            options={businessTypeOptions}
        />
    )
}
