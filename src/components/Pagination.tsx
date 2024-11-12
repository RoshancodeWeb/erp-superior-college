import React from 'react'

const Pagination = () => {
  return (
    <div className='w-full flex justify-center bmd:justify-between items-center text-gray-500 pt-5 flex-wrap gap-2'>
            <button disabled className='px-4 py-2 bg-gray-200 text-xs rounded disabled:opacity-50 disabled:cursor-not-allowed'>
                 Prev
            </button>
 
             <div className='flex justify-center items-center'>
                 <button className='px-3 py-1 h-fit rounded-sm bg-roshanSky text-xs'>
                    1
                 </button>
                 <button className='px-3 py-1 h-fit rounded-sm  text-xs'>
                    2
                 </button>
                 <button className='px-3 py-1 h-fit rounded-sm  text-xs'>
                    3
                 </button>
                 ...
                 <button className='px-3 py-1 h-fit rounded-sm  text-xs'>
                    10
                 </button>
             </div>
               

            <button  className='px-4 py-2 bg-gray-200 text-xs rounded '>
                 Next
            </button>
        </div>
  )
}

export default Pagination