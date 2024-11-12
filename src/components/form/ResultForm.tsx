import { zodResolver } from '@hookform/resolvers/zod';

import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';
import Image from 'next/image';

const schema = z.object({
   subjectName: z
    .string()
    .min(3, { message: 'Subject Name must be 3 characters long' })
    .max(20, { message: 'Subject Name must be 20 characters long!' }),
   studentName:z
    .string()
    .min(3, { message: 'Student Name must be 3 characters long' })
    .max(20, { message: 'Student Name must be 20 characters long!' }),
   className: z
   .string()
   .min(2, { message: 'Class Name must be 3 characters long!' })
   .max(20, { message: 'Class Name must be 20 characters long!' }),
   grade:z
   .string()
   .min(1,{message:"Grade is Required"}),
   teacherName:z
   .string()
   .min(1,{message:"Teacher Name is required!"}),
   date:z.string().date(),
   resultDescription:z
    .string()
    .min(20,{message:"Description must be 20 characters long!"})
    .max(500, { message: 'Description must be characters long!' }),
   score:z
   .string()
   .min(1,{message:"Score is required"})
   .refine(score=>Number(score)<=100,{message:"Score can only be equal to or smaller than 100"}),
   type:z.enum(["exam","assignemnt"],{message:"Result Type is required"})

   
});

type Input=z.infer<typeof schema>

const ResultForm = ({type,data}:{type:"create" | "update",data?:any}) => {
 
  const {register,handleSubmit,formState:{errors}}=useForm<Input>({resolver:zodResolver(schema)});

  const submit=(data:any)=>{
     console.log(data);
  }
  
  return (
    <form action={""} onSubmit={handleSubmit(submit)} className='w-full  px-4  '>
       <h1 className='text-xl font-bold  py-2'>
           {type=="create"?"Add a new Result":"Update Result"}
       </h1>
       <h1 className='text-gray-500 text-sm  py-2'>Result Information</h1>
       <div className='w-full h-fit flex flex-wrap justify-between gap-2'>
         {/* Place Fields Here */}
         <InputField label="Subject Name" type="text" defaultValue={data?.subjectName} name={"subjectName"} error={errors.subjectName} register={register} />
         <InputField label="Student" type="text" defaultValue={data?.studentName} name={"studentName"} error={errors.studentName} register={register} />
         <InputField label="Class Name" type="text" defaultValue={data?.className} name={"email"} error={errors.className} register={register} />
         <InputField label="Grade" type="text" defaultValue={data?.grade} name={"grade"} error={errors.grade} register={register} />
         <InputField label="Teacher" type="text" defaultValue={data?.teacherName} name={"teacherName"} error={errors.teacherName} register={register} />
         <InputField label="Date" type="date" defaultValue={data?.date} name={"date"} error={errors.date} register={register} />
         <InputField label="Score" type="number" defaultValue={data?.score} name={"score"} error={errors.score} register={register} />
         <div className='w-full md:w-[200px] flex flex-col'>
             <label className='text-gray-500 text-sm'>Type</label>
             <select className='outline-none border-[1px] border-gray-300 px-2 py-2 rounded-md' {...register("type")}>
                 <option value="exam">
                    Exam
                 </option>
                 <option value="assignemnt">
                    Assignment
                 </option>
             </select>
             {errors?.type?.message && <p className='text-sm text-red-500'>{errors?.type?.message.toString()}</p>}
        </div>

       </div>
       
       <div className='w-full  flex flex-col'>
             <label className='text-gray-500 text-sm'>Result Description</label>
             <textarea  className="outline-none resize-none border-[1px] h-[150px]  border-gray-300 px-2 py-2 rounded-md"   placeholder='' defaultValue={data?.resultDescription} {...register("resultDescription")} >

             </textarea>
             {errors.resultDescription?.message && <p className='text-sm text-red-500'>{errors?.resultDescription?.message.toString()}</p>}
        </div>
       <button type="submit" className='bg-sky-500 w-full px-2 py-2 text-white mt-2 mb-2 rounded-md font-semibold' >{type=="create"?"Create":"Update"}</button>
    </form>
  )
}

export default ResultForm