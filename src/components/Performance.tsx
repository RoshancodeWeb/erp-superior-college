"use client"
import Image from 'next/image'
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 92,fill:"#C3EBFA" },
  { name: 'Group B', value: 8 ,fill:"#FAE27C"},
];

const Performance = () => {
  return (
    <div className='w-full  bg-white h-[300px] p-4 mt-4 relative'>
        <div className="w-full flex justify-between p-2 items-center">
        <p className="font-semibold text-lg">Performance</p>
        <Image src="/menu/menu.png" width="25" height="25" alt='' />
        </div>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart  >
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className='w-fit absolute top-1/2 left-1/2 -translate-x-1/2 text-center '>
         <h1 className='text-3xl font-bold '>9.2</h1>
         <p className='text-gray-500 text-xs'>10 max of TS</p>
      </div>
      <p className='absolute  top-[70%] w-full text-center -ml-4 h-fit '>1st Semester - 2nd Semester</p>

    </div>
  )
}

export default Performance