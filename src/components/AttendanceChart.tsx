"use client"
import Image from 'next/image'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 65,
    absent: 75,
 
  },
  {
    name: 'Tue',
    present: 75,
    absent: 62,
 
  },
  {
    name: 'Wed',
    present: 32,
    absent: 90
  },
  {
    name: 'Thus',
    present: 78,
    absent: 64,
 
  },
  {
    name: 'Fri',
    present: 92,
    absent: 50,

  }
];

const AttendanceChart = () => {
  return (
    <div className='w-full h-full'>
       <div className='w-full justify-between flex p-2 '>
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/menu/menu.png" alt='' width={40} height={40}  className='cursor-pointer'/>
       </div>
       {/* <div className='w-full flex '>
          <div className='w-fit flex justify-center items-center gap-2 px-2'>
              <div className='w-5 h-5 bg-roshanSky rounded-full' />
              <h1 className='text-lg text-roshanSky'>present</h1>
          </div>
          <div className='w-fit flex justify-center items-center gap-2 px-2'>
              <div className='w-5 h-5 bg-roshanYellow rounded-full' />
              <h1 className='text-lg text-roshanYellow'>present</h1>
          </div>
       </div> */}
       <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingBottom:"20px",paddingTop:"20px"}} />
          <Bar radius={[10,10,0,0]} legendType='circle' dataKey="present" fill="#C3EBFA"  />
          <Bar radius={[10,10,0,0]} legendType='circle' dataKey="absent" fill="#FAE27C"  />
        </BarChart>
      </ResponsiveContainer>



    </div>
  )
}

export default AttendanceChart