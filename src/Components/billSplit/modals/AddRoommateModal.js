import React, { useState } from 'react'
import AFPortfolioBtn from '../../shared/AFPortfolioBtn'

export default function AddRoommateModal(props) {
    const [ userInput, setUserInput ] = useState('')

    const handleAddRoommate = () => {
      props.billSplitDispatch({ type: 'ADD_ROOMMATE', userInput })
      props.setAddRoommateModal(false)
    }
    
  return ( <>
  <section className='w-screen h-screen fixed flex flex-col justify-center items-center bg-cyan-600/80 z-10'>    
    {/* close button for upper right corner */}  
    <div 
      className='absolute right-10 top-10 p-2 items-center bg-red-400 rounded-full'
      onClick={() => props.setAddRoommateModal(false)}
    >
        <i className='material-icons'>close</i>
    </div>

    {/* Main Section Of Modal */}
    <div className='flex flex-col items-center w-fit h-fit'>
        <h3>Add Roommates Name</h3>
        <input onChange={(e) => setUserInput(e.target.value)} type='text' />
        <div className='flex flex-row gap-2 p-4'>
          <AFPortfolioBtn
            btnText='Save Name'
            function={() => handleAddRoommate()}
          />
          <AFPortfolioBtn
            btnText='Cancel'
            type='cancel'
            function={() => props.setAddRoommateModal(false)}
          />
        </div>
    </div>  

  </section>
  </>)
}
