import React, { useState } from 'react'
import AFPortfolioBtn from '../../shared/AFPortfolioBtn'


export default function AddEditTransactionModal(props) {
    const [ transactionObject, setTransactionObject ] = useState(null)
    const [ userInput, setUserInput ] = useState('')

    // if editing transaction, load the data into array
    if ( props.transactionModal[1] === 'EDIT' && !transactionObject ) {
        
        setTransactionObject(props.billSplitData.transactions[props.transactionModal[0]])
    }

    const handleSaveChanges = () => {

    }
    console.log('props.transactionModal', props.transactionModal)

    console.log('transactionObject', transactionObject)

    return ( <>    
        <section className='w-screen h-screen fixed flex flex-col justify-center items-center bg-cyan-600/80 z-10'>    
      
          <section className='flex flex-col bg-white rounded-t-2xl rounded-b-lg'> 
            {/* close button for upper right corner */}  
            <div 
              className='flex flex-row h-10 w-10'
              onClick={() => props.setTransactionModal(false)}
              >
                <i className='material-icons relative -top-6 left-44 bg-red-400 md:hover:bg-red-600  p-2 m-1 text-sm font-bold rounded-xl'>close</i>
            </div>
      
            {/* Main Section Of Modal */}
            <div className='flex flex-col items-center w-fit h-fit'>
                
                
                {props.transactionModal[1] === 'ADD' ? <h3>Add Transaction</h3> : <h3>Edit Transaction</h3>}
                <input onChange={(e) => setUserInput(e.target.value)} type='text' />



                <div className='flex flex-row gap-2 p-4'>
                  <AFPortfolioBtn
                    btnText='Save Name'
                    function={() => handleSaveChanges()}
                    />
                  <AFPortfolioBtn
                    btnText='Cancel'
                    type='cancel'
                    function={() => props.setTransactionModal(false)}
                    />
                </div>
            </div> 
          </section>
        </section>
        </>)
      }
      