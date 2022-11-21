import { useReducer } from "react";

const initialStateData = {
    roommates: [{
        name: 'Adrian',
        totalPaid: 0, 
        owes: {
          total:0,
          details: [{name:'CURRENT_USER', amount:0}, {name: 'John', amount: 0}, {name: 'Jim', amount:0}]
        }
      },{
        name: "John",
        totalPaid: 0, 
        owes: {
          total:0,
          details: [{name: 'Adrian', amount: 0}, {name:'CURRENT_USER', amount:0}, {name: 'Jim', amount:0}]
        }
      },{
        name: 'Jim',
        totalPaid: 0,
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
        paidBy: 'John',
        totalPaid: 100,
        financialDetails: [
          {
            name: 'Adrian',
            amount: 100,
          }
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
      totalPaid: 0,
      owes: {
        total: 0,
        details: []
      }
    }
    
  }
  console.log( tempRoommatesArray)

  // {
  //   name: 'Adrian',
  //   totalPaid: 0, 
  //   owes: {
  //     total:0,
  //     details: [{name:'CURRENT_USER', amount:0}, {name: 'John', amount: 0}, {name: 'Jim', amount:0}]
  //   }
  // }


  // financialDetails: [
  //   {
  //     name: 'John',
  //     amount: 150,
  //   },
  //   {
  //     name: 'Jim',
  //     amount: 150,
  //   },
  // ]
  


    // for each transaction ->
    clonedState.transactions.forEach(transaction => {
    // - find index of roommate who paid, update paid by totalPaid
    // console.log('transaction', transaction)
    let nameOfRoommateWhoPaid = transaction.paidBy
    let indexOfRoommateWhoPaid = tempRoommatesArray.findIndex(roommate => roommate.name === nameOfRoommateWhoPaid)
    // increase the amount this user has paid
    // console.log('tempRoommatesArray', tempRoommatesArray)
    // console.log('indexOfRoommateWhoPaid', indexOfRoommateWhoPaid)
    // console.log('tempRoommatesArray', tempRoommatesArray)
    
    // console.log('indexOfRoommateWhoPaid', indexOfRoommateWhoPaid)
    if (transaction.type === 'bill') {
      tempRoommatesArray[indexOfRoommateWhoPaid].totalPaid = ( tempRoommatesArray[indexOfRoommateWhoPaid].totalPaid + transaction.totalPaid )
      // loop through the financialDetails array, match the name to the name in tempRoommates array
      transaction.financialDetails.forEach(roommateRecord => {
        // find index of name in tempRoommates Array
        let indexOfRoommate = tempRoommatesArray.findIndex(roommate => roommate.name === roommateRecord.name)
        // console.log('tempRoommatesArray', tempRoommatesArray)
        // console.log('tempRoommatesArray[indexOfRoommate]', tempRoommatesArray[indexOfRoommate])
        // console.log('roommateRecord', roommateRecord)

        // increase roommate owes total
        tempRoommatesArray[indexOfRoommate].owes.total = ( tempRoommatesArray[indexOfRoommate].owes.total + roommateRecord.amount) 

        // add record of who they owe what to the paid by user


        let tempRoommateObject = { name: nameOfRoommateWhoPaid }
        // find index of roommateToUpdatew in paidBy Roommate
        let indexOfRoommateToUpdate = tempRoommatesArray[indexOfRoommate].owes.details.findIndex(debtDetail => debtDetail.name === transaction.paidBy)
        console.log('indexOfRoommateToUpdate', indexOfRoommateToUpdate)

        console.log('tempRoommatesArray[indexOfRoommate].owes', tempRoommatesArray[indexOfRoommate].owes)
        // if (tempRoommatesArray[indexOfRoommateWhoPaid].owes.details[indexOfRoommate] !== undefined) {
        if (indexOfRoommateToUpdate  !== -1) {
          console.log('add total called')
          tempRoommateObject = {   
            ...tempRoommateObject,         
            amount: ( tempRoommatesArray[indexOfRoommate].owes.details[indexOfRoommateToUpdate].amount + roommateRecord.amount )
          }          
        } else {
          tempRoommateObject = {    
            ...tempRoommateObject,        
            amount: roommateRecord.amount
          }
        }
        // console.log('tempRoommateObject', tempRoommateObject)
        
        tempRoommatesArray[indexOfRoommate].owes.details[indexOfRoommateWhoPaid] = tempRoommateObject
        // console.log('tempRoommatesArray[indexOfRoommate]', tempRoommatesArray[indexOfRoommate])
      });
        // console.log('tempRoommatesArray', tempRoommatesArray)
      // when matched, find the paidBy user, in the owes details array, if doesn't exist, create it

      // add the amount owed and update the totall.... probably wrong... bronces just lost and that sucks
      clonedState.roommates = tempRoommatesArray
      
    }

    if (transaction.type === 'roommatePayment') {
      // loop through the financialDetails array, match the name to the name in tempRoommates array
      transaction.financialDetails.forEach(roommateRecord => {
        // find index of name in tempRoommates Array
        let indexOfRoommate = tempRoommatesArray.findIndex(roommate => roommate.name === roommateRecord.name)
        tempRoommatesArray[indexOfRoommateWhoPaid].owes.total = ( tempRoommatesArray[indexOfRoommate].owes.total - roommateRecord.amount) 
        console.log('tempRoommatesArray', tempRoommatesArray)
        console.log('tempRoommatesArray[indexOfRoommate]', tempRoommatesArray[indexOfRoommate])
        console.log('roommateRecord', roommateRecord)

        // increase roommate owes total
        // tempRoommatesArray[indexOfRoommate].owes.total = ( tempRoommatesArray[indexOfRoommate].owes.total + roommateRecord.amount) 

        // add record of who they owe what to the paid by user


        // let tempRoommateObject = { name: roommateRecord.name }
        // if (tempRoommatesArray[indexOfRoommateWhoPaid].owes.details.total !== undefined) {
        //   tempRoommateObject = {            
        //     ...tempRoommateObject,
        //     // amount: ( tempRoommatesArray[indexOfRoommate].owes.details[indexOfRoommateWhoPaid].amount - roommateRecord.amount )
        //     amount: ( tempRoommatesArray[indexOfRoommateWhoPaid].owes.details[indexOfRoommate].amount - roommateRecord.amount )
        //   }          
        // } else {
        //   tempRoommateObject = {            
        //     ...tempRoommateObject,
        //     amount: roommateRecord.amount
        //   }
        // }
        // console.log('tempRoommateObject', tempRoommateObject)
        
        // tempRoommatesArray[indexOfRoommate].owes.details[indexOfRoommateWhoPaid] = tempRoommateObject
        // tempRoommatesArray[indexOfRoommateWhoPaid].owes.details[indexOfRoommate] = tempRoommateObject
        console.log('tempRoommatesArray[indexOfRoommate]', tempRoommatesArray[indexOfRoommate])
      });
        console.log('tempRoommatesArray', tempRoommatesArray)
      // when matched, find the paidBy user, in the owes details array, if doesn't exist, create it

      // add the amount owed and update the totall.... probably wrong... bronces just lost and that sucks
      clonedState.roommates = tempRoommatesArray
      
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