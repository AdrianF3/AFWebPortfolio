import React from 'react'
import AFPortfolioBtn from '../shared/AFPortfolioBtn'
import TransactionCard from './TransactionCard'



export default function TransactionDisplay(props) {


  return (
    <>        
      {/* Payments & Transactions Display */}
      <section className={`flex flex-col w-10/12 bg-gradient-to-b from-emerald-300/20 to-emerald-600/40 shadow-xl my-10 rounded-xl p-4 mx-auto py-8 ${props.currentlyAddingRoommates ? 'hidden' : null}`}>
        <div className='-mt-8 -ml-6 bg-emerald-600 w-fit p-2 rounded-xl my-4'>
          <h4 className='texl-3xl font-bold uppercase text-white'>Payments &amp; Transactions</h4>
        </div>
        <div className='flex flex-col md:flex-row justify-end justify-items-center gap-2'>
            <div className='flex pb-4'>
                <AFPortfolioBtn 
                  btnText='New Transaction' 
                  function={() => props.setTransactionModal([null, 'ADD'])}
                />
            </div>            
        </div>
        
        {/* table section */}
        <div className='grid grid-cols-5 space-x-2 text-sm md:text-base justify-items-center text-center overflow-x-scroll'>
          {/* Row 1 - Descriptions */}
          <div className='px-10'>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Date
            </p>
          </div>          
          <div className='px-10'>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Description
            </p>
          </div>
          <div className='px-10'>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Paid By
            </p>
          </div>
          <div className='px-10'>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Amount
            </p>
          </div>
          <div className='px-10'>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Actions
            </p>
          </div>
          {/* Rows 2+ generaed from array of transactions */}          
          {props.billSplitData.transactions.length > 0 ? props.billSplitData.transactions.map((transaction, transactionIndex) => 
            <TransactionCard 
                transaction={transaction} 
                key={transactionIndex} 
                transactionIndex={transactionIndex}
                setDetailModal={props.setDetailModal} 
                setTransactionModal={props.setTransactionModal}
                billSplitDispatch={props.billSplitDispatch}
            /> ) : null 
          }

        </div>

      </section>  
    </>
  )
}
