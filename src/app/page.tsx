"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { resolve } from "path";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Homepage = () => {
  const router=useRouter();
  const schema=z.object({
    username:z
    .string()
    .min(3,{message:"Username must be at least 3 characters long"}),
    password:z
    .string()
    .min(8,"Password must be 8 characters long!"),
    type:z.enum(["admin","teacher","student"],{message:"User type is required!"})
  });


  const submit=async(data:any)=>{
    
      
    await new Promise(resolve=>setTimeout(resolve,3000));
    router.push(`/${data.type}`);
     
  }
  const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm({
    resolver:zodResolver(schema),

  });
  return (
    <div onSubmit={handleSubmit(submit)} className="w-full h-screen bg-roshanSkyLight flex items-center justify-center">
      <div className="w-[280px] h-fit pb-2 md:w-[350px] bg-white rounded-md  shadow-roshanShadow">
        <div className="w-full h-fit flex items-center gap-1 p-4">
          <Image
            className=""
            src="/logo.png"
            alt="logo"
            width={25}
            height={25}
          />
          <p className="text-lg font-bold ">Superior_erp</p>
        </div>
        <p className="text-sm text-gray-500 px-4 py-2">
          Sign in to your account
        </p>
        <form className="w-full  px-4 flex flex-col gap-2">
          <div className="w-full h-fit flex flex-col gap-1">
            <label htmlFor="username" className="text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="border-[1px] px-2 py-2 rounded-md border-gray-500 outline-none"
              placeholder="Username"
              {...register('username')}
            />
            <p className="text-sm text-red-500">{errors.username?.message?.toString()}</p>
          </div>
          <div className=" w-full h-fit flex flex-col gap-1">
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="border-[1px] px-2 py-2 rounded-md border-gray-500 outline-none"
              placeholder="Password"
              {...register("password")}
            />
            <p className="text-sm text-red-500">{errors.password?.message?.toString()}</p>
          </div>

          <div className="w-full h-fit flex flex-col gap-1">
            <label className="text-gray-500 text-sm">Type</label>
            <select
              className="border-[1px] px-2 py-2 rounded-md border-gray-500 outline-none"
              {...register("type")}
            >
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
            <p className="text-sm text-red-500">{errors.type?.message?.toString()}</p>
          </div>

          <button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:scale-95 transition-all  disabled:bg-gray-500 disabled:cursor-not-allowed text-sm text-white px-2 py-4 rounded-md">Sign In</button>

        </form>
      </div>
    </div>
  );
};

export default Homepage;
