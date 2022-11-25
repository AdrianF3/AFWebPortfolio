import React from 'react'

export default function CityStatus(props) {


  // onClick load the index of the city into currentCityIndex state 
  // selected = blue
  // guessed correct
  // guessed incorrect

  // determine border color 
  let borderColor = 'border-slate-600 border-2'
  switch (props.gameData.userGuesses[props.cityIndex].guessed) {
    case 'correct':
      borderColor = 'border-emerald-600 border-2'
      break;
    case 'incorrect':
      borderColor = 'border-red-600 border-2'
      break;
    default:
      borderColor = 'border-slate-600 border-2'
      break;
  }

  if (props.gameData.userGuesses[props.cityIndex].guessed === null && props.cityIndex === props.currentCityIndex) {
    borderColor = 'border-sky-600 border-2'
  }


  return (<>
    <section 
      className={`flex flex-col items-center text-center ${borderColor} bg-emerald-200/30 rounded-xl`}
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
