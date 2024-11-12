import React from 'react'
import { FieldError } from 'react-hook-form'

const InputField = ({label,type,defaultValue,name,error,register,inputProps}:{label:string,type:string,defaultValue?:any,name:string,error:FieldError | undefined,register:any,inputProps?:React.InputHTMLAttributes<HTMLInputElement>}) => {

    return(
        <div className='w-full md:w-[200px] flex flex-col'>
             <label className='text-gray-500 text-sm'>{label}</label>
             <input className="outline-none border-[1px] border-gray-300 px-2 py-2 rounded-md" type={type} placeholder='' defaultValue={defaultValue} {...register(name)} {...inputProps} />
             {error?.message && <p className='text-sm text-red-500'>{error?.message.toString()}</p>}

        </div>
    )
}

export default InputField