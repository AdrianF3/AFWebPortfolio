import React from 'react'

export default function TransactionCard(props) {
  return (
    <>
        <div>
            <p>
                {props.transaction.date.toDateString()}
            </p>
        </div>
        {/* Type of Transaction */}
        {/* <div>
            <p>
                {props.transaction.type}
            </p>
        </div> */}
        {/* Transaction Description */}
        <div>
            <p>
                {props.transaction.description}
            </p>
        </div>
        {/* Paid By (which roommate) */}
        <div>
            <p>
                {props.transaction.paidBy}
            </p>
        </div>
        {/* Total Paid Section */}
        <div>
            <p>
                ${props.transaction.totalPaid}
            </p>
        </div>
        {/* Edit Buttons */}
        <div className='flex flex-row gap-4'>            
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
