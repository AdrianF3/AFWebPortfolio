import React from 'react'

export default function BillSplitExplainer() {
  return (
    <>
    <section className='flex flex-col md:flex-row justify-evenly bg-slate-400 p-4'>
        <div className='w-8/12 p-4'>
        <h2 className='text-2xl'>Bill Splitting Project</h2>
        <p className='py-2'>
            I wanted to create a simple project that allowed me to implement some more advanced programming functionality, specifically using some of the React Hooks
            to manage app data & state.
        </p>
        <div className='px-4'>
            <ul>
            <li>useState: </li>
            <li>useReducer: </li>
            <li></li>
            </ul>
        </div>            
        </div>
        <div className='border-2 border-dashed p-4 mt-6'>
        <h4 className='text-xl uppercase'>Instructions:</h4>
        <p className='text-xl py-2'>Guess the daily high and low for major cities</p>
        <p className='text-xl py-2'>sdfshflksdfnsdlkfjhsfhsfs</p>
        </div>
    </section>
    </>
  )
}
