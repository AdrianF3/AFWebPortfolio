import React, { useState } from 'react'
import AFPortfolioBtn from '../../shared/AFPortfolioBtn'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"
import { moneyFormatter } from '../../renderless/moneyFormatter'
import { useLockBodyModal } from '../../../hooks/useLockBodyModal'

export default function AddEditTransactionModal(props) {
  const [ transactionObject, setTransactionObject ] = useState(null)
  const [ roommatesChecked, setRoommatesChecked ] = useState( new Array(props.billSplitData.roommates.length).fill(false)) 
  const [ roommateAmounts, setRoommateAmounts ] = useState(new Array(props.billSplitData.roommates.length).fill(0))
  const [ roommatesSplit, setRoommateSplit ] = useState(0)
  const [ totalPaid, setTotalPaid ] = useState(0)
  
  
  
  // if editing transaction, load the data into array ELSE 
  // for new transactions, add empty object with generated transactionID and default to todays date
  if ( props.transactionModal[1] === 'EDIT' && !transactionObject ) {        
    setTransactionObject(props.billSplitData.transactions[props.transactionModal[0]])
    
    // update roommates checked
    let tempRoommatesChecked = roommatesChecked
    let tempRoommateAmounts = roommateAmounts
    

    for (let index = 0; index < props.billSplitData.roommates.length; index++) {
      // if roommates name exists in the financialDetails array, make same index of roommatesChecked array true
      let existsInFinancialDetails = props.billSplitData.transactions[props.transactionModal[0]].financialDetails.findIndex(record => record.name === props.billSplitData.roommates[index].name)
      // console.log('existsInFinancialDetails', existsInFinancialDetails)
      if (existsInFinancialDetails === -1) {
        tempRoommatesChecked[index] = false
        tempRoommateAmounts[index] = 0
      } else {
        tempRoommatesChecked[index] = true
        tempRoommateAmounts[index] = props.billSplitData.transactions[props.transactionModal[0]].financialDetails[existsInFinancialDetails].amount        
      }
      
    }
    // console.log('tempRoommatesChecked', tempRoommatesChecked)

  } 
  if (props.transactionModal[1] === 'ADD' && !transactionObject)  {
    setTransactionObject({
      transactionID: Math.floor(Math.random() * 1000),
      type: 'bill',
      date: new Date(),      
      paidBy: props.billSplitData.roommates[0].name,
      totalPaid: 0,
      evenSplit: false,
      description: '...describe the bill',
      financialDetails: []
    })
  }
  
  const handleSaveChanges = () => {
    // build new transactionObject
    let tempSaveObject = Object.assign({}, transactionObject)

    tempSaveObject.totalPaid = parseInt(tempSaveObject.totalPaid)
    let tempFinanceDetails = new Array(props.billSplitData.roommates.length).fill(0)
    
    for (let index = 0; index <   roommatesChecked.length; index++) {      
      let roommateObject = null
      if (roommatesChecked[index] === true) {
        roommateObject = { name: props.billSplitData.roommates[index].name, amount: roommateAmounts[index]}
      } else {
        roommateObject = { name: props.billSplitData.roommates[index].name, amount: 0}
      }
      tempFinanceDetails[index] = roommateObject
    }    

    tempSaveObject.financialDetails = tempFinanceDetails
    
    
    // SAVING DATA
    
    // if adding a new transaction    
    if (props.transactionModal[1] === 'ADD') {
      // pass to dispatch      
      props.billSplitDispatch({type: 'ADD_TRANSACTION', transactionToSave: tempSaveObject})
      
      props.setTransactionModal(false)
    }
    // if editing a transaction
    if (props.transactionModal[1] === 'EDIT') {
      // pass to dispatch      
      props.billSplitDispatch({ type: 'EDIT_TRANSACTION', transactionToReplace: tempSaveObject})
      props.setTransactionModal(false)
    }



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

    // if even split is true, call when upda
    const handleTotalPaidChange = ( newTotalPaid ) => {
      if (transactionObject.evenSplit) {        
        handleEvenlySplit(false, newTotalPaid)        
      }

    }
     
    const handleRecalculateAmounts = ( indexOfRoommate, amount ) => {      
      // Calculate total paid with new amounts as well as updating who has paid what in a new array
      
      let billTotal = 0
      let updatedRoommateAmounts = new Array(props.billSplitData.roommates.length).fill(0)
      // console.log('props.billSplitData.roommates', props.billSplitData.roommates)
      // console.log('updatedRoommateAmounts', updatedRoommateAmounts)      
      updatedRoommateAmounts = roommateAmounts.map((prevAmount, index) => {        
        return index === indexOfRoommate ? amount : roommateAmounts[index]
      }) 
      
      for (let index = 0; index < updatedRoommateAmounts.length; index++) {      
        billTotal += parseInt(updatedRoommateAmounts[index])        
      }     
      
      //  TO DO *** 
      // check to make sure the new TOTAL COMBINED VALUEq would not exceed the totalPaid amount, otherwise, alert to user
      if (billTotal > transactionObject.totalPaid) {
        alert('The Amount Owed Cannot Exceed The Bill Total')
      } else { 
        setTotalPaid(billTotal)              
        setRoommateAmounts(updatedRoommateAmounts)
      }
      
    }

    // custom hook to prevent scrolling outside of modal
    useLockBodyModal()


    // temp fix -> issue was app not loading properly with null data, didn't want to implement conditional renders throughout
    if (!transactionObject) {
      return
    }
    // roommate list
    const optionRoommateNames = props.billSplitData.roommates.map((roommate, index)  =>  {      
      // return <option key={index} value={roommate.name} selected={roommate.name === transactionObject.paidBy ? 'selected' : null}>{roommate.name}</option> 
      return <option key={index} value={roommate.name} >{roommate.name}</option> 
    } )

 

    return ( <>            
        <section className={`w-screen h-screen bg-slate-800/80 fixed flex flex-col justify-center items-center z-20`}>
            <div 
              className='relative h-10 w-10'
              onClick={() => props.setTransactionModal(false)}
              >
                <i className='material-icons absolute top-4 left-36 bg-red-400 md:hover:bg-red-600 p-2 m-1 text-sm font-bold rounded-full'>close</i>
            </div>
        <section className="flex flex-col h-4/5 justify-center items-center mx-2 rounded-md bg-white shadow-lg p-2 overflow-scroll">   
          {/* close button for upper right corner */}  
      
            {/* Main Section Of Modal */}
            <div className='flex flex-col items-center pt-10'>
                
                <div className='text-2xl'>
                  {props.transactionModal[1] === 'ADD' ? <h3>Add Transaction</h3> : <h3>Edit Transaction</h3>}
                  { transactionObject ? <p className='text-sm'>Transaction ID: {transactionObject.transactionID}</p> : null}
                </div>
                
                {/* form section */}
                <section>
                  <div className="">
                    <div className="flex flex-col items-center pt-4 sm:justify-center sm:pt-0">                      
                      <div className="p-8">
                      
                        <form>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-gray-400"> Paid By </label>
                            
                            <select
                              className='p-2 rounded-xl w-full'
                              defaultValue={transactionObject.paidBy}
                              onChange={(e) => setTransactionObject( transactionObject => ({
                                ...transactionObject, 
                                paidBy: e.target.value
                              }))}
                            >
                              {optionRoommateNames}
                            </select>
                          </div>

                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-900 dark:text-gray-400" >Transaction Type</label>
                            
                            <div>
                              <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliveryStandard"
                                id="DeliveryStandard"
                                className="peer hidden"
                                onClick={() => setTransactionObject( transactionObject => ({
                                  ...transactionObject,
                                  type: 'bill'
                                }))}
                                defaultChecked={transactionObject.type === 'bill' ? true : false}
                                // defaultChecked
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
                                onClick={() => setTransactionObject( transactionObject => ({
                                  ...transactionObject,
                                  type: 'roommatePayment'
                                }))}
                                checked={transactionObject.type === 'roommatePayment' ? true : false}
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
                            <label className="block text-sm font-medium text-gray-900 dark:text-gray-400" > {transactionObject.type === 'bill' ? 'Bill' : 'Payment' } Total</label>

                            <input 
                              // className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1"
                              className="inline-block w-full p-2 rounded-md bg-gray-100 border-transparent focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 focus:ring-0 text-sm mt-1"
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
                            <label className="block text-sm font-medium text-gray-900 dark:text-gray-400" > Date </label>
                            {transactionObject ? 
                            <DatePicker selected={transactionObject.date} onChange={(date) => {setTransactionObject( transactionObject => ({
                              ...transactionObject,
                              date: date
                            }) )}} /> : null}
                          </div>

                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-900 dark:text-gray-400" >
                              {transactionObject.type === 'bill' ? 'Owed By' : 'Paid To' }
                            </label>                            
                            {props.billSplitData.roommates.map((roommate, index) => {  
                              
                              if (roommate.name === transactionObject.paidBy) {
                                return null
                              } else {
                              return (<>                                
                                <label htmlFor={roommate.name}>{roommate.name}</label>
                                {/* <input
                                  type='checkbox'
                                  defaultChecked={roommatesChecked[index]}
                                  // checked={roommatesChecked[index]}                                                              
                                  onChange={() => handleCheckedRoommate(index, transactionObject.evenSplit)}
                                  name={roommate.name}
                                  // value={roommate.name}                                  
                                  id={roommate.name}
                                  /> */}

                                  <input
                                    type="checkbox"
                                    id={`custom-checkbox-`}
                                    name={roommate.name}
                                    value={roommate.name}
                                    checked={roommatesChecked[index]}
                                    onChange={() => handleCheckedRoommate(index, transactionObject.evenSplit)}
                                  />

                              </>)
                              }

                            })}
                          </div>

                          {roommatesSplit >= 2 ? 
                            <div className="mt-4 bg-emerald-400/40 p-2 rounded-xl shadow-xl">
                              <label className="block py-2 text-center text-md font-medium text-gray-900 dark:text-gray-400" > Evenly Split The Bill?</label>

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
                            <label className="block text-sm font-medium text-gray-900 dark:text-gray-400"> Description </label>

                            <textarea                               
                              className="inline-block w-full p-2 rounded-md bg-gray-100 border-transparent focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 focus:ring-0 text-sm mt-1"
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

                  <div className='flex flex-col justify-evenly'>
                    <h3 className='underline underline-offset-2 text-center'>
                    {transactionObject.type === 'bill' ? `Owed to ${transactionObject.paidBy}` : `${transactionObject.paidBy } Paid:` }
                    </h3>
                    <p className='text-center text-xs text-slate-700 italic pb-4'>
                    {transactionObject.type === 'bill' ? `whats the poriton each roommate owes` : `how much are you paying each roommate` }
                    </p>
                    {props.billSplitData.roommates.map((roommate, index) => {
                    if (roommatesChecked[index]) {
                      return (<>
                        <div key={index} className='flex flex-col'>
                          <div>
                          </div>
                          <div>
                            {roommate.name}
                          </div>
                          <div>
                            {transactionObject.evenSplit ? <span>${roommateAmounts[index]}</span> :
                          <input 
                          // className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1"
                          className="inline-block w-full p-2 rounded-md bg-gray-100 border-transparent focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 focus:ring-0 text-sm mt-1"
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
                    {totalPaid > 0 ? 
                    <div>
                      <p>
                        Total {moneyFormatter.format(totalPaid)}
                      </p>
                    </div> : null
                    }
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
      