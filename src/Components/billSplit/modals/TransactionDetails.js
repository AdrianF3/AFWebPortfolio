import React from 'react'

export default function TransactionDetails(props) {
    return ( <> <section className='flex flex-col p-4'>
        {/* Title Section */}
        <div className='flex justify-center p-2'>
            <h3 className='text-2xl'>Transaction # {props.currentDetails.transactionID}</h3>
        </div>

        {/* Table Details Section */}
        <div className='flex flex-col md:flex-row items-center'>
            {/* Paid Table Section */}
            <div className='flex flex-col md:flex-row py-4'>
                
                <div className='flex flex-col px-4'>
                    <p className='text-xl'>Date:</p>
                    <p>
                        {props.currentDetails.date.toDateString()}
                    </p>
                </div>
                {/* Type of Transaction */}
                <div className='flex flex-col px-4'>
                    <p className='text-xl'>Type:</p>
                    <p>
                        {props.currentDetails.type === 'bill' ? 'Bill' : 'Roommate Payment'}
                    </p>
                </div>
                {/* Transaction Description */}
                <div className='flex flex-col px-4'>
                    <p className='text-xl'>Description:</p>
                    <p>
                        {props.currentDetails.description}
                    </p>
                </div>
                {/* Paid By (which roommate) */}
                <div className='flex flex-col px-4'>
                    <p className='text-xl'>Paid By</p>
                    <p>
                        {props.currentDetails.paidBy}
                    </p>
                </div>
                {/* Total Paid Section */}
                <div className='flex flex-col px-4'>
                    <p className='text-xl'>Total Paid:</p>
                    <p>
                        ${props.currentDetails.totalPaid}
                    </p>
                </div>
            </div>
            



        </div>

        {/* owed/paid section */}
        {props.currentDetails.type === 'bill' ? 
        <div className='flex flex-col items-center mx-auto'>
            <h3 className='underline underline-offset-2'>Roommaetes Who Owe {props.currentDetails.paidBy}</h3>
            {props.currentDetails.financialDetails.length > 0 ? props.currentDetails.financialDetails.map((roommateOwes, index) => {
                return <p key={index}>{roommateOwes.name}: {roommateOwes.amount}</p>
            }) : null}
        </div> : null}
        {props.currentDetails.type === 'roommatePayment' ? 
        <div className='flex flex-col items-center mx-auto'>
            <h3 className='underline underline-offset-2'>Roommates Who {props.currentDetails.paidBy} Paid</h3>
            {props.currentDetails.financialDetails.length > 0 ? props.currentDetails.financialDetails.map((roommatePaid, index) => {
                return <p key={index}>{roommatePaid.name}: {roommatePaid.amount}</p>
            }) : null}
        </div> : null}

    </section> </>
    )
  }