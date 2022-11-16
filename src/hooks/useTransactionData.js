import { useReducer } from "react";


const initialTransactionState = {
    transactions: [{
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
    }]
  }


const transactionDataReducer = ( transactionData, action ) => {
    switch(action.type) {
        case 'ADD_TRANSACTION':
  
          return transactionData
        case 'DELETE_TRANSACTION':
  
          return transactionData
  
        case 'EDIT_TRANSACTION':
  
          return transactionData
        default:
          throw new Error('TransactionDataReducer Error')
      }
}

export const useTransactionData = () => {
    const [ transactionData, transactionDispatch ] = useReducer(transactionDataReducer, initialTransactionState)



    return { transactionData, transactionDispatch }
}