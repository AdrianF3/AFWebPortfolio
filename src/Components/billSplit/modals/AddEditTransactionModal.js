import React, { useState } from 'react'
import AFPortfolioBtn from '../../shared/AFPortfolioBtn'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

export default function AddEditTransactionModal(props) {
    const [ transactionObject, setTransactionObject ] = useState(null)    

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


    // roommate list
    const optionRoommateNames = props.billSplitData.roommates.map((roommate, index)  =>  { return <option key={index}>{roommate.name}</option> } )
    console.log('optionRoommateNames', optionRoommateNames)
    console.log('props', props)

    console.log('transactionObject', transactionObject)

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

                            {/* <input 
                              className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1" 
                              id="name" 
                              type="text" 
                              name="name" 
                              placeholder="Your display name" 
                              required="required" 
                              autofocus="autofocus" 
                            /> */}
                            <select>
                              {optionRoommateNames}
                            </select>
                          </div>

                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-800 dark:text-gray-400" >Transaction Type</label>

                            {/* <input 
                              className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1"
                              id="email"
                              type="number" 
                              name="email" 
                              placeholder="Your email address" 
                              required="required" 
                            /> */}
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
                              className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1"
                              id="email"
                              type="number" 
                              name="email" 
                              placeholder="Your email address" 
                              required="required" 
                            />
                          </div>

                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-800 dark:text-gray-400" > Evenly Split The Bill?</label>

                            {/* <input 
                              className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1"
                              id="email"
                              type="number" 
                              name="email" 
                              placeholder="Your email address" 
                              required="required" 
                            /> */}
                            <div>
                              <input
                                type="radio"
                                name="EvenSplit"
                                value="Yes"
                                id="ToggleYes"
                                className="peer hidden"
                                defaultChecked
                              />

                              <label
                                htmlFor="ToggleYes"
                                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                              >
                                <p className="text-gray-700">Yes</p>                                
                              </label>
                            </div>

                            <div>
                              <input
                                type="radio"
                                name="EvenSplit"
                                value="No"
                                id="ToggleNo"
                                className="peer hidden"
                              />

                              <label
                                htmlFor="ToggleNo"
                                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                              >
                                <p className="text-gray-700">No</p>                                
                              </label>
                            </div>
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

                            {/* <input 
                              className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1"
                              id="password_confirmation"
                              type="text"
                              name="password_confirmation" 
                              placeholder="Repeat your password" 
                              required="required" 
                            /> */}
                            <select>
                              {optionRoommateNames}
                            </select>
                          </div>

                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-800 dark:text-gray-400" > Description </label>

                            <textarea 
                              className="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1"
                              id="password_confirmation"
                              type="textarea"
                              name="password_confirmation" 
                              placeholder="Repeat your password" 
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
      