import React, { useState } from 'react'
import BillSplitExplainer from '../components/billSplit/BillSplitExplainer'
import AddEditTransactionModal from '../components/billSplit/modals/AddEditTransactionModal'
import AddRoommateModal from '../components/billSplit/modals/AddRoommateModal'
import DetailsModal from '../components/billSplit/modals/DetailsModal'
import RoommateDisplay from '../components/billSplit/RoommateDisplay'
import TransactionDisplay from '../components/billSplit/TransactionDisplay'
import ContactSection from '../components/ContactSection'
import HeaderNavigation from '../components/HeaderNavigation'
import { useBillSplitApp } from '../hooks/useBillSplitApp'

export default function BillSplit() {
  const [ addRoommateModal, setAddRoommateModal ] = useState(false)
  const [ transactionModal, setTransactionModal ] = useState(false)
  const [ detailModal, setDetailModal ] = useState(false)
  const [ currentlyAddingRoommates, setCurrentlyAddingRoommates ] = useState(true)

  // Load billSplitApp state and reducer functions
  const { billSplitData, billSplitDispatch } = useBillSplitApp()
  

  // Move to helper function that reducer can call - used after adding, deleting or editing a transaction
  const processTransactions = () => {    
    // Clone Transactions Array

    // Order Transactions Chronologically by date

    // Create new, temporary roommates array, to hold updateded data -> after looping 
    // through all transactions, this array will be the new roommates array saved to state
    
    // Loop through transactionData, calculating what is owed & what has been paid, up to that transaction
    
      // for each transaction ->
        // if type is bill
        
          // - find index of roommate who paid, update paid by totalPaid
          // - loop through each debt in owedBy array -> 
            // - for each debt, find index of the roommate by matching roommateName -> 
              // then update that roommates owes.details to properly reflect that they owe
              // the paidBy user, their owes amount

        // else if type is roommatePayemnt

          // find index of roommate who paid, update paid by totalPaid
            // loop through each payment in debtPaid array ->
              // for each payment, find index in paidBy users paid.details array and 
              // increment the amount paid          


    // END LOOPRING THROUGH ALL TRANSACTION DATA

    

    // return two objects 
      // - the cloned transactions array that is now sorted by date
      // - the new roommatesArray with updated financial totals
    


  }

  
  

  
// console.log(billSplitData)

  return (<>
    {/* Display Add Roommate Modal */}
    {addRoommateModal ? <AddRoommateModal 
    billSplitData={billSplitData}
      billSplitDispatch={billSplitDispatch}
      setAddRoommateModal={setAddRoommateModal}
    /> : null}
    {/* Display RoommateDetailsModal */}
    {detailModal ? <DetailsModal
      billSplitData={billSplitData}
      billSplitDispatch={billSplitDispatch}
      detailModal={detailModal}
      setDetailModal={setDetailModal}
    /> : null}
    {/* Transaction Modal, Add & Edit */}
    
    {transactionModal ? <AddEditTransactionModal
      billSplitData={billSplitData}
      billSplitDispatch={billSplitDispatch}
      transactionModal={transactionModal}
      setTransactionModal={setTransactionModal}
    /> : null}
    
    <HeaderNavigation/>
    <section>
      {/* Page Title and Description */}
      <div className=''>
        {/* Upper Header Section */}
         <BillSplitExplainer />

      </div>
      
      {/* App Introduction & Description */}
      <div className='flex flex-col w-10/12 mx-auto px-2 py-8'>
        <h2 className='text-3xl'>
          Bill Splitter
        </h2>
        <p className='py-2'>
          Built with roommates and friends in mind
        </p>        
      </div>


      {/* Roommate Table Display */}
      <RoommateDisplay
        billSplitData={billSplitData}
        billSplitDispatch={billSplitDispatch}
        setAddRoommateModal={setAddRoommateModal}
        setDetailModal={setDetailModal}
        currentlyAddingRoommates={currentlyAddingRoommates}
        setCurrentlyAddingRoommates={setCurrentlyAddingRoommates}
      />


      
      {/* Payments & Transactions Display */}
      <TransactionDisplay
        billSplitData={billSplitData}
        billSplitDispatch={billSplitDispatch}
        currentlyAddingRoommates={currentlyAddingRoommates}
        setDetailModal={setDetailModal}
        setTransactionModal={setTransactionModal}
      />
      

    </section>
    <ContactSection/>
    </>
  )
}
