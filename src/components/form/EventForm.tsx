import { zodResolver } from '@hookform/resolvers/zod';

import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';
import Image from 'next/image';

const schema = z.object({
   title: z
    .string()
    .min(3, { message: 'Title must be 3 characters long' })
    .max(20, { message: 'Title must be 20 characters long!' }),
   className: z
   .string()
   .min(2, { message: 'Class Name must be 3 characters long!' })
   .max(20, { message: 'Class Name must be 20 characters long!' }),
   date:z.string().date(),
   startTime:z
    .string(),
   endTime:z
   .string(),
   eventDescription:z
    .string()
    .min(20,{message:"Description must be 20 characters long!"})
    .max(500, { message: 'Description must be characters long!' }),
}).refine((data)=>{
   const startTime=new Date(`1970-01-01T${data.startTime}`);
   const endTime=new Date(`1970-01-01T${data.endTime}`);
   return startTime<endTime;
},{
   message:"End time should be greater than start Time",
   path:["endTime"]
})

type Input=z.infer<typeof schema>

const EventForm = ({type,data}:{type:"create" | "update",data?:any}) => {
 
  const {register,handleSubmit,formState:{errors}}=useForm<Input>({resolver:zodResolver(schema)});

  const submit=(data:any)=>{
     console.log(data);
  }
  
  return (
    <form action={""} onSubmit={handleSubmit(submit)} className='w-full  px-4  '>
       <h1 className='text-xl font-bold  py-2'>
            {type=="create"?"Add an Event":"Update an Event"}
       </h1>
       <h1 className='text-gray-500 text-sm  py-2'>Event Information</h1>
       <div className='w-full h-fit flex flex-wrap justify-between gap-2'>
         {/* Place Fields Here */}
         <InputField label="Title" type="text" defaultValue={data?.title} name={"title"} error={errors.title} register={register} />
         <InputField label="Class Name" type="text" defaultValue={data?.className} name={"className"} error={errors.className} register={register} />
         <InputField label="Date" type="date" defaultValue={data?.date} name={"date"} error={errors.date} register={register} />
         <InputField label="Start Time" type="time" defaultValue={data?.startTime} name={"startTime"} error={errors.startTime} register={register} />
         <InputField label="End Time" type="time" defaultValue={data?.endTime} name={"endTime"} error={errors.endTime} register={register} />

       </div>
       
       <div className='w-full  flex flex-col'>
             <label className='text-gray-500 text-sm'>Event Description</label>
             <textarea  className="outline-none resize-none border-[1px] h-[150px]  border-gray-300 px-2 py-2 rounded-md"   placeholder='' defaultValue={data?.resultDescription} {...register("eventDescription")} >

             </textarea>
             {errors.eventDescription?.message && <p className='text-sm text-red-500'>{errors?.eventDescription?.message.toString()}</p>}
        </div>
       <button type="submit" className='bg-sky-500 w-full px-2 py-2 text-white mt-2 mb-2 rounded-md font-semibold' >{type=="create"?"Create":"Update"}</button>
    </form>
  )
}

export default EventForm