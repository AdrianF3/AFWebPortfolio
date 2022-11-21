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
        date: new Date('2022', '11', '5'),      
        paidBy: 'Adrian',
        totalPaid: 400,
        financialDetails: [
          {
            name: 'John',
            amount: 150,
          },
          {
            name: 'Jim',
            amount: 150,
          },
        ],
        evenSplit: false,
        description: 'living room tv upgrade'
      },{
        transactionID: 323,
        type: 'bill',
        date: new Date('2022', '09', '5'),      
        paidBy: 'Adrian',
        totalPaid: 400,
        financialDetails: [
          {
            name: 'John',
            amount: 150,
          },
          {
            name: 'Jim',
            amount: 150,
          },
        ],
        evenSplit: false,
        description: 'living room tv upgrade'
      },{
        transactionID: 324,
        type: 'bill',
        date: new Date('2022', '8', '5'),      
        paidBy: 'Adrian',
        totalPaid: 400,
        financialDetails: [
          {
            name: 'John',
            amount: 150,
          },
          {
            name: 'Jim',
            amount: 150,
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
            amount: 150,
          },
          {
            name: 'Jim',
            amount: 150,
          },
        ],
        evenSplit: false,
        description: 'roommate payment'
      }]
}
// END OF INITIAL STATE DATA



const processTransactions = ( clonedState ) => {    
  // Clone Transactions Array
  // console.log('first', first)
  console.log('process transactions called')
  console.log('clonedState', clonedState)

  // Order Transactions Chronologically by date
  let tempTransactions = clonedState.transactions.sort(function(a,b){    
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.date) - new Date(b.date);
  })
  console.log('tempTransactions', tempTransactions)

  // Create new, temporary roommates array, to hold updateded data -> after looping 
  // through all transactions, this array will be the new roommates array saved to state
  
  // Loop through transactionData, calculating what is owed & what has been paid, up to that transaction

  // Start by creating roommate array with no financial details
  let tempRoommatesArray = new Array(clonedState.roommates.length)
  console.log('tempRoommatesArray', tempRoommatesArray)
  for (let index = 0; index < tempRoommatesArray.length; index++) {
    tempRoommatesArray[index] = {
      name: clonedState.roommates[index].name,
      paid: {
        total: 0, 
        details: []
      },
      owes: {
        total: 0,
        details: []
      }
    }
    
  }
  console.log( tempRoommatesArray)
    // for each transaction ->
    clonedState.transactions.forEach(transaction => {
    // - find index of roommate who paid, update paid by totalPaid
    if (transaction.type === 'bill') {
      // loop through the financialDetails array, match the name to the name in tempRoommates array
        
      // when matched, find the paidBy user, in the owes details array, if doesn't exist, create it

      // add the amount owed and update the totall.... probably wrong... bronces just lost and that sucks

      
    }

    if (transaction.type === 'roommatePayment') {
      
    }
    // - loop through each debt in owedBy array -> 
      // - for each debt, find index of the roommate by matching roommateName -> 
        // then update that roommates owes.details to properly reflect that they owe
        // the paidBy user, their owes amount
      
    });
      
      

      // else if type is roommatePayemnt

        // find index of roommate who paid, update paid by totalPaid
          // loop through each payment in debtPaid array ->
            // for each payment, find index in paidBy users paid.details array and 
            // increment the amount paid          


  // END LOOPRING THROUGH ALL TRANSACTION DATA

  

  // return two objects 
    // - the cloned transactions array that is now sorted by date
    // - the new roommatesArray with updated financial totals
  

  return clonedState
}

// DEFINE REDUCER
const billSplitAppReducer = ( billSplitData, action) => {
  let clonedState = Object.assign({}, billSplitData)

    switch (action.type) {
        // ROOMMATE FOCUSED
        case 'ADD_ROOMMATE':         
                  
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
          clonedState.transactions.push(action.transactionToSave)
          clonedState = processTransactions( clonedState )            
          return clonedState
        case 'DELETE_TRANSACTION':
            // find index to delete by matching ID
            let transactionIndexToDelete = clonedState.transactions.findIndex(transaction => { return transaction.transactionID === action.transactionID } )
            // Only delete if transactionID was found in index
            if (transactionIndexToDelete !== -1) {
              clonedState.transactions.splice(transactionIndexToDelete, 1)              
            }
            return clonedState    
        case 'EDIT_TRANSACTION':
            let indexOfTransaction = clonedState.transactions.findIndex((transaction => transaction.transactionID === action.transactionToReplace.transactionID))            
            clonedState.transactions[indexOfTransaction] = action.transactionToReplace
            clonedState = processTransactions( clonedState )            
            return clonedState
        default:
            // or should I throw new error
            throw new Error('roommateDataReducer Error')
    }
}





export const useBillSplitApp = () => {
    const [ billSplitData, billSplitDispatch] = useReducer(billSplitAppReducer, initialStateData)



    return { billSplitData, billSplitDispatch }
}