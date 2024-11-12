"use client"
import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import FormModel from "@/components/FormModel";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleStudent = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row gap-4">
      {/* Left */}
      <div className="w-full flex flex-col xl:w-2/3 gap-4">

      <div className="w-full flex flex-col  gap-2 xl:flex-row">
        {/* User Info */}
        <div className="w-full flex bg-roshanSky rounded-md gap-2 py-2 px-1 md:py-4 md:px-2 xl:w-2/3 xl:h-fit" >
          <div className="w-[45%] h-fit bbmd:w-fit md:px-5 xl:px-1">
            <Image
              src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={80}
              height={80}
              className="w-24 h-24 md:w-36 md:h-36 rounded-full object-cover object-center"
            />
          </div>
          <div className="w-[55%] flex-1 bbmd:w-full md:flex md:flex-col md:gap-3">
          <h1 className="text-lg font-semibold  md:text-xl flex ">
                Roshan Ali
                <span>
                  <FormModel
                    type="update"
                    table="student"
                    data={{
                      username: "student01",
                      email: "student01@example.com",
                      password: "securePassword123",
                      firstName: "John",
                      lastName: "Doe",
                      bloodType: "O+",
                      phone: "1234567890",
                      address: "123 Main St, Springfield, USA",
                      birthDate: "1985-05-15",
                      sex: "male",
                     //  image: new File([""], "profile.png", {
                     //    type: "image/png",
                     //  }),
                    }}
                  />
                </span>
              </h1>
              <p className="text-sm text-gray-500 ">Lorem Ipism color description is very good to have</p>
              <div className="flex  md:flex-row gap-1 flex-wrap md:gap-4">
                   <div className="w-full md:w-[45%]  flex gap-1 items-center">
                      <Image src={"/blood.png"} alt="" width={15} height={15}  />
                      <span className="text-xs md:text-sm">A+</span>
                   </div>
                   <div className="w-full md:w-[45%]  flex gap-1 items-center">
                      <Image src={"/date.png"} alt="" width={15} height={15}  />
                      <span className="text-xs md:text-sm">January 2025</span>
                   </div>
                   <div className="w-full md:w-[45%]  flex gap-1 items-center overflow-hidden">
                      <Image src={"/mail.png"} alt="" width={15} height={15}  />
                      <span className="text-xs md:text-sm">roshanail7613@gmail.com</span>
                   </div>
                   <div className="w-full md:w-[45%]  flex gap-1 items-center">
                      <Image src={"/phone.png"} alt="" width={15} height={15}  />
                      <span className="text-xs md:text-sm">+ 12 234 5678</span>
                   </div>
              </div>
          </div>
        </div>
        {/* User Cards */}
        <div className="w-full flex flex-row flex-wrap gap-2 xl:w-1/3">
           <div className="w-full bg-white flex gap-2 items-center px-2 py-4  xl:w-[48%]">
               <Image src={"/singleAttendance.png"} alt="" width={20} height={20} />
               <div className="">
                  <h1 className="text-lg font-semibold">90%</h1>
                  <p className="text-sm text-gray-500 xl:text-xs">Attendance</p>
               </div>
           </div>
           <div className="w-full bg-white flex gap-2 items-center px-2 py-4  xl:w-[48%]">
               <Image src={"/singleBranch.png"} alt="" width={20} height={20} />
               <div className="">
                  <h1 className="text-lg font-semibold">6th</h1>
                  <p className="text-sm text-gray-500 xl:text-xs">Grade</p>
               </div>

           </div>
           <div className="w-full bg-white flex gap-2 items-center px-2 py-4  xl:w-[48%]">
               <Image src={"/singleLesson.png"} alt="" width={20} height={20} />
               <div className="">
                  <h1 className="text-lg font-semibold">18</h1>
                  <p className="text-sm text-gray-500 xl:text-xs">Lessons</p>
               </div>

           </div>
           <div className="w-full bg-white flex gap-2 items-center px-2 py-4  xl:w-[48%]">
               <Image src={"/singleAttendance.png"} alt="" width={20} height={20} />
               <div className="">
                  <h1 className="text-lg font-semibold">5A</h1>
                  <p className="text-sm text-gray-500 xl:text-xs">Class</p>
               </div>
           </div>
      </div>
      </div>
      <div className="w-full  h-[580px] bg-white overflow-y-scroll bigcalender">
        <h1 className="text-lg font-semibold md:text-xl p-4">Students&apos;s Schedule</h1>
        <BigCalender/>
      </div>    

      </div>
      
      {/* Right */}
      <div className="w-full xl:w-1/3">
        <div className="w-full h-fit bg-white rounded-md p-4">
        <h1 className="text-lg font-semibold md:text-xl py-2">Shortcuts</h1>
         <div className="w-full flex flex-wrap gap-2">
            <Link href="/" className="w-fit px-3 py-2  rounded-md  text-sm text-gray-500 bg-roshanSkyLight" >Student&apos;s Teachers</Link>
            <Link href="/" className="w-fit px-3 py-2  rounded-md  text-sm text-gray-500 bg-roshanPurpleLight" >Student&apos;s Lessons</Link>
            <Link href="/" className="w-fit px-3 py-2  rounded-md  text-sm text-gray-500 bg-roshanYellowLight" >Student&apos;s Exams</Link>
            <Link href="/" className="w-fit px-3 py-2  rounded-md  text-sm text-gray-500 bg-pink-50" >Student&apos;s Results</Link>
            <Link href="/" className="w-fit px-3 py-2  rounded-md  text-sm text-gray-500 bg-roshanSkyLight" >Student&apos;s Assignments</Link>
         </div>
        </div>
        <Performance/>
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudent;
