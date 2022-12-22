import React, { useState } from 'react'

export default function GameStatus(props) {
    const [ userHasGuessed, setUserHasGuessed ] = useState(false)
    // if user has guessed, update state  
    
    if (props.gameData.guesses > 0 && userHasGuessed === false) {
        setUserHasGuessed(true)
    }                
  return (
    <div className='flex flex-col md:flex-row justify-center'>          
          <div className='m-auto px-4 py-8 text-center'>
            { !userHasGuessed ? 
                <><h4 className='text-xl'>Make Your First Guess</h4>
                <div className='bg-green-700 text-white p-1 mx-4 rounded-xl'>
                    <p className='p-1 font-medium'>you haven't submitted one yet...</p>
                </div></> : 
                <><h4 className='text-xl'>Your Current Score</h4>
                <div className='bg-green-700 text-white p-1 mx-4 rounded-xl'>
                  <p className='p-1 font-medium'>{props.gameData.score} of {props.gameData.guesses} cities guessed correctly</p>
                </div></>
            }

            
          </div>
    </div>
      
  )
}
