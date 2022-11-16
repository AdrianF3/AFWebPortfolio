import React from 'react'

export default function RoommateCard(props) {


    return ( <> 
    {/* RoommateName */}
    <div>
        <p className='text-xs md:text-base'>
            {props.roommate.name}
        </p>
    </div> 
    {/* Paid */}
    <div>
        <p>
            {props.roommate.paid}
        </p>
    </div>
    {/* Owes */}
    <div>
        <p>
            {props.roommate.owes}
        </p> 
    </div> 
    {/* Edit Buttons */}
    <div className='flex flex-row gap-4'>            
        {props.currentlyAddingRoommates ? 
            <i 
                className='material-icons'
                onClick={() => props.roommateDispatch({ type: 'REMOVE_ROOMMATE', roommateIndexToDelete: props.roommateIndex})}
            >delete</i> : null
        }
        <i className='material-icons'>info</i>
    </div>            
    </>)
}