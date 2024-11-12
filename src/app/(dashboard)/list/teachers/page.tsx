import FormModel from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import Table from "@/components/Table";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "info",
    accessor: "info",
  },
  {
    header: "TeacherID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const renderRow = (item: Teacher) => (
  <tr
    key={item.id}
    className="even:bg-slate-50 text-sm hover:bg-roshanPurple border-b-2 border-gray-200"
  >
    <td className="flex gap-2 py-4">
      <Image
        alt="photo"
        src={item.photo}
        width={40}
        height={40}
        className="w-12 h-12   object-cover rounded-full hidden bbmd:block  md:hidden lg:block"
      />
      <div className="">
        <h1>{item.name}</h1>
        <p>{item.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell ">
      <p className=" ">{item.teacherId}</p>
    </td>
    <td className="hidden md:table-cell ">
      <p className="">{item.subjects.join(",")}</p>
    </td>
    <td className="hidden md:table-cell">
      <p>{item.classes.join(",")}</p>
    </td>
    <td className="hidden lg:table-cell">
      <p>{item.phone}</p>
    </td>
    <td className="hidden lg:table-cell">
      <p>{item.address}</p>
    </td>
    <td className="">
      <div className="flex gap-2 items-center justify-center ">
        <Link href={`/list/teachers/${item.id}`} className="">
          <button className="w-8 h-8 bg-roshanSky rounded-full flex items-center justify-center">
            <Image src={"/view.png"} alt="" width={20} height={20} />
          </button>
        </Link>
          <FormModel table="teacher" type="delete" id={item.id} />
      </div>
    </td>
  </tr>
);

const TeachersPage = () => {
  return (
    <div className="w-full flex-1 bg-white p-4 mt-4 rounded-md">
      {/* Top */}
      <div className="w-full md:flex  md:items-center md:justify-between">
        <h1 className="hidden md:block md:font-bold">All Teachers</h1>
        <div className="w-full  h-fit flex flex-col md:w-fit md:flex-row md:items-center gap-2">
          <SearchBar />
          <div className="flex gap-2 justify-end">
            <button className="w-8 h-8 bg-roshanYellow flex items-center justify-center rounded-full">
              <Image src="/filter.png" alt="Filter" width="15" height="15" />
            </button>
            <button className="w-8 h-8 bg-roshanYellow flex items-center justify-center rounded-full">
              <Image src="/sort.png" alt="Sort" width="15" height="15" />
            </button>
            <FormModel table="teacher" type="create" />
          </div>
        </div>
      </div>
      {/* Tables */}
      <Table columns={columns} data={teachersData} renderRow={renderRow} />
      {/*Pagination*/}
      <Pagination />
    </div>
  );
};

export default TeachersPage;
