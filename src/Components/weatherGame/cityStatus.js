import React from 'react'
import { MdCheckCircle, MdCancel, MdPanoramaFishEye } from "react-icons/md";

export default function CityStatus(props) {

  
  // determine border& background color 
  let borderColor = 'border-slate-600 bg-sky-300/30'
  let guessedSymbol = null

  switch (props.currentGuessStatus) {
    case 'correct':
      borderColor = 'border-emerald-600 bg-gradient-to-br from-emerald-200/30 to-emerald-300'
      guessedSymbol = <MdCheckCircle color='green' size={20} />
      break;
    case 'incorrect':
      borderColor = 'border-red-600 bg-gradient-to-br from-red-200/30 to-red-300'
      guessedSymbol = <MdCancel color='red' size={20} />
      break;
    default:
      borderColor = 'border-slate-600 bg-gradient-to-br from-sky-200 to-sky-400'
      guessedSymbol = <MdPanoramaFishEye size={20} />
      break;
  }

  // set border color for currently selected city, overrides switch above
  if (props.currentGuessStatus === null && props.cityIndex === props.currentCityIndex) {
    borderColor = 'border-sky-600 animate-pulse'
  }



  return (<>
    <section 
      className={`flex flex-col m-1 md:m-2 items-center text-center ${borderColor} border-2 shadow-xl rounded-xl rounded-tr-3xl rounded-bl-3xl
      active:bg-blue-400 active:scale-90`}
      onClick={() => props.handleNewCity(props.cityIndex)}
    >
      {/* guessed status */}
      <div className='relative -right-14 bg-slate-100 border-2 border-slate-400 p-1 rounded-full -top-4'>
        {guessedSymbol}
      </div>


        <div className='text-xl pb-1 text-wide uppercase'>
          <p className=''>{props.city.name}</p>
        </div>        
    </section>
  </>)
}
