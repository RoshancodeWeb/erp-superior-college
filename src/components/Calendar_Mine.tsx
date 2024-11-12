"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type event = {
  id: number;
  title: string;
  time: string;
  description: string;
};

const events: event[] = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const CalendarMine = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="w-full h-fit bg-white rounded-md p-4 mt-4">
      <Calendar onChange={onChange} value={value} />
      <div className="w-full h-fit">
        <div className="w-full flex justify-between p-2 pt-5">
          <p className="font-semibold text-lg">Events</p>
          <Image
            src="/menu/menu.png"
            alt=""
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>
        {events.map((e:event,index)=>
           <div key={index} className="w-full  border-2 border-gray-200 border-t-4 odd:border-t-roshanSky even:border-t-roshanPurple mt-2 rounded flex flex-col gap-2 px-1 py-2">
              <div className="w-full flex justify-between items-center">
                  <h1 className="text-sm font-bold text-gray-600">{e.title}</h1>
                  <span className="text-xs text-gray-300">{e.time}</span>
              </div>
              <p className="text-sm text-gray-500">{e.description}</p>
           </div> 
        )}

      </div>
    </div>
  );
};

export default CalendarMine;
