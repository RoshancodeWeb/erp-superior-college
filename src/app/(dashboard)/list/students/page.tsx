import FormModel from '@/components/FormModel'
import Pagination from '@/components/Pagination'
import SearchBar from '@/components/SearchBar'
import Table from '@/components/Table'
import { role, studentsData, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Student={
    id: number,
    studentId: string,
    name: string,
    email: string,
    photo:string,
    phone: string,
    grade: number,
    class: string,
    address: string,
}




const columns=[
    {
        header:"info",accessor:"info",
    },
    {
        header:"StudentID",accessor:"StudentID",className:"hidden md:table-cell"
    },
    {
        header:"Grade",accessor:"Grade",className:"hidden md:table-cell"
    },
    {
        header:"Phone",accessor:"Phone",className:"hidden md:table-cell"
    },
    {
        header:"Address",accessor:"Address",className:"hidden lg:table-cell"
    },
    {
        header:"Actions",accessor:"Actions"
    }
]

const renderRow=(item:Student)=>(
    <tr key={item.id} className='even:bg-slate-50 text-sm hover:bg-roshanPurple border-b-2 border-gray-200'>
        <td className='flex gap-2 py-4'>
              <Image alt='photo' src={item.photo} width={40} height={40}  className="w-12 h-12   object-cover rounded-full hidden bbmd:block  lg:block"/>
              <div className=''>
                   <h1>{item.name}</h1>
                   <p>{item.class}</p>
              </div>
        </td>
        <td className='hidden md:table-cell '>
               <p className=' '>{item.studentId}</p>
        </td>
        <td className='hidden md:table-cell '>
               <p className=''>{item.grade}</p>
        </td>
        <td className='hidden md:table-cell'>
               <p>{item.phone}</p>
        </td>
        <td className='hidden lg:table-cell'>
               <p>{item.address}</p>
        </td>
        <td className=''>
            <div className='flex gap-2 items-center justify-center '>
                <Link href={`/list/students/${item.id}`} className="" >
                <button className='w-8 h-8 bg-roshanSky rounded-full flex items-center justify-center'>
                    <Image src={"/view.png"} alt='' width={20} height={20} />
                </button>
                </Link>
                <FormModel table='student' type="delete"  id={item.id} />

            </div>
            
        </td>

    </tr>
)

const StudentListPage = () => {
  return (
    <div className='w-full flex-1 bg-white p-4 mt-4 rounded-md'>
        {/* Top */}
        <div className='w-full md:flex  md:items-center md:justify-between'>
            <h1 className='hidden md:block md:font-bold'>All Students</h1>
            <div className='w-full  h-fit flex flex-col md:w-fit md:flex-row md:items-center gap-2'>
                 <SearchBar/>
                 <div className='flex gap-2 justify-end'>
                     <button className='w-8 h-8 bg-roshanYellow flex items-center justify-center rounded-full'>
                          <Image src="/filter.png" alt="Filter" width="15" height="15" />
                      </button>
                      <button className='w-8 h-8 bg-roshanYellow flex items-center justify-center rounded-full'>
                          <Image src="/sort.png" alt="Sort" width="15" height="15" />
                      </button>
                      <FormModel table='student' type="create"/>
                 </div>
            </div>
        </div>
        {/* Tables */}
            <Table columns={columns} data={studentsData} renderRow={renderRow}/>
        {/*Pagination*/}
        <Pagination/>



    </div>
  )
}

export default StudentListPage