"use client"
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import ClassesForm from "./form/ClassForm";
import { role } from "@/lib/data";

const FormModel = ({
  data,
  id,
  type,
  table,
}: {
  data?:any;
  id?: number;
  type: "create" | "update" | "delete";
  table:
    | "teacher"
    | "student"
    | "announcement"
    | "event"
    | "parent"
    | "class"
    | "assignment"
    | "result"
    | "lesson"
    | "exam"
    | "subject";
}) => {
  const buttonCss= type=="create"?"w-8 h-8 bg-roshanYellow flex items-center justify-center rounded-full":type=="delete"?"w-8 h-8 bg-roshanPurple rounded-full flex items-center justify-center":"w-8 h-8 bg-roshanSky flex items-center justify-center rounded-full";
  const iconName=type=="create"?"/plus.png":type=="delete"?"/delete.png":"/edit.png";
  const  [open, setOpen] = useState(false);

  const heading=<h1 className="py-5 text-sm px-5">Loading....</h1>
  const TeacherForm= dynamic(()=>import("./form/TeacherForm"),{
    loading:()=>heading
  }) 

  const StudentForm= dynamic(()=>import("./form/StudentForm"),{
    loading:()=>heading
  }) 

  const ParentForm=dynamic(()=>import("./form/ParentForm"),{
    loading:()=>heading
  })

  const SubjectForm=dynamic(()=>import("./form/SubjectForm"),{
    loading:()=>heading
  })

  const ClassesForm=dynamic(()=>import("./form/ClassForm"),{
    loading:()=>heading
  })

  const LessonForm=dynamic(()=>import("./form/LessonForm"),{
    loading:()=>heading
  })

  const ExamForm=dynamic(()=>import("./form/ExamForm"),{
    loading:()=>heading
  })

  const AssignmentForm=dynamic(()=>import("./form/AssignmentForm"),{
    loading:()=>heading
  })
  const ResultForm=dynamic(()=>import("./form/ResultForm"),{
    loading:()=>heading
  })
  const EventForm=dynamic(()=>import("./form/EventForm"),{
    loading:()=>heading
  })
  const AnnouncementForm=dynamic(()=>import("./form/AnnouncementForm"),{
    loading:()=>heading
  })



  const forms:{
    [key:string]:(type:"create" | "update",data?:any)=>JSX.Element
  }={
    teacher:(type,data)=><TeacherForm  data={data}  type={type} />,
    student:(type,data)=><StudentForm data={data} type={type} />,
    parent:(type,data)=><ParentForm data={data}  type={type} />,
    subject:(type,data)=><SubjectForm data={data}  type={type} />,
    class:(type,data)=><ClassesForm data={data} type={type} />,
    lesson:(type,data)=><LessonForm data={data} type={type} />,
    exam:(type,data)=><ExamForm data={data} type={type} />,
    assignment:(type,data)=><AssignmentForm data={data} type={type} />,
    result:(type,data)=><ResultForm data={data} type={type} />,
    event:(type,data)=><EventForm data={data} type={type} />,
    announcement:(type,data)=><AnnouncementForm data={data} type={type} />,

  }

  const DeleteForm=()=>{
      return type=="delete" && id ?(
      <form className="px-4 flex flex-col items-center gap-5 py-10" action={""} >
      <p className="text-center text-sm ">Are you sure you want to delete?All data data will be lost from <span className="font-bold">{table}s</span></p>
      <button className="text-white bg-red-500 px-4 py-1 rounded font-semibold">Delete</button>
      </form>
    ):type=="create" || type=="update" ?(forms[table]?forms[table](type,data):<p className="px-4 py-4">Form Not Found</p>):<p className="px-4 py-4">Form Not Found</p>
  }

  return <>
     <button disabled={role=="student" || role=="teacher"?true:false} className={`${buttonCss} disabled:cursor-not-allowed disabled:opacity-70`} onClick={()=>setOpen(true)}>
         <Image src={iconName} width={16} height={16} alt=""  />
     </button>
     {open && 
     <div  className="w-screen min-h-screen bg-black bg-opacity-50 absolute top-0 left-0 flex items-start  md:items-center justify-center z-50 overflow-y-scroll">
          <div className="bg-white w-[90%] relative rounded-md md:w-[70%] lg:w-[60%] xl:w-[50%] mt-10 md:mt-0"> 
            <div className="w-fit  absolute right-4 top-4" onClick={()=>setOpen(false)}>
              <Image className="cursor-pointer" src={"/close.png"} alt="" width={15} height={15} />
            </div>
            <DeleteForm />
          </div>
     </div>}
      
  </>;
};

export default FormModel;
