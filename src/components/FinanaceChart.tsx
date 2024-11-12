"use client"
import Image from "next/image";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expenses: 2400,

  },
  {
    name: 'Feb',
    income: 3000,
    expenses: 1398,

  },
  {
    name: 'Mar',
    income: 2000,
    expenses: 9800,

  },
  {
    name: 'Apr',
    income: 2780,
    expenses: 3908,

  },
  {
    name: 'May',
    income: 1890,
    expenses: 4800,

  },
  {
    name: 'June',
    income: 2390,
    expenses: 3800,

  },
  {
    name: 'July',
    income: 3490,
    expenses: 4300,

  },
  {
    name: 'Aug',
    income: 3490,
    expenses: 4300,
 
  },
  {
    name: 'Sep',
    income: 3490,
    expenses: 4300,
 
  },
  {
    name: 'Oct',
    income: 3490,
    expenses: 4300,
   
  },
  {
    name: 'Nov',
    income: 3490,
    expenses: 4300,
  
  },
  {
    name: 'Dec',
    income: 3490,
    expenses: 4300,
    
  },
];


const FinanaceChart = () => {
  return (
    <div className="w-full h-full bg-white rounded-md">
      <div className="w-full flex justify-between p-2">
        <p className="font-semibold text-lg">Finance</p>
        <Image
          src="/menu/menu.png"
          alt=""
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={44}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false}  tick={{ fill: '#d1d5db' }} tickLine={false} tickMargin={10} />

          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
          <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}}/>
          <Legend align="center" verticalAlign="top" wrapperStyle={{paddingBottom:"20px",paddingTop:"20px"}} />
          <Line legendType="circle"  type="monotone" dataKey="income" stroke="#C3EBFA" activeDot={{ r: 8 }} strokeWidth={5} />
          <Line legendType="circle" type="monotone" dataKey="expenses" stroke="#FAE27C" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanaceChart;
