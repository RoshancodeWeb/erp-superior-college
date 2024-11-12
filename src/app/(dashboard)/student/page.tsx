import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import CalendarMine from "@/components/Calendar_Mine";
import React from "react";

const Student = () => {
  return (
    <div className="w-full h-fit flex flex-col xl:flex-row gap-4 pl-4">
      {/* Left */}
      <div className="bigcalender w-[100%] overflow-hidden overflow-x-scroll   xl:w-2/3 bg-white rounded-md mt-4 ">
          <h1 className="font-bold p-4">Schedule(4A)</h1>
          <BigCalender/>
      </div>

      {/* Right */}
      <div className="w-[100%]  xl:w-1/3 flex flex-col gap-8">
        <CalendarMine />
        <Announcements />
      </div>
    </div>
  );
};

export default Student;
