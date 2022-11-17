import React from 'react'

export default function RoommateDetails(props) {
  return (
    <>
        <section>
            {/* Title Section */}
            <div>
                <h3>{props.currentDetails.name}</h3>
            </div>
            
            {/* Table Details Section */}
            <div className='flex flex-col md:flex-row'>
                {/* Paid Table Section */}
                <div className='flex flex-col'>
                    <h4>Paid Details</h4>

                    {props.currentDetails.paid.details.length > 0 ? props.currentDetails.paid.details.map((roommate, index) => {
                        // roommate.name === 'CURRENT_USER' ? return : null
                        if (roommate.name === 'CURRENT_USER') {
                            return null
                        }
                        return <p>{roommate.name}: {roommate.amount}</p>
                    }) : null}

                </div>

                <div className='flex flex-col'>
                    <h4>Owes Details</h4>

                    {props.currentDetails.paid.details.length > 0 ? props.currentDetails.paid.details.map((roommate, index) => {
                        // roommate.name === 'CURRENT_USER' ? return : null
                        if (roommate.name === 'CURRENT_USER') {
                            return null
                        }
                        return <p>{roommate.name}: {roommate.amount}</p>
                    }) : null}

                </div>


            </div>





        </section>
    </>
  )
}
