import React from 'react'

export default function CityStatus(props) {


  // onClick load the index of the city into currentCityIndex state 
  // selected = blue
  // guessed correct
  // guessed incorrect

  // determine border& background color 
  let borderColor = 'border-slate-600 bg-sky-300/30'
  switch (props.gameData.userGuesses[props.cityIndex].guessed) {
    case 'correct':
      borderColor = 'border-emerald-600 bg-emerald-200/30'
      break;
    case 'incorrect':
      borderColor = 'border-red-600 bg-red-200/30'
      break;
    default:
      borderColor = 'border-slate-600 bg-sky-300/30'
      break;
  }

  // set border color for currently selected city, overrides switch above
  if (props.gameData.userGuesses[props.cityIndex].guessed === null && props.cityIndex === props.currentCityIndex) {
    borderColor = 'border-sky-600 animate-pulse'
  }


  return (<>
    <section 
      className={`flex flex-col items-center text-center ${borderColor} border-2  rounded-xl`}
      onClick={() => props.setCurrentCityIndex(props.cityIndex)}
    >
        <div 
          className=''          
        >
          <p>{props.cityData[props.cityIndex].name}</p>
        </div>
        <div>          
          <p>{props.gameData.userGuesses[props.cityIndex].guessed !== null ? props.gameData.userGuesses[props.cityIndex].guessed : "Not Yet Guessed"}</p>
        </div>
    </section>
  </>)
}
