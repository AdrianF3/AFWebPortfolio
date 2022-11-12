import React, { useState } from 'react'
import AFPortfolioBtn from '../../shared/AFPortfolioBtn'

export default function AddRoommateModal(props) {
    const [ userInput, setUserInput ] = useState('')
    
  return ( <>
  <section className='w-screen h-screen fixed flex justify-center items-center bg-cyan-600/80 z-10'>    
    <div className='flex flex-col items-center w-fit h-fit'>
        <h3>Add Roommates Name</h3>
        <input onChange={(e) => setUserInput(e.target.value)} type='text' />
        <div className='p-4'>
          <AFPortfolioBtn
            btnText='Save Name'
            function={() => props.dispatch({ type: 'ADD_ROOMMATE', userInput})}
          />
        </div>
    </div>  

  </section>
  </>)
}
