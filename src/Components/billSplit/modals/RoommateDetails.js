import React from 'react'

export default function RoommateDetails(props) {
  return (<>
    <section className='px-4 text-center'>            
        {/* Title Section */}
        <div className='text-xl font-medium underline underline-offset-2 px-4'>
            <h3>{props.currentDetails.name}</h3>
        </div>
        {/* Table Details Section */}
        <div className='flex flex-col'>
            <p>Total Paid {props.currentDetails.totalPaid}</p>                    
            <h4 className='underline underline-offset-2 pt-2'>Who {props.currentDetails.name} Owes</h4>
            {props.currentDetails.owes.details.length > 0 ? props.currentDetails.owes.details.map((roommate, index) => {                
                if (roommate.name === 'CURRENT_USER') {
                    return null
                }
                return <p>{roommate.name}: {roommate.amount}</p>
            }) : <p>{props.currentDetails.name} doesn't owe anyone</p>}
        </div>                     
    </section>
    </>)
}
