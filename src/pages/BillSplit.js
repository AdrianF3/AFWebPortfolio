import React, { useReducer, useState } from 'react'
import AddRoommateModal from '../components/billSplit/modals/AddRoommateModal'
import RoommateCard from '../components/billSplit/RoommateCard'
import TransactionCard from '../components/billSplit/TransactionCard'
import ContactSection from '../components/ContactSection'
import HeaderNavigation from '../components/HeaderNavigation'
import AFPortfolioBtn from '../components/shared/AFPortfolioBtn'

export default function BillSplit() {
  const [ addRoommateModal, setAddRoommateModal ] = useState(false)

  const initialState = {
    roommates: []
  }

  function roommateDataReducer( roommateDataState, action ) {
    switch (action.type) {
      case 'ADD_ROOMMATE':          
          setAddRoommateModal(false)
          return roommateDataState.roommates = [...roommateDataState.roommates, {
            name: action.userInput,
            paid: 0,
            owes: 0
          }]          
      default:
        // or should I throw new error
        throw new Error()        
    }
  }

  const [ roommateDataState , dispatch] = useReducer(roommateDataReducer, initialState)
  
  // dummy payment data
  const transactions = [
    {
      date: new Date(),
      type: 'once',
      paidBy: 'Roommate #1',
      totalPaid: 500,
      owedBy: [
        {
          name: 'Roommate #2',
          owes: 150,
        },
        {
          name: 'Roommate #3',
          owes: 150,
        },
      ],
      evenSplit: false,
      description: 'living room tv upgrade'
    }
  ]

  // console.log(roommateDataState)  

  return (<>
    <HeaderNavigation/>
    {addRoommateModal ? <AddRoommateModal dispatch={dispatch} /> : null}
    <section>
      {/* Page Title and Description */}
      <div className=''>
        {/* Upper Header Section */}
        <div className='flex flex-row justify-evenly bg-slate-400 p-4'>
          <div className='w-8/12 p-4'>
            <h2 className='text-2xl'>Bill Splitting Project</h2>
            <p className='py-2'>
              I wanted to create a simple project that allowed me to implement some more advanced programming functionality, specifically using some of the React Hooks
              to manage app data & state.
            </p>
            <div className='px-4'>
              <ul>
                <li>useState: </li>
                <li>useRef : </li>
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
        <div className='grid grid-cols-3 text-sm'>
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
          {/* Rows 2+ generated from array of roommateData */}
          {roommateDataState.roommates.length > 0 ? roommateDataState.roommates.map((roommate, roommateIndex) => 
            <RoommateCard roommate={roommate} key={roommateIndex} /> ) : 
            null 
          }
        </div>


        <div className='flex flex-col md:flex-row justify-evenly pt-8 border-t-2 border-slate-800'>
          {/* Add Roommate Button */}
          <AFPortfolioBtn 
            btnText='Add Roommate' 
            function={setAddRoommateModal}
          />      
          {/* Begin Adding Transactions Button */}        
          <AFPortfolioBtn btnText='Done Adding Roommates' />
        </div>

      </section>
      {/* Payments & Transactions Display */}
      <section className='flex flex-col w-10/12 bg-emerald-600/20 my-4 rounded-xl p-4 mx-auto py-8'>
      <div className='-mt-8 -ml-6 bg-emerald-600 w-fit p-2 rounded-xl my-4'>
          <h4 className='texl-2xl font-bold uppercase text-white'>Payments &amp; Transactions</h4>
        </div>
        <div className='flex justify-end pb-4'>
            <AFPortfolioBtn btnText='Add New Transaction' />
        </div>
        
        {/* table section */}
        <div className='grid grid-cols-6 justify-center'>
          {/* Row 1 - Descriptions */}
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Date
            </p>
          </div>
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Type
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
          {transactions.length > 0 ? transactions.map((transaction, transactionIndex) => 
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
