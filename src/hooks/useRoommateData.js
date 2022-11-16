import { useReducer } from 'react'


const initialRoommateState = {
    roommates: [{
      name: 'Adrian',
      paid: 0, 
      owes: 0
    },{
      name: "John",
      paid: 0, 
      owes: 0
    },{
      name: 'Jim',
      paid: 0,
      owes: 0
    }]
  }


const roommateDataReducer = ( roommateData, action ) => {
    
    
    switch (action.type) {
        case 'ADD_ROOMMATE': 
        //  will need to move call to close roommateModal back to billSplit page
        //   setAddRoommateModal(false)          
        return roommateData = {
            ...roommateData,
            roommates: [...roommateData.roommates, {
            name: action.userInput,
            paid: 0,
            owes: 0}
        ]}
        case 'UPDATE_ROOMMATES_FINANCES':
            // Update the paid/owes categories for each roommate
            
            return roommateData
        case 'REMOVE_ROOMMATE':
            // Remove a roommate - only allowed if roommate has a 0 in owes section          
            // clone state - remove user from roommates array
            let clonedState = Object.assign({}, roommateData)          
            clonedState.roommates.splice(action.roommateIndexToDelete, 1)                    
            return clonedState
        default:
            // or should I throw new error
            throw new Error('roommateDataReducer Error')
    }
}

export const useRoommateData = () => {
    const [ roommateData , roommateDispatch] = useReducer(roommateDataReducer, initialRoommateState)

    




    return { roommateData, roommateDispatch}
}
                    
