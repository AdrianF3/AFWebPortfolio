import { useReducer } from "react";

//  DUMMY STATE DATA  
const dummyData = {
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
        paidBy: 'Jim',
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

// INITIAL STATE DATA (emppty by default)
const initialStateData = {
    roommates: [],
      transactions: []
}



const processTransactions = ( paramState ) => {    
  // Order Transactions Chronologically by date
  let tempTransactions = paramState.transactions.sort(function(a,b){    
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.date) - new Date(b.date);
  })
  // console.log('tempTransactions', tempTransactions)

  // Create new, temporary roommates array, to hold updateded data -> after looping 
  // through all transactions, this array will be the new roommates array saved to state
  let tempRoommatesArray = new Array(paramState.roommates.length)
  
  for (let index = 0; index < tempRoommatesArray.length; index++) {
    tempRoommatesArray[index] = {
      name: paramState.roommates[index].name,
      totalPaid: 0,
      owes: {
        total: 0,
        details: []
      }
    }
    
  }
  
  
  // for each transaction ->
  paramState.transactions.forEach(transaction => {  
  
    let nameOfRoommateWhoPaid = transaction.paidBy
    let indexOfRoommateWhoPaid = tempRoommatesArray.findIndex(roommate => roommate.name === nameOfRoommateWhoPaid)

    
    // ** FOR TYPE BILL **
    if (transaction.type === 'bill') {
      tempRoommatesArray[indexOfRoommateWhoPaid].totalPaid = ( tempRoommatesArray[indexOfRoommateWhoPaid].totalPaid + transaction.totalPaid )
      // loop through the financialDetails array, match the name to the name in tempRoommates array
      transaction.financialDetails.forEach(roommateRecord => {
        // find index of name in tempRoommates Array
        let indexOfRoommate = tempRoommatesArray.findIndex(roommate => roommate.name === roommateRecord.name)

        // increase roommate owes total
        tempRoommatesArray[indexOfRoommate].owes.total = ( tempRoommatesArray[indexOfRoommate].owes.total + roommateRecord.amount) 

        // add record of who they owe what to the paid by user
        let tempRoommateObject = { name: nameOfRoommateWhoPaid }
        // find index of roommateToUpdatew in paidBy Roommate
        let indexOfRoommateToUpdate = tempRoommatesArray[indexOfRoommate].owes.details.findIndex(debtDetail => debtDetail.name === transaction.paidBy)

        // if (tempRoommatesArray[indexOfRoommateWhoPaid].owes.details[indexOfRoommate] !== undefined) {
        if (indexOfRoommateToUpdate  !== -1) {
          // console.log('add total called')
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
        
        tempRoommatesArray[indexOfRoommate].owes.details[indexOfRoommateWhoPaid] = tempRoommateObject      
      })      
      // add the amount owed and update the totall.... probably wrong... bronces just lost and that sucks
      paramState.roommates = tempRoommatesArray    
    }

    // ** FOR TYPE ROOMMATE PAYMENT **
    if (transaction.type === 'roommatePayment') {
      // loop through the financialDetails array, match the name to the name in tempRoommates array
      transaction.financialDetails.forEach(roommateRecord => {              
        // console.log('roommateRecord', roommateRecord)
        if (roommateRecord.amount > 0) {
          // console.log('transaction', transaction)
          // ** need to have index or name of the user who paid - refactor to use transaction object instead of using the roommate record, which didn't have enough info
          // using the new data - should update the user who paid to lower their owes balance - won't update since this will continue to show the total paid by each roommate
          // also use the line below to work on updating the roommate[index]owes.details value properly
  
          
          console.log('tempRoommatesArray', tempRoommatesArray)                
          
          let tempRoommateObject = tempRoommatesArray[tempRoommatesArray.findIndex(roommate => roommate.name === transaction.paidBy)]
          // console.log('tempRoommateObject', tempRoommateObject)                                
          let indexOfRoommatePaidBack = tempRoommatesArray.findIndex(roommate => roommate.name === roommateRecord.name)
          // console.log('indexOfRoommatePaidBack', indexOfRoommatePaidBack)
          
          // reduce the amount owed by the roommate who paid 
          // console.log('tempRoommateObject.owes.details[indexOfRoommatePaidBack]', tempRoommateObject.owes.details[indexOfRoommatePaidBack])
          if (tempRoommateObject.owes.details[indexOfRoommatePaidBack].amount !== undefined) {
            tempRoommateObject.owes.details[indexOfRoommatePaidBack].amount = ( tempRoommateObject.owes.details[indexOfRoommatePaidBack].amount - roommateRecord.amount)          
          }
          // reduce the total amount owed for the roommate who paid
          tempRoommateObject.owes.total = ( tempRoommateObject.owes.total - roommateRecord.amount)
          // console.log('tempRoommateObject', tempRoommateObject)
  
          tempRoommatesArray[tempRoommatesArray.findIndex(roommate => roommate.name === transaction.paidBy)] = tempRoommateObject
          // console.log('tempRoommatesArray', tempRoommatesArray)        
          
        }
        
      })          
      paramState.roommates = tempRoommatesArray    
    }  
  });

  return paramState
}
// END OF PROCESS TRANSACTION FUNCTION




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
            totalPaid: 0,
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
        case 'LOAD_DUMMY_DATA':
            let dummyDataToSave = processTransactions(dummyData)
            return dummyDataToSave
        default:  
            // or should I throw new error
            throw new Error('roommateDataReducer Error')
    }
}





export const useBillSplitApp = () => {
    const [ billSplitData, billSplitDispatch] = useReducer(billSplitAppReducer, initialStateData)



    return { billSplitData, billSplitDispatch }
}