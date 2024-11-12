import FormModel from '@/components/FormModel'
import Pagination from '@/components/Pagination'
import SearchBar from '@/components/SearchBar'
import Table from '@/components/Table'
import { resultsData, role, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Result={
        id: number,
        subject: string,
        class: string,
        teacher: string,
        student: string,
        date: string,
        type:"exam"|"assignment",
        score: number,
}


const columns=[
    {
        header:"Subject",accessor:"subject",
    },
    {
        header:"Student",accessor:"student",className:"hidden md:table-cell"
    },
    {
        header:"Score",accessor:"Score",className:"hidden md:table-cell"
    },
    {
        header:"Teacher",accessor:"Teacher",className:"hidden md:table-cell"
    },
    {
        header:"Class",accessor:"Class",className:"hidden lg:table-cell"
    },
    {
        header:"Date",accessor:"Date",className:"hidden lg:table-cell"
    },
    {
        header:"Type",accessor:"type",className:"hidden lg:table-cell"
    },
    {
        header:"Actions",accessor:"actions"
    }
]

const renderRow=(item:Result)=>(
    <tr key={item.id} className='even:bg-slate-50 text-sm hover:bg-roshanPurple border-b-2 border-gray-200'>
        <td className='flex gap-2 py-4'>
              <div className=''>
                   <h1>{item.subject}</h1>
              </div>
        </td>
        <td className='hidden md:table-cell '>
               <p className=' '>{item.student}</p>
        </td>
        <td className='hidden md:table-cell '>
               <p className=''>{item.score}</p>
        </td>
        <td className='hidden md:table-cell'>
               <p>{item.teacher}</p>
        </td>
        <td className='hidden lg:table-cell'>
               <p>{item.class}</p>
        </td>
        <td className='hidden lg:table-cell'>
               <p>{item.date}</p>
        </td>
        <td className='hidden lg:table-cell'>
               <p>{item.type}</p>
        </td>
        <td className=''>
            <div className='flex gap-2 items-center justify-center '>
                     <FormModel table='result' type="update"  id={item.id} data={item} />
                     <FormModel table='result' type="delete"  id={item.id} />

            </div>
            
        </td>

    </tr>
)

const TeachersPage = () => {
  return (
    <div className='w-full flex-1 bg-white p-4 mt-4 rounded-md'>
        {/* Top */}
        <div className='w-full md:flex  md:items-center md:justify-between'>
            <h1 className='hidden md:block md:font-bold'>All Results</h1>
            <div className='w-full  h-fit flex flex-col md:w-fit md:flex-row md:items-center gap-2'>
                 <SearchBar/>
                 <div className='flex gap-2 justify-end'>
                     <button className='w-8 h-8 bg-roshanYellow flex items-center justify-center rounded-full'>
                          <Image src="/filter.png" alt="Filter" width="15" height="15" />
                      </button>
                      <button className='w-8 h-8 bg-roshanYellow flex items-center justify-center rounded-full'>
                          <Image src="/sort.png" alt="Sort" width="15" height="15" />
                      </button>
                      <FormModel table='result' type="create"  />
                 </div>
            </div>
        </div>
        {/* Tables */}
            <Table columns={columns} data={resultsData} renderRow={renderRow}/>
        {/*Pagination*/}
        <Pagination/>



    </div>
  )
}

export default TeachersPage