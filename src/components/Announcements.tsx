import React from 'react'

type announce = {
    id: number;
    title: string;
    time: string;
    description: string;
  };
  
  const announcement: announce[] = [
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
  ]


const Announcements = () => {
  return (
    <div className='w-full h-fit bg-white mt-4 px-4 pb-5'>
        <div className="w-full flex justify-between p-2 items-center">
        <p className="font-semibold text-lg">Announcements</p>
        <p className='text-xs text-gray-300 cursor-pointer'>View All</p>
        </div>

        {announcement.map((a:announce,index:number)=>
           <div key={index} className="w-full  odd:bg-roshanSkyLight even:bg-roshanYellowLight mt-2 rounded flex flex-col gap-2 px-1 py-2">
           <div className="w-full flex justify-between items-center">
               <h1 className="text-sm font-bold text-gray-600">{a.title}</h1>
               <span className="text-xs text-gray-300 bg-white p-2 rounded">{a.time}</span>
           </div>
           <p className="text-sm text-gray-500">{a.description}</p>
        </div> 
        )}
    </div>
  )
}

export default Announcements