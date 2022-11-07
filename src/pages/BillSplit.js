import React from 'react'
import ContactSection from '../components/ContactSection'
import HeaderNavigation from '../components/HeaderNavigation'

export default function BillSplit() {

  // dummy roommate data
  const roommateData = [
    {
      name: 'Roommate #1',
      paid: 280.75,
      owes: 0
    },
    {
      name: 'Roommate #2',
      paid: 20.75,
      owes: 52.45
    },
    {
      name: 'Roommate #3',
      paid: 2000.75,
      owes: 45
    }
  ]  
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


  return (<>
    <HeaderNavigation/>
    <section>
      {/* Page Title and Description */}
      <div className='flex flex-col w-10/12 mx-auto px-2 py-8'>
        <h2 className='text-3xl'>
          Bill Splitter
        </h2>
        <p className='py-2'>
          Built with roommates and friends in mind
        </p>
        <div className='w-8/12 mx-auto p-2 border-slate-700/30 border-2 rounded-xl m-4'>
          <h4>How it Works</h4>
          <p>dfsksfhskfsdfs</p>
        </div>
      </div>
      {/* Roommate Table Display */}
      <section className='flex flex-col w-10/12 mx-auto bg-sky-600/20 p-4 rounded-xl'>
        {/* table section */}
        <div className='grid grid-cols-3'>
          {/* Row 1 - Descriptions */}
          <div><p>Roommates</p></div>
          <div><p>Paid</p></div>
          <div><p>Owes</p></div>          
          {/* Rows 2+ generated from array of roommateData */}
          {roommateData.length > 0 ? roommateData.map((roommate) => <>
            <div>
              <p className='text-xs md:text-base'>{roommate.name}</p>
            </div>
            <div><p>{roommate.paid}</p></div>
            <div><p>{roommate.owes}</p></div>            
          </>) : null }
        </div>
        {/* Add Roommate Button */}
        <div className='flex flex-row justify-end'>
          <button className='p-1 bg-emerald-400 rounded-xl border-2 border-emerald-800 md:hover:bg-emerald-600'>
            Add Rommate
          </button>
        </div>

      </section>
      {/* Payments & Transactions Display */}
      <section className='flex flex-col w-10/12 mx-auto py-8'>
        <div>
          <h4>Payments & Transactions</h4>
        </div>
        
        {/* table section */}
        <div className='grid grid-cols-5 justify-evenly'>
          {/* Row 1 - Descriptions */}
          <div><p>Date</p></div>
          <div><p>Type</p></div>
          <div><p>Description</p></div>
          <div><p>Paid By</p></div>
          <div><p>Amount</p></div>
          {/* Rows 2+ generaed from array of transactions */}
          {transactions.length > 0 ? transactions.map((transaction) => <>
            <div><p>{transaction.date.toDateString()}</p></div>
            <div><p>{transaction.type}</p></div>
            <div><p>{transaction.description}</p></div>
            <div><p>{transaction.paidBy}</p></div>
            <div><p>${transaction.totalPaid}</p></div>
          </>) : null }

        </div>

      </section>

    </section>
    <ContactSection/>
    </>
  )
}
