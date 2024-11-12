import { zodResolver } from '@hookform/resolvers/zod';

import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';
import Image from 'next/image';

const schema = z.object({
    className: z
    .string()
    .min(2, { message: 'Class Name must be 3 characters long!' })
    .max(20, { message: 'Class Name must be 20 characters long!' }),
    capacity: z
    .string()
    .min(1,{message:"Capacity of class required!"})
    .refine((capacity)=>Number(capacity)<=50,{message:"Capacity should be 50 or lesser"}),
    grade:z
    .string()
    .min(1,{message:"Grade is Required"}),
    supervisorName:z
    .string()
    .min(1,{message:"Supervisor Name is required!"}),
});

type Input=z.infer<typeof schema>

const ClassesForm = ({type,data}:{type:"create" | "update",data?:any}) => {
 
  const {register,handleSubmit,formState:{errors}}=useForm<Input>({resolver:zodResolver(schema)});

  const submit=(data:any)=>{
     console.log(data);
  }
  
  return (
    <form action={""} onSubmit={handleSubmit(submit)} className='w-full  px-4  '>
       <h1 className='text-xl font-bold  py-2'>
         {type=="create"?"Create a new class":"Update Class"}
       </h1>
       <h1 className='text-gray-500 text-sm  py-2'>Class Information</h1>
       <div className='w-full h-fit flex flex-wrap justify-between gap-2'>
         {/* Place Fields Here */}
         <InputField label="Class Name" type="text" defaultValue={data?.className} name={"className"} error={errors.className} register={register} />
         <InputField label="Capacity" type="number" defaultValue={data?.capacity} name={"capacity"} error={errors.capacity} register={register} />
         <InputField label="Grade" type="text" defaultValue={data?.grade} name={"grade"} error={errors.grade} register={register} />
         <InputField label="Supervisor Name" type="text" defaultValue={data?.supervisorName} name={"supervisorName"} error={errors.supervisorName} register={register} />

       </div>
       
       <button type="submit" className='bg-sky-500 w-full px-2 py-2 text-white mt-2 mb-2 rounded-md font-semibold' >{type=="create"?"Create":"Update"}</button>
    </form>
  )
}

export default ClassesForm