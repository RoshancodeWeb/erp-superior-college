import Image from 'next/image'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-auto'>
            <div className='w-full flex items-center justify-center border-[2px] text-sm rounded-full py-2 pl-4  border-gray-400  '>
                 <Image src={"/search.png"} alt='' width={14}  height={14}/>
                 <input  type="text" placeholder="Search..." className="w-full text-gray-500 px-2  bg-transparent outline-none" />
            </div>
             
         </div>
  )
}

export default SearchBar