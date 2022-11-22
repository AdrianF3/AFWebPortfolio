import React from 'react'

export default function TransactionCard(props) {
  return (
    <>
        <div className=''>
            <p>
                {props.transaction.date.toDateString()}
            </p>
        </div>        
        {/* Transaction Description */}
        <div className=''>
            <p>
                {props.transaction.description}
            </p>
        </div>
        {/* Paid By (which roommate) */}
        <div className=''>
            <p>
                {props.transaction.paidBy}
            </p>
        </div>
        {/* Total Paid Section */}
        <div className=''>
            <p>
                ${props.transaction.totalPaid}
            </p>
        </div>
        {/* Edit Buttons */}
        <div className='flex flex-row gap-4 '>            
            <i 
                className='material-icons'
                onClick={() => props.setDetailModal([props.transactionIndex, 'transaction', 'details'])}
                >info</i>
            <i 
                className='material-icons'
                onClick={() => props.setTransactionModal([props.transactionIndex, 'EDIT'])}                
            >edit</i>
            <i 
                className='material-icons'
                onClick={() => props.billSplitDispatch({type: 'DELETE_TRANSACTION', transactionID: props.transaction.transactionID})}
            >delete
            </i>
        </div>
    </>
  )
}
