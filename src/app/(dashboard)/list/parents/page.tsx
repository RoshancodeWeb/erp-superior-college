import FormModel from '@/components/FormModel'
import Pagination from '@/components/Pagination'
import SearchBar from '@/components/SearchBar'
import Table from '@/components/Table'
import { parentsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Parent={
    id: number,
    students: string[],
    name: string,
    email?: string,
    phone: string,
    address: string,
}


const columns=[
    {
        header:"info",accessor:"info",
    },
    {
        header:"Student Name",accessor:"Student Name",className:"hidden md:table-cell"
    },
    {
        header:"Phone",accessor:"phone",className:"hidden md:table-cell"
    },
    {
        header:"Address",accessor:"Address",className:"hidden md:table-cell"
    },
    {
        header:"Actions",accessor:"Actions"
    }
]

const renderRow=(item:Parent)=>(
    <tr key={item.id} className='even:bg-slate-50 text-sm hover:bg-roshanPurple border-b-2 border-gray-200'>
        <td className='flex gap-2 py-4'>
              <div className=''>
                   <h1>{item.name}</h1>
                   <p>{item.email}</p>
              </div>
        </td>
        <td className='hidden md:table-cell '>
               <p className=' '>{item.students.join(",")}</p>
        </td>
        <td className='hidden md:table-cell '>
               <p className=''>{item.phone}</p>
        </td>
        <td className='hidden md:table-cell'>
               <p>{item.address}</p>
        </td>
        <td className=''>
            <div className='flex gap-2 items-center justify-center '>
              
                <FormModel table='parent' type="update"  id={item.id} data={item} />
                <FormModel table='parent' type="delete"  id={item.id} />
            </div>
            
        </td>

    </tr>
)

const ParentListPage = () => {
  return (
    <div className='w-full flex-1 bg-white p-4 mt-4 rounded-md'>
        {/* Top */}
        <div className='w-full md:flex  md:items-center md:justify-between'>
            <h1 className='hidden md:block md:font-bold'>All Parents</h1>
            <div className='w-full  h-fit flex flex-col md:w-fit md:flex-row md:items-center gap-2'>
                 <SearchBar/>
                 <div className='flex gap-2 justify-end'>
                     <button className='w-8 h-8 bg-roshanYellow flex items-center justify-center rounded-full'>
                          <Image src="/filter.png" alt="Filter" width="15" height="15" />
                      </button>
                      <button className='w-8 h-8 bg-roshanYellow flex items-center justify-center rounded-full'>
                          <Image src="/sort.png" alt="Sort" width="15" height="15" />
                      </button>
                      <FormModel table='parent' type="create"  />
                 </div>
            </div>
        </div>
        {/* Tables */}
            <Table columns={columns} data={parentsData} renderRow={renderRow}/>
        {/*Pagination*/}
        <Pagination/>



    </div>
  )
}

export default ParentListPage