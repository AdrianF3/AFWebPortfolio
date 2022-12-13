import React from 'react'

export default function LoadingDiv() {
  return (
    <>

    <div className='flex flex-col w-max h-96 m-auto'>
        {/* spinning div */}
        <div className='bg-slate-200 border-b-2 border-sky-800 rounded-full animate-spin h-10 w-10 m-auto'></div>
        {/* loading text */}
        <p className='m-auto text-2xl'>Loading Weather Data...</p>
    </div>
    </>
  )
}
