import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CalendarMine from "@/components/Calendar_Mine";
import CountChart from "@/components/CountChart";
import FinanaceChart from "@/components/FinanaceChart";
import UserCards from "@/components/UserCards";
import React from "react";

const Admin = () => {
  return (
    <div className="w-full h-fit flex flex-col md:flex-row gap-4">
      {/* Left */}
      <div className="w-[100%] md:w-[55%] lg:w-[65%]">
        <div className="w-full h-fit flex flex-wrap gap-4 px-2 py-4">
          <UserCards type={"teachers"} />
          <UserCards type={"Students"} />
          <UserCards type={"Staff"} />
          <UserCards type={"Parents"} />
        </div>
        {/* Middle Charts */}
        <div className="w-full h-fit flex flex-col lg:flex-row gap-4 px-2">
          {/* Left Chart  */}
          <div className="w-full lg:w-[45%] h-[350px] bg-white rounded-xl  ">
            <CountChart />
          </div>
          {/* Right Chart  */}
          <div className="w-full lg:w-[55%] h-[350px]  bg-white rounded-xl">
            <AttendanceChart/>
          </div>
        </div>
        <div className="w-full h-[500px] px-2 py-2">
             <FinanaceChart />
        </div>
      </div>

      {/* Right */}
      <div className="w-[100%] md:w-[45%] lg:w-[35%] h-[100vh] flex flex-col gap-8">
          <CalendarMine/>
          <Announcements/>
      </div>
    </div>
  );
};

export default Admin;
