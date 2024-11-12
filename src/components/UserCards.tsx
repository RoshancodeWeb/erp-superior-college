import Image from 'next/image'
import React from 'react'

const UserCards = ({type}:{type:string}) => {
  return (
    <div className='w-full h-fit flex flex-col gap-4 odd:bg-roshanPurple even:bg-roshanYellow flex-1 min-w-[140px] rounded-xl py-2 px-3'>
          <div className='w-full flex justify-between'>
             <p className='w-fit rounded-full text-xs text-green-500 bg-white p-2'>2024/7/13</p>
             <Image src="/menu/three-dot-menu.png" className='cursor-pointer'  width="30" height="30" alt="more" />
           </div>
           <div className='text-2xl font-semibold'>1920</div>
           <p className='text-sm text-gray-500'>{type}</p>


    </div>
  )
}

export default UserCards