import React from 'react'

export default function BillSplitExplainer() {
  return (
    <>
    <section className='flex flex-col md:flex-row justify-evenly bg-slate-400 p-4'>
        <div className='w-full p-4'>
        <h2 className='text-2xl uppercase text-center underline underline-offset-2'>Bill Splitting Project</h2>
        <p className='py-2 text-lg'>
            I wanted to create something that allowed me to design & implement something slightly more advanced. This 'app' was built using the <span className='font-bold'>useReducer</span> and 
            <span className='font-bold'> useState</span> hooks.
        </p>

        <p className='py-2 text-lg'>
          I decided to create <span className='font-bold'>my own custom hook, useBillSplitApp.js</span>, in order to manage the application state and the functions that are called as the user interacts with the app. I 
          used the <span className='font-bold'>useReducer</span> hook, inside <span className='font-bold'>useBillSplitApp.js</span>, in order to manage most of the state and data manipulation for the application. <span className='font-bold'>useState </span>
          is used more to hold calculated values & for some conditional rendering.
        </p>

                    
        </div>
        <div className='border-2 border-dashed border-slate-500 p-4 mt-6'>
        <h2 className='text-2xl uppercase underline underline-offset-2'>Instructions:</h2>
        <p className='text-lg py-2'>You can enter your own custom data, starting with roommmates (at least two) and then begin entering transactions...</p>
        <p className='text-lg py-2'>Or click the 'Load Generic Data' button to have the application automatically enter Roommate & Transaction data.</p>
        </div>
    </section>
    </>
  )
}
