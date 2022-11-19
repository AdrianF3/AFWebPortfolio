import React, { useState, useRef } from 'react'
import AFPortfolioBtn from '../../shared/AFPortfolioBtn'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

export default function AddEditTransactionModal(props) {
  const [ transactionObject, setTransactionObject ] = useState(null)
  const [ roommatesChecked, setRoommatesChecked ] = useState( new Array(props.billSplitData.roommates.length).fill(false)) 
  const [ roommateAmounts, setRoommateAmounts ] = useState(new Array(props.billSplitData.roommates.length).fill(0))
  const [ roommatesSplit, setRoommateSplit ] = useState(0)
  
  
  
  // if editing transaction, load the data into array ELSE 
  // for new transactions, add empty object with generated transactionID and default to todays date
  if ( props.transactionModal[1] === 'EDIT' && !transactionObject ) {        
    setTransactionObject(props.billSplitData.transactions[props.transactionModal[0]])
  } 
  if (props.transactionModal[1] === 'ADD' && !transactionObject)  {
    setTransactionObject({
      transactionID: Math.floor(Math.random() * 1000),
      type: 'bill',
      date: new Date(),      
      paidBy: null,
      totalPaid: 0,
      evenSplit: false,
      description: '...bill description'
    })
  }
  
  const handleSaveChanges = () => {
    
  }
  

    // Check or Uncheck a roommate in the owedBy/paidTo checkbox input
    const handleCheckedRoommate = ( roommateIndex, evenSplitChange = false ) => {     
      let updateCheckedState = roommatesChecked.map(( check, index ) => {
        return index === roommateIndex ? !check : check
        
      })
      setRoommatesChecked(updateCheckedState)
      let numberOfRoommatesSplit = 0
      for (let index = 0; index < updateCheckedState.length; index++) {
        if (updateCheckedState[index]) {          
          numberOfRoommatesSplit = numberOfRoommatesSplit + 1
        }        
      }
      // console.log('numberOfRoommatesSplit', numberOfRoommatesSplit)
      setRoommateSplit(numberOfRoommatesSplit)
      
      // if evenSplit is true, call function
      
      if (evenSplitChange) {
        // console.log('evenSplitChange called')      
        handleEvenlySplit(updateCheckedState)
      }
    }
    

    // using roommateCheckedOveride when callinng after updating roommatesChecked but state may not have updated yet
    const handleEvenlySplit = (roommateCheckedOveride = false, newTotalPaid = false) => {      
      let numberOfRoommatesSplit = 0
      if (!roommateCheckedOveride) {
        for (let index = 0; index < roommatesChecked.length; index++) {
          if (roommatesChecked[index]) {          
            numberOfRoommatesSplit = numberOfRoommatesSplit + 1
          }        
        }        
      } else {
        for (let index = 0; index < roommateCheckedOveride.length; index++) {
          if (roommateCheckedOveride[index]) {          
            numberOfRoommatesSplit = numberOfRoommatesSplit + 1
          }        
        }                
      }
      // console.log('numberOfRoommatesSplit', numberOfRoommatesSplit)
      
      let evenShare = 0
      // console.log('newTotalPaid', newTotalPaid)
      if (newTotalPaid) {
        evenShare = Math.round( newTotalPaid / numberOfRoommatesSplit) * 100 / 100
        evenShare = ( newTotalPaid / numberOfRoommatesSplit).toFixed(2)
        // console.log('using new total paid, when updating bill total')     
      } else {
        // evenShare = Math.round( transactionObject.totalPaid / numberOfRoommatesSplit) * 100 / 100
        evenShare = ( transactionObject.totalPaid / numberOfRoommatesSplit ).toFixed(2)
        // console.log('using transactionObhect, when toggiling even split, or adding removing roommates')     
      }
      // console.log('evenShare', evenShare)
      
      let tempRoommateAmounts = new Array(props.billSplitData.roommates).fill(0)
      // load the even share into the applicable users
      if (!roommateCheckedOveride) {
        for (let index = 0; index < roommatesChecked.length; index++) {
          if (roommatesChecked[index]) {
            tempRoommateAmounts[index] = evenShare
          }        
        }
      } else {
        for (let index = 0; index < roommateCheckedOveride.length; index++) {
          if (roommateCheckedOveride[index]) {
            tempRoommateAmounts[index] = evenShare
          }        
        }
      }
      setRoommateAmounts(tempRoommateAmounts)
      
    }

    const handleTotalPaidChange = ( newTotalPaid ) => {
      // if even split is true, call function
      if (transactionObject.evenSplit) {
        // console.log('called')
        handleEvenlySplit(false, newTotalPaid)        
      }

    }
     
    const handleRecalculateAmounts = ( indexOfRoommate, amount ) => {      
      //  TO DO *** 
      // check to make sure values would not exceed the totalPaid amount, otherwise, alert to user
      
      let updatedRoommateAmounts = roommateAmounts.map((prevAmount, index) => {        
        return index === indexOfRoommate ? amount : roommateAmounts[index]
      })      
      //  TO DO *** 
      // check to make sure the new TOTAL COMBINED VALUEq would not exceed the totalPaid amount, otherwise, alert to user
      
      setRoommateAmounts(updatedRoommateAmounts)
    }


    // roommate list
    const optionRoommateNames = props.billSplitData.roommates.map((roommate, index)  =>  { return <option key={index}>{roommate.name}</option> } )


    // console.log('roommatesChecked', roommatesChecked)
    // console.log('props', props)
    // console.log('transactionObject', transactionObject)
    // console.log('roommateAmounts', roommateAmounts)
    // console.log('roommatesSplit', roommatesSplit)
    


    // temp fix -> issue was app not loading properly with null data, didn't want to implement conditional renders throughout
    if (!transactionObject) {
      return
    }


    return ( <>    
        <section className='w-screen h-screen fixed flex flex-col justify-center items-center bg-cyan-600/80 z-10'>    
      
          <section className='flex flex-col px-10 bg-white rounded-t-2xl rounded-b-lg'> 
            {/* close button for upper right corner */}  
            <div 
              className='flex flex-row h-10 w-10'
              onClick={() => props.setTransactionModal(false)}
              >
                <i className='material-icons relative -top-6 left-44 bg-red-400 md:hover:bg-red-600  p-2 m-1 text-sm font-bold rounded-xl'>close</i>
            </div>
      
            {/* Main Section Of Modal */}
            <div className='flex flex-col items-center w-fit h-fit'>
                
                <div>
                  {props.transactionModal[1] === 'ADD' ? <h3>Add Transaction</h3> : <h3>Edit Transaction</h3>}
                  { transactionObject ? <p className='text-sm'>Transaction ID: {transactionObject.transactionID}</p> : null}
                </div>
                
                {/* form section */}
                <section>
                  <div className="w-full bg-zinc-50">
                    <div className="flex flex-col items-center pt-6 sm:justify-center sm:pt-0">
                      {/* <div className="w-full overflow-hidden bg-white p-8 shadow-sm dark:bg-gray-800 sm:max-w-md sm:rounded-lg"> */}
                      <div className="w-full overflow-hidden p-8 shadow-sm sm:max-w-md sm:rounded-lg">
                        

                        <form>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-800 dark:text-gray-400"> Paid By </label>
                            
                            <select>
                              {optionRoommateNames}
                            </select>
                          </div>

                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-800 dark:text-gray-400" >Transaction Type</label>
                            
                            <div>
                              <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliveryStandard"
                                id="DeliveryStandard"
                                className="peer hidden"
                                defaultChecked
                              />

                              <label
                                htmlFor="DeliveryStandard"
                                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                              >
                                <p className="text-gray-700">Bill</p>                                
                              </label>
                            </div>

                            <div>
                              <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliveryPriority"
                                id="DeliveryPriority"
                                className="peer hidden"
                              />

                              <label
                                htmlFor="DeliveryPriority"
                                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                              >
                                <p className="text-gray-700">Roommate Payment</p>                                
                              </label>
                            </div>
                          </div>

                          

                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-800 dark:text-gray-400" > Bill Total</label>

                            <input 
                              // className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1"
                              className="inline-block w-full py-2 rounded-md bg-gray-100 border-transparent focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 focus:ring-0 text-sm mt-1"
                              id="billTotal"
                              type="number" 
                              name="billTotal" 
                              placeholder="$0" 
                              value={transactionObject.totalPaid}
                              onChange={(e) => {setTransactionObject(transactionObject => ({...transactionObject, totalPaid: e.target.value})); handleTotalPaidChange(e.target.value)}}
                              required="required" 
                            />
                          </div>                         

                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-800 dark:text-gray-400" > Date </label>
                            {transactionObject ? 
                            <DatePicker selected={transactionObject.date} onChange={(date) => {setTransactionObject( transactionObject => ({
                              ...transactionObject,
                              date: date
                            }) )}} /> : null}
                          </div>

                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-800 dark:text-gray-400" > Owed By </label>                            
                            {props.billSplitData.roommates.map((roommate, index) => {
                              return (<>
                                <label htmlFor={roommate.name}>{roommate.name}</label>
                                <input
                                  type='checkbox'
                                  checked={roommatesChecked[index]}
                                  name={roommate.name}
                                  value={roommate.name}                                  
                                  id={roommate.name}
                                  onChange={() => handleCheckedRoommate(index, transactionObject.evenSplit)}
                                  />
                              </>)
                            })}
                          </div>

                          {roommatesSplit >= 2 ? 
                            <div className="mt-4">
                              <label className="block text-sm font-medium text-gray-800 dark:text-gray-400" > Evenly Split The Bill?</label>

                              <div>
                                <input
                                  type="radio"
                                  name="EvenSplit"                                
                                  value="No"
                                  id="ToggleNo"
                                  className="peer hidden"
                                  onClick={() => setTransactionObject( transactionObject => ({
                                    ...transactionObject,
                                    evenSplit: false
                                  }))}
                                  defaultChecked
                                />

                                <label
                                  htmlFor="ToggleNo"
                                  className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                >
                                  <p className="text-gray-700">No</p>                                
                                </label>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  name="EvenSplit"
                                  value="Yes"
                                  id="ToggleYes"
                                  className="peer hidden"
                                  onClick={() => { 
                                    setTransactionObject( transactionObject => ({
                                      ...transactionObject,
                                      evenSplit: true
                                    }));
                                    handleEvenlySplit()
                                  }}
                                />

                                <label
                                  htmlFor="ToggleYes"
                                  className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                >
                                  <p className="text-gray-700">Yes</p>                                
                                </label>
                              </div>

                            </div> : null
                          }

                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-800 dark:text-gray-400" > Description </label>

                            <textarea 
                              // className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1"
                              className="inline-block w-full py-2 rounded-md bg-gray-100 border-transparent focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 focus:ring-0 text-sm mt-1"
                              id="password_confirmation"
                              type="textarea"
                              name="password_confirmation" 
                              placeholder="Bill description" 
                              value={transactionObject.description}
                              onChange={(e) => setTransactionObject( transactionObject => ({
                                ...transactionObject,
                                description: e.target.value
                              }))}
                              required="required" 
                            />
                          </div>                          

                          
                        </form>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Display Owed / Paid Totals as user updates the form */}
                <section>
                  <div>
                    <h3>Owed/Paid Totals</h3>
                  </div>

                  <div className='flex flex-col justify-evenly'>
                    {props.billSplitData.roommates.map((roommate, index) => {
                    if (roommatesChecked[index]) {
                      return (<>
                        <div key={index} className='flex flex-col'>
                          <div>
                            {roommate.name}
                          </div>
                          <div>
                            {transactionObject.evenSplit ? <span>${roommateAmounts[index]}</span> :
                          <input 
                          // className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1"
                          className="inline-block w-full py-2 rounded-md bg-gray-100 border-transparent focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 focus:ring-0 text-sm mt-1"
                          id=""
                          type="number" 
                          name=""                               
                          placeholder="$0"
                          value={roommateAmounts[index]}
                          onChange={(e) => handleRecalculateAmounts(index, e.target.value)}                               
                          /> }
                          </div>
                        </div>
                      </>)
                      
                    } else {
                      return null
                    }
                    })}
                  </div>

                </section>






                <div className='flex flex-row gap-2 p-4'>
                  <AFPortfolioBtn
                    btnText='Save'
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
      