import React from 'react'

export default function TransactionDetails(props) {
    return ( <> <section>
        {/* Title Section */}
        <div>
            <h3>Transaction # {props.currentDetails.transactionID}</h3>
        </div>

        {/* Table Details Section */}
        <div className='flex flex-col md:flex-row'>
            {/* Paid Table Section */}
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col'>
                    <p>Date</p>
                    <p>
                        {props.currentDetails.date.toDateString()}
                    </p>
                </div>
                {/* Type of Transaction */}
                <div className='flex flex-col'>
                    <p>Type</p>
                    <p>
                        {props.currentDetails.type}
                    </p>
                </div>
                {/* Transaction Description */}
                <div className='flex flex-col'>
                    <p>Description</p>
                    <p>
                        {props.currentDetails.description}
                    </p>
                </div>
                {/* Paid By (which roommate) */}
                <div className='flex flex-col'>
                    <p>Paid By</p>
                    <p>
                        {props.currentDetails.paidBy}
                    </p>
                </div>
                {/* Total Paid Section */}
                <div className='flex flex-col'>
                    <p>Total</p>
                    <p>
                        ${props.currentDetails.totalPaid}
                    </p>
                </div>
            </div>
            



        </div>

        {/* owed/paid section */}
        {props.currentDetails.type === 'bill' ? 
        <div className='flex flex-col'>
            {props.currentDetails.financialDetails.length > 0 ? props.currentDetails.financialDetails.map((roommateOwes, index) => {
                return <p key={index}>{roommateOwes.name}: {roommateOwes.amount}</p>
            }) : null}
        </div> : null}
        {props.currentDetails.type === 'roommatePayment' ? 
        <div className='flex flex-col'>
            {props.currentDetails.financialDetails.length > 0 ? props.currentDetails.financialDetails.map((roommatePaid, index) => {
                return <p key={index}>{roommatePaid.name}: {roommatePaid.amount}</p>
            }) : null}
        </div> : null}

    </section> </>
    )
  }