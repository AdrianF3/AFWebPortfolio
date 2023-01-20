import React, { useState } from 'react'
import BillSplitExplainer from '../components/billSplit/BillSplitExplainer'
import AddEditTransactionModal from '../components/billSplit/modals/AddEditTransactionModal'
import AddRoommateModal from '../components/billSplit/modals/AddRoommateModal'
import DetailsModal from '../components/billSplit/modals/DetailsModal'
import RoommateDisplay from '../components/billSplit/RoommateDisplay'
import TransactionDisplay from '../components/billSplit/TransactionDisplay'
import ContactSection from '../components/ContactSection'
import NavigationBar from '../components/NavigationBar'
import { useBillSplitApp } from '../hooks/useBillSplitApp'
import { handleScrollToBottom } from '../components/renderless/handleScrollToBottom'
import { useKeyPress } from '../hooks/useKeyPress'
import { useEffect } from 'react'
import { handleScrollToTop } from '../components/renderless/handleScrollToTop'

export default function RoommateBillSplit() {
  const [ addRoommateModal, setAddRoommateModal ] = useState(false)
  const [ transactionModal, setTransactionModal ] = useState(false)
  const [ detailModal, setDetailModal ] = useState(false)
  const [ currentlyAddingRoommates, setCurrentlyAddingRoommates ] = useState(true)

  // Load billSplitApp state and reducer functions
  const { billSplitData, billSplitDispatch } = useBillSplitApp()


  const closeModal = useKeyPress("Escape")

  if (closeModal.keyPressed && addRoommateModal) {
    setAddRoommateModal(false)
  }
  if (closeModal.keyPressed && transactionModal) {
    setTransactionModal(false)
  }
  if (closeModal.keyPressed && detailModal) {
    setDetailModal(false)
  }


  // only run this useEffect once when page first loads
  useEffect(() => {
    handleScrollToTop()
  }, [])


  
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
    
    <NavigationBar handleScrollToBottom={handleScrollToBottom}/>
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
