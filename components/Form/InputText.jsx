'use client'

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import clsx from "clsx";
import { useState } from "react";

export default function InputText({
  label,
  title,
  type = "text",
  value,
  required = false,
  errorMsg = "",
  onChange,
  varient = "light",
  ...props
}) {

  const [currentType, setCurrentType] = useState(type);


  return (
    <div className="relative w-full flex flex-col justify-between gap-2.5">
      <label htmlFor={label} className="block "
      >
        <span className={clsx("text-sm sm:text-base font-medium text-start  capitalize", varient === 'light' ? 'text-[#0d1a29]k' : 'text-white')}>{title}</span>
        {
          required &&
          <span className="input-required-tag text-primary-red">*</span>
        }
      </label>

      <div className="relative">
        <input
          id={label}
          name={label}
          type={currentType}
          value={value}        // controlled
          onChange={onChange}
          {...props}
          className={clsx("h-10 sm:h-12 w-full px-3 sm:px-4 block rounded-xl  placeholder:text-xs sm:placeholder:text-base", varient === 'light' ? 'bg-white/10 border border-[#e5e5e7]/92 outline-red-light' : 'bg-white/10 border border-white/16 outline-none text-white')}
          required={required}
        />

        {
          type === 'password' &&
          <div className="absolute h-full top-0 right-0 pr-3 flex items-center">
            {
              currentType === 'password' ?
                <EyeIcon className="h-5 w-5 text-nGray-500" onClick={() => setCurrentType('text')} />
                :
                <EyeSlashIcon className="h-5 w-5 text-nGray-500" onClick={() => setCurrentType('password')} />
            }
          </div>
        }
      </div>
      
      {
        errorMsg &&
        <div className="text-xs text-red-500 text-start mt-1">{errorMsg}</div>
      }
    </div>
  )
}
