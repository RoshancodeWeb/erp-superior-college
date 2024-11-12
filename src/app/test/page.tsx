import React from "react";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row">
        {/* Left */}
      <div className="w-full flex gap-4   flex-1 md:w-2/3 bg-yellow-300 ">
        <div className=" bg-red-500 w-[100px] h-[134px]"></div>
        <div className=" bg-red-500 w-[100px] h-[134px] "></div>
        <div className=" bg-red-500 w-[100px] h-[134px] "></div>
        <div className=" bg-red-500 w-[100px] h-[134px] "></div>
      </div>
        {/* Right */}
      <div className="w-full h-fit flex flex-wrap gap-4  md:w-1/3 ">
        <div className="flex-1 bg-red-500 min-w-[100px] h-[134px] flex-grow"></div>
        <div className="flex-1 bg-red-500 min-w-[100px] h-[134px] "></div>
        <div className="flex-1 bg-red-500 min-w-[100px] h-[134px] "></div>
        <div className="flex-1 bg-red-500 min-w-[100px] h-[134px] "></div>
      </div>
    </div>
  );
};

export default page;
