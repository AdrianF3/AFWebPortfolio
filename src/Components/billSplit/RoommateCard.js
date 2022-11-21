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
            {props.roommate.totalPaid}
        </p>
    </div>
    {/* Owes */}
    <div>
        <p>
            {props.roommate.owes.total}
        </p> 
    </div> 
    {/* Edit Buttons */}
    <div className='flex flex-row gap-4'>            
        {props.currentlyAddingRoommates ? 
            <i 
                className='material-icons'
                onClick={() => props.billSplitDispatch({ type: 'REMOVE_ROOMMATE', roommateName: props.roommate.name})}
            >delete</i> : null
        }
        {!props.currentlyAddingRoommates ? 
            <i 
                className='material-icons'
                onClick={() => props.setDetailModal([props.roommateIndex, 'roommate', 'details'])}
            >info</i> : null
        }        
    </div>            
    </>)
}