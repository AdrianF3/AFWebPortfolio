import React from 'react'
import { MdCheckCircle, MdCancel, MdPanoramaFishEye } from "react-icons/md";

export default function CityStatus(props) {

  const currentGuessStatus = props.gameData.userGuesses[props.cityIndex].guessed
  // onClick load the index of the city into currentCityIndex state 
  // selected = blue
  // guessed correct
  // guessed incorrect

  // determine border& background color 
  let borderColor = 'border-slate-600 bg-sky-300/30'
  let guessedSymbol = null

  switch (currentGuessStatus) {
    case 'correct':
      borderColor = 'border-emerald-600 bg-emerald-200/30'
      guessedSymbol = <MdCheckCircle color='green' size={20} />
      break;
    case 'incorrect':
      borderColor = 'border-red-600 bg-red-200/30'
      guessedSymbol = <MdCancel color='red' size={20} />
      break;
    default:
      borderColor = 'border-slate-600 bg-sky-300/30'
      guessedSymbol = <MdPanoramaFishEye size={20} />
      break;
  }

  // set border color for currently selected city, overrides switch above
  if (props.gameData.userGuesses[props.cityIndex].guessed === null && props.cityIndex === props.currentCityIndex) {
    borderColor = 'border-sky-600 animate-pulse'
  }



  return (<>
    <section 
      className={`flex flex-col m-1 md:m-2 items-center text-center ${borderColor} border-2 shadow-xl rounded-xl`}
      onClick={() => props.setCurrentCityIndex(props.cityIndex)}
    >
      {/* guessed status */}
      <div className='relative'>
        {guessedSymbol}
      </div>


        <div 
          className='text-xl'          
        >
          <p>{props.cityData[props.cityIndex].name}</p>
        </div>
        <div>          
          <p>{props.gameData.userGuesses[props.cityIndex].guessed !== null ? props.gameData.userGuesses[props.cityIndex].guessed : "Not Yet Guessed"}</p>
        </div>
    </section>
  </>)
}
