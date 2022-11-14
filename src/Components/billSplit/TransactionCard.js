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
        <div className='flex flex-row'>            
            <i className='material-icons'>info</i>
            <i className='material-icons'>edit</i>
            <i className='material-icons'>delete</i>
        </div>
    </>
  )
}
