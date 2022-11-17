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

    <section className='flex flex-col bg-white rounded-t-2xl rounded-b-lg'> 
      {/* close button for upper right corner */}  
      <div 
        className='flex flex-row h-10 w-10'
        onClick={() => props.setAddRoommateModal(false)}
        >
          <i className='material-icons relative -top-6 left-44 bg-red-400 md:hover:bg-red-600  p-2 m-1 text-sm font-bold rounded-xl'>close</i>
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
  </section>
  </>)
}
