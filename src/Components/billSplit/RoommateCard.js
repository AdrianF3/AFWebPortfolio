import React from 'react'
import { moneyFormatter } from '../renderless/moneyFormatter'

export default function RoommateCard(props) {
    
    return ( <>     
    
    {/* RoommateName */}
    <div className=''>
        <p>
            {props.roommate.name}
        </p>
    </div> 
    {/* Paid */}
    <div className=''>
        <p>
            {moneyFormatter.format(props.roommate.totalPaid)}
        </p>
    </div>
    {/* Owes */}
    <div className=''>
        <p>
            {moneyFormatter.format(props.roommate.owes.total)}
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