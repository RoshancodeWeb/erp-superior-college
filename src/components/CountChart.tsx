"use client";
import Image from "next/image";
import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count:153,
    fill: "white",
  },
  {
    name: "Boys",
    count:53,
    fill: "#C3EBFA",
  },
  {
    name: "Girls",
    count:100,
    fill: "#FAE27C",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="w-full flex justify-between p-2">
        <p className="font-semibold text-lg">Students</p>
        <Image src="/menu/menu.png" alt='' width={40} height={40}  className='cursor-pointer'/>
      </div>
      <div className="relative w-full h-[72%]">
        <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            dataKey="count"
          />
        </RadialBarChart>
        </ResponsiveContainer>
        <Image src={"/maleFemale.png"} alt="maleFemale" width={50} height={50}  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
      </div>

      <div className="w-full flex justify-center gap-16 pb-2 ">
          <div  className="w-fit">
              <div className="w-5 h-5 bg-roshanSky rounded-full" />
              <p className="font-bold">1234</p>
              <p className="text-sm text-gray-500">Boys (45%)</p>
          </div>
          <div  className="w-fit">
              <div className="w-5 h-5 bg-roshanYellow rounded-full" />
              <p className="font-bold">1928</p>
              <p className="text-sm text-gray-500">Girls (55%)</p>
          </div>
      </div>
    </div>
  );
};

export default CountChart;
