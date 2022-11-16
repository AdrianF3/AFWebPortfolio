import React, { useState } from 'react'
import AddRoommateModal from '../components/billSplit/modals/AddRoommateModal'
import RoommateCard from '../components/billSplit/RoommateCard'
import TransactionCard from '../components/billSplit/TransactionCard'
import ContactSection from '../components/ContactSection'
import HeaderNavigation from '../components/HeaderNavigation'
import AFPortfolioBtn from '../components/shared/AFPortfolioBtn'
import { useRoommateData } from '../hooks/useRoommateData'
import { useTransactionData } from '../hooks/useTransactionData'

export default function BillSplit() {
  const [ addRoommateModal, setAddRoommateModal ] = useState(false)
  const [ currentlyAddingRoommates, setCurrentlyAddingRoommates ] = useState(true)

  // Load Data Via Reducers
  const { roommateData, roommateDispatch } = useRoommateData()
  const { transactionData, transactionDispatch } = useTransactionData()
  

  


  
  

  console.log(roommateData)
  console.log('transactionData', transactionData)  

  return (<>
    {addRoommateModal ? <AddRoommateModal 
      roommateDispatch={roommateDispatch}
      setAddRoommateModal={setAddRoommateModal}
    /> : null}
    <HeaderNavigation/>
    <section>
      {/* Page Title and Description */}
      <div className=''>
        {/* Upper Header Section */}
        <div className='flex flex-col md:flex-row justify-evenly bg-slate-400 p-4'>
          <div className='w-8/12 p-4'>
            <h2 className='text-2xl'>Bill Splitting Project</h2>
            <p className='py-2'>
              I wanted to create a simple project that allowed me to implement some more advanced programming functionality, specifically using some of the React Hooks
              to manage app data & state.
            </p>
            <div className='px-4'>
              <ul>
                <li>useState: </li>
                <li>useReducer: </li>
                <li></li>
              </ul>
            </div>            
          </div>
          <div className='border-2 border-dashed p-4 mt-6'>
            <h4 className='text-xl uppercase'>Instructions:</h4>
            <p className='text-xl py-2'>Guess the daily high and low for major cities</p>
            <p className='text-xl py-2'>sdfshflksdfnsdlkfjhsfhsfs</p>
          </div>
        </div>        
      </div>
      <div className='flex flex-col w-10/12 mx-auto px-2 py-8'>
        <h2 className='text-3xl'>
          Bill Splitter
        </h2>
        <p className='py-2'>
          Built with roommates and friends in mind
        </p>        
      </div>
      {/* Roommate Table Display */}
      <section className='flex flex-col w-10/12 mx-auto bg-sky-600/20 p-4 rounded-xl'>
        <div className='-mt-8 -ml-6 bg-sky-600 w-fit p-2 rounded-xl my-4'>
          <h4 className='texl-2xl font-bold uppercase text-white'>Roommate Info</h4>
        </div>
        {/* table section */}
        <div className='grid grid-cols-4 text-sm'>
          {/* Row 1 - Descriptions */}
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Roommates
            </p>
          </div>
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Paid
            </p>
          </div>
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Owes
            </p>
          </div>          
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Actions
            </p>
          </div>          
          {/* Rows 2+ generated from array of roommateData */}
          { roommateData.roommates.length  > 0 ? roommateData.roommates.map((roommate, roommateIndex) => 
            <RoommateCard 
              roommate={roommate} 
              roommateDispatch={roommateDispatch}
              roommateIndex={roommateIndex} 
              currentlyAddingRoommates={currentlyAddingRoommates}
              key={roommateIndex} /> ) : 
            null 
          }
        </div>

        {currentlyAddingRoommates ? 
          <div className='flex flex-col md:flex-row justify-evenly pt-8 border-t-2 border-slate-800'>
            {/* Add Roommate Button - if less than 5 current roommates, otherwse display full message & disable button */}
            {roommateData.roommates.length < 5 ? 
              <AFPortfolioBtn 
              btnText='Add Roommate' 
              function={setAddRoommateModal}
              /> : <AFPortfolioBtn
                btnText='Max. Roomates Reached'  
                type='disabeled'
                />        
            }
            {/* Begin Adding Transactions Button */}        
            <AFPortfolioBtn 
              btnText='Done Adding Roommates' 
              function={() => setCurrentlyAddingRoommates(false)}
            />
          </div> : null
        }

      </section>
      {/* Payments & Transactions Display */}
      <section className={`flex flex-col w-10/12 bg-emerald-600/20 my-10 rounded-xl p-4 mx-auto py-8 ${currentlyAddingRoommates ? 'blur-sm' : null}`}>
      <div className='-mt-8 -ml-6 bg-emerald-600 w-fit p-2 rounded-xl my-4'>
          <h4 className='texl-2xl font-bold uppercase text-white'>Payments &amp; Transactions</h4>
        </div>
        <div className='flex justify-end pb-4'>
            <AFPortfolioBtn btnText='Add New Transaction' />
        </div>
        
        {/* table section */}
        <div className='grid grid-cols-5 justify-center'>
          {/* Row 1 - Descriptions */}
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Date
            </p>
          </div>          
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Description
            </p>
          </div>
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Paid By
            </p>
          </div>
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Amount
            </p>
          </div>
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Actions
            </p>
          </div>
          {/* Rows 2+ generaed from array of transactions */}
          {transactionData.transactions.length > 0 ? transactionData.transactions.map((transaction, transactionIndex) => 
            <TransactionCard transaction={transaction} key={transactionIndex} /> ) : 
            null 
          }

        </div>

      </section>

    </section>
    <ContactSection/>
    </>
  )
}
