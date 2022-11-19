import React, { useState } from 'react'
import AFPortfolioBtn from '../../shared/AFPortfolioBtn'

export default function AddRoommateModal(props) {
    const [ userInput, setUserInput ] = useState('')

    const handleAddRoommate = () => {
      // modify userInput to correct format
      let modifiedUserInput = userInput.charAt(0).toUpperCase() + userInput.toLowerCase().slice(1)
      
      console.log('modifiedUserInput', modifiedUserInput)

      // check if roommate name already exists
      let usernameExists = false

      for (let roommateIndex = 0; roommateIndex < props.billSplitData.roommates.length; roommateIndex++) {
        const roommate = props.billSplitData.roommates[roommateIndex];

        if (roommate.name === modifiedUserInput) {
          usernameExists = true
        }
        
      }

      if (usernameExists) {
        alert('Roommate Names cannot be re-used, consider adding initials')
      } else {
        props.billSplitDispatch({ type: 'ADD_ROOMMATE', userInput: modifiedUserInput })
        props.setAddRoommateModal(false)
      }


    }

    const handleRoommateValidation = ( newInput ) => {
      if (newInput.length > 10) {
        alert('Roommate names must be less than 10 characters')
        return
      }       
      if ( newInput.length <= 10 ) {
        setUserInput(newInput)
      }
    }
    
    console.log('props', props)
    
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
          <input 
            onChange={(e) => handleRoommateValidation(e.target.value)} type='text' 
            value={userInput}
            placeholder='roommate name...'
            className='m-2 p-2 bg-slate-300 rounded-xl'
          />
          <span className='text-sm'>{`${userInput.length} /10`}</span>
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
