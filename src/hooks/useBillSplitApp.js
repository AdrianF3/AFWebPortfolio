import { useReducer } from "react";

const initialStateData = {
    roommates: [{
        name: 'Adrian',
        paid: {
          total: 0,
          details: [{name:'CURRENT_USER', amount:0}, {name: 'John', amount: 0}, {name: 'Jim', amount:0}]
        }, 
        owes: {
          total:0,
          details: [{name:'CURRENT_USER', amount:0}, {name: 'John', amount: 0}, {name: 'Jim', amount:0}]
        }
      },{
        name: "John",
        paid: {
          total: 0,
          details: [{name: 'Adrian', amount: 0}, {name:'CURRENT_USER', amount:0}, {name: 'Jim', amount:0}]
        }, 
        owes: {
          total:0,
          details: [{name: 'Adrian', amount: 0}, {name:'CURRENT_USER', amount:0}, {name: 'Jim', amount:0}]
        }
      },{
        name: 'Jim',
        paid: {
          total: 0,
          details: [{name: 'Adrian', amount: 0}, {name: 'Adrian', amount: 0}, {name: 'John', amount:0}, {name:'CURRENT_USER', amount:0}]
        },
        owes: {
          total:0,
          details: [{name: 'Adrian', amount: 0}, {name: 'Adrian', amount: 0}, {name: 'John', amount:0}, {name:'CURRENT_USER', amount:0}]
        }
      }],
      transactions: [{
        type: 'bill',
        date: new Date(),      
        paidBy: 'Roommate #1',
        totalPaid: 500,
        owedBy: [
          {
            name: 'Roommate #2',
            owes: 150,
          },
          {
            name: 'Roommate #3',
            owes: 150,
          },
        ],
        evenSplit: false,
        description: 'living room tv upgrade'
      },{
        type: 'roommatePayment',
        date: new Date(),      
        paidBy: 'Roommate #1',
        totalPaid: 500,
        debtsPaid: [
          {
            name: 'Roommate #2',
            paid: 150,
          },
          {
            name: 'Roommate #3',
            paid: 150,
          },
        ],
        evenSplit: false,
        description: 'living room tv upgrade'
      }]
}
// END OF INITIAL STATE DATA

// DEFINE REDUCER
const billSplitAppReducer = ( billSplitData, action) => {
    switch (action.type) {
        // ROOMMATE FOCUSED
        case 'ADD_ROOMMATE': 
        //  will need to move call to close roommateModal back to billSplit page
        //   setAddRoommateModal(false)
        console.log(billSplitData)          
        return billSplitData = {
            ...billSplitData,
            roommates: [...billSplitData.roommates, {
            name: action.userInput,
            paid: {
              total: 0,
              details: []
            },
            owes: {
              total:0,
              details: []
            }
          }
        ]}        
        case 'REMOVE_ROOMMATE':
            // Remove a roommate - only allowed if roommate has a 0 in owes section          
            // clone state - remove user from roommates array
            let clonedState = Object.assign({}, billSplitData)          
            clonedState.roommates.splice(action.roommateIndexToDelete, 1)                    
            return clonedState

        // TRANSACTION FOCUSED
        case 'ADD_TRANSACTION':

            return billSplitData
        case 'DELETE_TRANSACTION':
    
            return billSplitData
    
        case 'EDIT_TRANSACTION':

            return billSplitData
        default:
            // or should I throw new error
            throw new Error('roommateDataReducer Error')
    }
}





export const useBillSplitApp = () => {
    const [ billSplitData, billSplitDispatch] = useReducer(billSplitAppReducer, initialStateData)



    return { billSplitData, billSplitDispatch }
}