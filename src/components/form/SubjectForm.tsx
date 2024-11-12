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
    className: z
    .string()
    .min(3,{message:"Class Name must be 3 characters long!"})
    .max(20, { message: 'Class Name must be 20 characters long!' }),
    subjectDescription:z
    .string()
    .min(20,{message:"Description must be 20 characters long!"})
    .max(500, { message: 'Description must be characters long!' }),
    teacherName:z
    .array(z.object({value:z.string().min(1,{message:"Teacher name is required"})})),
    sex:z
    .enum(["male","female"],{message:"Sex is required!"}),
   

});

type Input=z.infer<typeof schema>

const SubjectForm = ({type,data}:{type:"create" | "update",data?:any}) => {
 
  const {register,handleSubmit,formState:{errors},control}=useForm<Input>({resolver:zodResolver(schema)});
  const { fields, append, remove } = useFieldArray({
   control,
   name: "teacherName",
   });

  const submit=(data:any)=>{
     console.log(data);
  }
  
  return (
    <form action={""} onSubmit={handleSubmit(submit)} className='w-full  px-4  '>
       <h1 className='text-xl font-bold  py-2'>
         {type=="create"?"Add a new Subject":"Update Subject"}
       </h1>
       <h1 className='text-gray-500 text-sm  py-2'>Authentication Information</h1>
       <div className='w-full h-fit flex flex-wrap justify-between gap-2'>
         {/* Place Fields Here */}
         <InputField label="Subject" type="text" defaultValue={data?.subjectName} name={"subjectName"} error={errors.subjectName} register={register} />
         <InputField label="Class" type="text" defaultValue={data?.className} name={"className"} error={errors.className} register={register} />
       </div>
       <div className='w-full  flex flex-col'>
             <label className='text-gray-500 text-sm'>Subject Description</label>
             <textarea className="outline-none border-[1px] h-[150px]  border-gray-300 px-2 py-2 rounded-md"   placeholder='' defaultValue={data?.subjectDescription} {...register("subjectDescription")} >

             </textarea>
             {errors.subjectDescription?.message && <p className='text-sm text-red-500'>{errors?.subjectDescription?.message.toString()}</p>}
        </div>

       <h1 className='text-gray-500 text-sm  py-4 '>Teacher Information</h1>
       <div className='w-full h-fit flex flex-wrap justify-between gap-2 '>
         {/* Place Fields Here */}
      <div className="w-full  h-fit flex flex-wrap gap-2 justify-between">
      {fields.map((field, index) => {
          return (
            <div key={field.id} className="w-full md:w-fit flex flex-col   flex-wrap gap-2">
              <InputField
                label={`Teacher ${index + 1}`}
                type="text"
                defaultValue={data?.teacherName[index] || ""}
                name={`teacherName.${index}.value`}
                error={errors.teacherName?.[index]?.value} 
                register={register}
              />
              <button
                onClick={() => remove(index)}
                className={`bg-red-500 text-white text-lg w-fit  rounded-md  px-2 py-[6px] h-fit hover:scale-95`}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

         <div className='w-full md:w-[200px]  flex flex-col'>
             <label className='text-gray-500 text-sm'>Sex</label>
             <select className='outline-none border-[1px] border-gray-300 px-2 py-2 rounded-md' {...register("sex")}>
                 <option value="male">
                    Male
                 </option>
                 <option value="female">
                    Female
                 </option>
             </select>
             {errors?.sex?.message && <p className='text-sm text-red-500'>{errors?.sex?.message.toString()}</p>}
        </div>
      
       </div>

       <button
        type="button"
        onClick={() => append({value:""})}
        className="bg-green-500 w-full px-2 py-2 text-white mt-2 mb-2 rounded-md font-semibold hover:bg-green-700"
      >
        Add more Teachers
      </button>

       <button type="submit" className='bg-sky-500 w-full px-2 py-2 text-white mt-2 mb-2 rounded-md font-semibold' >{type=="create"?"Create":"Update"}</button>
    </form>
  )
}

export default SubjectForm