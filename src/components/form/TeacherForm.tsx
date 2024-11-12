import { zodResolver } from '@hookform/resolvers/zod';

import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';
import Image from 'next/image';


const MAX_FILE_SIZE = 100000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const schema = z.object({
    username: z
    .string()
    .min(3, { message: 'Username must be 3 characters long' })
    .max(20, { message: 'Username must be 20 characters long!' }),
    email: z
    .string()
    .email({message:"Invalid Email Address!"}),
    password:z
    .string()
    .min(8,{message:"Password should be 8 characters long"}),
    firstName:z
    .string()
    .min(1,{message:"FirstName is required!"}),
    lastName:z
    .string()
    .min(1,{message:"lastName is required!"}),
    bloodType:z
    .string()
    .min(1,{message:"Blood Type is required!"}),
    phone:z
    .string()
    .min(10,{message:"Phone Number is incomplete !"}),
    address:z.
    string()
    .min(1,{message:"Adress is required!"}),
    birthDate:z
    .string()
    .min(1, { message: "BirthDate is required!" }),
    sex:z
    .enum(["male","female"],{message:"Sex is required!"}),
    image: z
    .any()
    .refine(files=>files.length==1,{message:"Image is required"})
    .refine((files)=>files?.[0]?.size<=MAX_FILE_SIZE,"Max file size should be 1MB")
    .refine((files)=>ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),".jpg, .jpeg, .png and .webp files are accepted."),

});

type Input=z.infer<typeof schema>

const TeacherForm = ({type,data}:{type:"create" | "update",data?:any}) => {
 
  const {register,handleSubmit,formState:{errors}}=useForm<Input>({resolver:zodResolver(schema)});
  
  const submit=(data:any)=>{
     console.log(data);
  }
  return (
    <form action={""} onSubmit={handleSubmit(submit)} className='w-full  px-4  '>
       <h1 className='text-xl font-bold  py-2'>
           Create a new teacher
       </h1>
       <h1 className='text-gray-500 text-sm  py-2'>Authentication Information</h1>
       <div className='w-full h-fit flex flex-wrap justify-between gap-2'>
         {/* Place Fields Here */}
         <InputField label="Username" type="text" defaultValue={data?.username} name={"username"} error={errors.username} register={register} />
         <InputField label="Email" type="email" defaultValue={data?.email} name={"email"} error={errors.email} register={register} />
         <InputField label="Password" type="password" defaultValue={data?.password} name={"password"} error={errors.password} register={register} />
       </div>
       <h1 className='text-gray-500 text-sm  py-4 '>Personal Information</h1>
       <div className='w-full h-fit flex flex-wrap justify-between gap-2'>
         {/* Place Fields Here */}
         <InputField label="FirstName" type="text" defaultValue={data?.firstName} name={"firstName"} error={errors.firstName} register={register} />
         <InputField label="LastName" type="text" defaultValue={data?.lastName} name={"lastName"} error={errors.lastName} register={register} />
         <InputField label="Phone" type="text" defaultValue={data?.phone} name={"phone"} error={errors.phone} register={register} />
         <InputField label="Address" type="text" defaultValue={data?.address} name={"address"} error={errors.address} register={register} />
         <InputField label="Blood Type" type="text" defaultValue={data?.bloodType} name={"bloodType"} error={errors.bloodType} register={register} />
         <InputField label="Birth Date" type="date" defaultValue={data?.birthDate} name={"birthDate"} error={errors.birthDate} register={register} />
         <div className='w-full md:w-[30%] flex flex-col'>
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

        <div className='w-full md:w-[30%] flex flex-col'>
             <label htmlFor='image' className='text-gray-500 text-sm flex  justify-end pt-5 items-center gap-2 flex-row-reverse'>Upload Image<Image src="/upload.png" alt="" width="40" height="40" /></label>
             
             <input id="image" className="outline-none border-[1px] hidden border-gray-300 px-2 py-2 rounded-md" type="file" placeholder='' defaultValue={data?.image} {...register("image")}  />
             {errors?.image?.message && <p className='text-sm text-red-500'>{errors?.image?.message.toString()}</p>}

        </div>

       </div>

       <button type="submit" className='bg-sky-500 w-full px-2 py-2 text-white mt-2 mb-2 rounded-md font-semibold' >{type=="create"?"Create":"Update"}</button>
    </form>
  )
}

export default TeacherForm