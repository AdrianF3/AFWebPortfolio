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
        transactionID: 322,
        type: 'bill',
        date: new Date(),      
        paidBy: 'Adrian',
        totalPaid: 400,
        financialDetails: [
          {
            name: 'John',
            owes: 150,
          },
          {
            name: 'Jim',
            owes: 150,
          },
        ],
        evenSplit: false,
        description: 'living room tv upgrade'
      },{
        transactionID: 321,
        type: 'roommatePayment',
        date: new Date(),      
        paidBy: 'Adrian',
        totalPaid: 500,
        financialDetails: [
          {
            name: 'John',
            paid: 150,
          },
          {
            name: 'Jim',
            paid: 150,
          },
        ],
        evenSplit: false,
        description: 'roommate payment'
      }]
}
// END OF INITIAL STATE DATA

// DEFINE REDUCER
const billSplitAppReducer = ( billSplitData, action) => {
  let clonedState = Object.assign({}, billSplitData)

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
          // find index to delete by matching roommates name
          let roommateIndexToDelete = clonedState.roommates.findIndex( roommmate => { return roommmate.name === action.roommateName } )          
          // only delete if roommate name was found in index
          if (roommateIndexToDelete !== -1) {
            clonedState.roommates.splice(roommateIndexToDelete, 1)                                
          }            
            return clonedState
        case 'ADD_TRANSACTION':

            return billSplitData
        case 'DELETE_TRANSACTION':
            // find index to delete by matching ID
            let transactionIndexToDelete = clonedState.transactions.findIndex(transaction => { return transaction.transactionID === action.transactionID } )
            // Only delete if transactionID was found in index
            if (transactionIndexToDelete !== -1) {
              clonedState.transactions.splice(transactionIndexToDelete, 1)              
            }
            return clonedState    
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