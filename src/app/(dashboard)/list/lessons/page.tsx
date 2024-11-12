import FormModel from '@/components/FormModel'
import Pagination from '@/components/Pagination'
import SearchBar from '@/components/SearchBar'
import Table from '@/components/Table'
import { classesData, lessonsData, parentsData, role, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Lesson={
    id: number,
    subject: string,
    class: string,
    teacher:string,
 
}







const columns=[
    {
        header:"Subject Name",accessor:"subject",
    },
    {
        header:"Class",accessor:"class",className:"hidden md:table-cell"
    },
    {
        header:"Teacher",accessor:"teachet",className:"hidden md:table-cell"
    },
    {
        header:"Actions",accessor:"Actions"
    }
]

const renderRow=(item:Lesson)=>(
    <tr key={item.id} className='even:bg-slate-50 text-sm hover:bg-roshanPurple border-b-2 border-gray-200'>
        <td className='flex gap-2 py-4'>
              <div className=''>
                   <h1>{item.subject}</h1>
              </div>
        </td>
        <td className='hidden md:table-cell '>
               <p className=' '>{item.class}</p>
        </td>
        <td className='hidden md:table-cell '>
               <p className=''>{item.teacher}</p>
        </td>
        <td className=''>
            <div className='flex gap-2 items-center justify-center '>
                <FormModel table='lesson' type="update"  id={item.id} data={item} />
                <FormModel table='lesson' type="delete"  id={item.id} />
            </div>
            
        </td>

    </tr>
)

const LessonListPage = () => {
  return (
    <div className='w-full flex-1 bg-white p-4 mt-4 rounded-md'>
        {/* Top */}
        <div className='w-full md:flex  md:items-center md:justify-between'>
            <h1 className='hidden md:block md:font-bold'>All Lessons</h1>
            <div className='w-full  h-fit flex flex-col md:w-fit md:flex-row md:items-center gap-2'>
                 <SearchBar/>
                 <div className='flex gap-2 justify-end'>
                     <button className='w-8 h-8 bg-roshanYellow flex items-center justify-center rounded-full'>
                          <Image src="/filter.png" alt="Filter" width="15" height="15" />
                      </button>
                      <button className='w-8 h-8 bg-roshanYellow flex items-center justify-center rounded-full'>
                          <Image src="/sort.png" alt="Sort" width="15" height="15" />
                      </button>
                      <FormModel table='lesson' type="create"  />
                 </div>
            </div>
        </div>
        {/* Tables */}
            <Table columns={columns} data={lessonsData} renderRow={renderRow}/>
        {/*Pagination*/}
        <Pagination/>



    </div>
  )
}

export default LessonListPage