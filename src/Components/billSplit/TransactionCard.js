import React from 'react'
import { moneyFormatter } from '../renderless/moneyFormatter'

export default function TransactionCard(props) {
  return (
    <>        
        <div className='px-10'>
            <p>
                {props.transaction.date.toDateString()}
            </p>
        </div>        
        {/* Transaction Description */}
        <div className='px-10'>
            <p>
                {props.transaction.description}
            </p>
        </div>
        {/* Paid By (which roommate) */}
        <div className='px-10'>
            <p>
                {props.transaction.paidBy}
            </p>
        </div>
        {/* Total Paid Section */}
        <div className='px-10'>
            <p>
                {moneyFormatter.format( props.transaction.totalPaid)}
            </p>
        </div>
        {/* Edit Buttons */}
        <div className='flex flex-row px-10 justify-evenly mx-auto md:gap-4'>
            <div>
                <i 
                    className='material-icons'
                    onClick={() => props.setDetailModal([props.transactionIndex, 'transaction', 'details'])}
                    >info</i>
            </div>            
            <div>
                <i 
                    className='material-icons'
                    onClick={() => props.setTransactionModal([props.transactionIndex, 'EDIT'])}                
                >edit</i>
            </div>
            <div>
                <i 
                    className='material-icons'
                    onClick={() => props.billSplitDispatch({type: 'DELETE_TRANSACTION', transactionID: props.transaction.transactionID})}
                >delete
                </i>
            </div>
        </div>
    </>
  )
}
