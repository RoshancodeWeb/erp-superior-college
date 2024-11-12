import Image from 'next/image'
import { Input } from 'postcss'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between  h-fit  py-3 px-2'>
         {/* SearchBar */}
         <div className='w-fit'>
            <div className='hidden md:flex items-center justify-center border-[2px] text-sm rounded-full py-2 pl-2  border-gray-400  '>
                 <Image src={"/search.png"} alt='' width={14}  height={14}/>
                 <input  type="text" placeholder="Search..." className="w-[200px] text-gray-500 px-2  bg-transparent outline-none" />
            </div>
             
         </div>

         {/* Icons */}
         <div className='w-full md:w-fit h-full  flex  items-center justify-end gap-3 md:gap-5 pr-2'>
             <div className='w-7 h-7 bg-white rounded-full flex items-center justify-center cursor-pointer'>
                  <Image src={"/message.png"} alt='' width={20} height={20}  />
             </div>
             <div className='w-7 h-7 bg-white rounded-full flex items-center justify-center relative cursor-pointer'>
                   <div className='bg-purple-800 flex items-center justify-center text-xs text-white w-5 h-5 absolute -top-3 -right-2 rounded-full'>1</div>
                  <Image src={"/announcement.png"} alt='' width={24} height={24}  />
             </div>
             <div className='flex flex-col text-sm leading-5'>
                <span className='font-bold'>Roshan Ali</span>
                <span className='text-gray-500 text-right'>Admin</span>
             </div>
                <Image src={"/avatar.png"} className='rounded-full' alt='' width={36} height={36}  />

         </div>
    </div>
  )
}

export default Navbar