import React from 'react'
import AFPortfolioBtn from '../../shared/AFPortfolioBtn'
import RoommateDetails from './RoommateDetails'
import TransactionDetails from './TransactionDetails'


export default function DetailsModal(props) {
  

  // Determine the transaction and detials to view/edit
  let currentDetails = null
  switch (props.detailModal[1]) {
    case 'roommate':
      currentDetails = props.billSplitData.roommates[props.detailModal[0]]
      break
    case 'transaction':      
      currentDetails = props.billSplitData.transactions[props.detailModal[0]]
      break
  
    default:
      console.log('Details Modal Switch Error')
      props.setDetailModal(false)
      break
  }
  


  return ( <>    
      <section className='w-screen h-screen fixed flex flex-col justify-center items-center bg-cyan-600/80 z-10'>        
        <section className='flex flex-col bg-white rounded-t-2xl rounded-b-lg'> 
          {/* close button for upper right corner */}  
          <div 
            className='flex flex-row h-10 w-10'
            onClick={() => props.setDetailModal(false)}
            >
              <i className='material-icons relative -top-6 left-28 bg-red-400 md:hover:bg-red-600  p-2 m-1 text-sm font-bold rounded-xl'>close</i>
          </div>
    
          {/* Main Section Of Modal */}
          <div className='flex flex-col items-center w-fit h-fit'>

            {props.detailModal[1] === 'roommate' ? <RoommateDetails currentDetails={currentDetails} /> : null}
            {props.detailModal[1] === 'transaction' ? <TransactionDetails currentDetails={currentDetails} /> : null}                                        
              
            <div className='flex flex-row gap-2 p-4'>              
              <AFPortfolioBtn
                btnText='Cancel'
                type='cancel'
                function={() => props.setDetailModal(false)}
                />
            </div>
          
        </div> 
      </section>
    </section>
  </>)
}