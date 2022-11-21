import React from 'react'
import AFPortfolioBtn from '../shared/AFPortfolioBtn'
import RoommateCard from './RoommateCard'

export default function RoommateDisplay(props) {
  
return (
    <>
    {/* Roommate Table Display */}
    <section className='flex flex-col w-10/12 mx-auto bg-sky-600/20 p-4 rounded-xl'>
        <div className='-mt-8 -ml-6 bg-sky-600 w-fit p-2 rounded-xl my-4'>
          <h4 className='texl-2xl font-bold uppercase text-white'>Roommates</h4>
        </div>
        {/* table section */}
        <div className='grid grid-cols-4 text-sm'>
          {/* Row 1 - Descriptions */}
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Roommates
            </p>
          </div>
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Paid
            </p>
          </div>
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Owes
            </p>
          </div>          
          <div>
            <p className='uppercase tracking-wide underline underline-offset-2 pb-2'>
              Actions
            </p>
          </div>          
          {/* Rows 2+ generated from array of roommateData */}
          {props.billSplitData.roommates.length  > 0 ? props.billSplitData.roommates.map((roommate, roommateIndex) => 
            <RoommateCard 
              roommate={roommate} 
              billSplitDispatch={props.billSplitDispatch}
              roommateIndex={roommateIndex} 
              currentlyAddingRoommates={props.currentlyAddingRoommates}
              setDetailModal={props.setDetailModal}
              key={roommateIndex} /> ) : 
            null 
          }
        </div>

        {props.currentlyAddingRoommates ? 
          <div className='flex flex-col md:flex-row justify-evenly pt-8 border-t-2 border-slate-800'>
            {/* Add Roommate Button - if less than 5 current roommates, otherwse display full message & disable button */}
            {props.billSplitData.roommates.length < 5 ? 
              <>
                <div>
                  <AFPortfolioBtn 
                  btnText='Add Roommate' 
                  function={props.setAddRoommateModal}
                  />
                  <AFPortfolioBtn 
                  btnText='Load Dummy Data' 
                  function={() => props.billSplitDispatch({ type: 'LOAD_DUMMY_DATA'}, props.setCurrentlyAddingRoommates(false))}
                  />
                </div>
              </> : <AFPortfolioBtn
                btnText='Max. Roomates Reached'  
                type='disabeled'
                />        
            }
            {/* Begin Adding Transactions Button */}
            {props.billSplitData.roommates.length >= 2 ?
              <AFPortfolioBtn 
                btnText='Done Adding Roommates' 
                function={() => props.setCurrentlyAddingRoommates(false)}
              /> : <AFPortfolioBtn 
              btnText='Add at least two roommate to continue' 
              type='disabeled'              
            />
            }        
          </div> : null
        }

      </section>
    </>
  )
}
