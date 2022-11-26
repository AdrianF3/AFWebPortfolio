import React, { useEffect, useState } from 'react'
import ContactSection from '../components/ContactSection'
import HeaderNavigation from '../components/HeaderNavigation'
import axios from 'axios';
import WeatherCard from '../components/weatherGame/WeatherCard';
import CityStatus from '../components/weatherGame/CityStatus'

export default function WeatherProject() {
  // let weatherGuessOrder = [ 'default', 'modifiedA', 'modifiedB']
  const [ weatherGuessOrder, setWeatherGuessOrder ] = useState([ 'default', 'modifiedA', 'modifiedB'])
  
  const [ gameData, setGameData ] = useState({
    score: 0,
    userGuesses: [
      {
        guessed: null
      },
      {
        guessed: null
      },
      {
        guessed: null
      },
      {
        guessed: null
      },
      {
        guessed: null
      },
      {
        guessed: null
      },
      {
        guessed: null
      },
      {
        guessed: null
      },
      {
        guessed: null
      },
      {
        guessed: null
      },
    ]
  })
  const [ currentCityIndex, setCurrentCityIndex ] = useState(0)
  const [ cityData, setCityData ] = useState([{
    name: 'Los Angeles',
    lat: '34.05',
    lon: '-118.24',
    data: null,
    dataModifiedA: null,
    dataModifiedB: null
  },{ 
    name: 'Dallas',
    lat: '32.77',
    lon: '96.79',
    data: null,
    dataModifiedA: null,
    dataModifiedB: null
  },{ 
    name: 'Chicago',
    lat: '41.87',
    lon: '87.62',
    data: null,
    dataModifiedA: null,
    dataModifiedB: null
  },{ 
    name: 'Miami',
    lat: '25.77',
    lon: '-80.19',
    data: null,
    dataModifiedA: null,
    dataModifiedB: null
  },{ 
    name: 'Boston',
    lat: '42.35',
    lon: '-71.06',
    data: null,
    dataModifiedA: null,
    dataModifiedB: null
  },{ 
    name: 'San Francisco',
    lat: '37.77',
    lon: '-122.41',
    data: null,
    dataModifiedA: null,
    dataModifiedB: null
  },{ 
    name: 'Las Vegas',
    lat: '36.16',
    lon: '-115.14',
    data: null,
    dataModifiedA: null,
    dataModifiedB: null
  },{ 
    name: 'Honolulu',
    lat: '21.30',
    lon: '-157.85',
    data: null,
    dataModifiedA: null,
    dataModifiedB: null
  },{ 
    name: 'Denver',
    lat: '39.73',
    lon: '-104.98',
    data: null,
    dataModifiedA: null,
    dataModifiedB: null
  },{ 
    name: 'New York',
    lat: '40.71',
    lon: '-74.00',
    data: null,
    dataModifiedA: null,
    dataModifiedB: null
  }]
)  

  // CAN I REFACTOR TO IMPROVE OR REMOVE THIS
  // if current city index < 9, reset to 0
  // if (currentCityIndex > 9) {
  //   setCurrentCityIndex(0)
  // }
  
  // create an array, limited to 3 positions, saving the keys, default, modifiedA, and modifiedB
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
  // attempt using useEffect
  useEffect(() => {

    // setWeatherGuessOrder( shuffleArray(weatherGuessOrder) )
    shuffleArray(weatherGuessOrder)
    


    // if weather data for current city not already loaded, 

    // console.log('use effect called')
    // **  research better way to check against null
    if (cityData[currentCityIndex].data == null) {
      let apiURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${cityData[currentCityIndex].lat}&lon=${cityData[currentCityIndex].lon}&appid=186bd501fb99a25eb3920a4deee082d1`
      // console.log('apiURL', apiURL)
      axios.get(apiURL)
      .then((response) => {        
        console.log('response', response)
        // deep clone of the existing cityData
        let cityDataClone = JSON.parse(JSON.stringify(cityData))
        // update the data for currently selected city
        cityDataClone[currentCityIndex].data = response.data
        // call modified function for modified A
        cityDataClone[currentCityIndex].dataModifiedA = response.data
        // call modified function for modified B
        cityDataClone[currentCityIndex].dataModifiedB = response.data
        setCityData([...cityDataClone])        

      })      
    }
  
  }, [currentCityIndex, cityData, weatherGuessOrder])


  // console.log('cityData', cityData)
  

  // build array of random functions that slightly modify the weather fields


  // include fields: 

  // 4 functions to randomize data
  // 1) daily high weather by increase by 3, daily high increase by 1, humidity, add 5%
  // 2) decrease daily low, delay sunset by 3 minutes
  // 3) decrease daily low by 2, increase daily high by 4, reduce humidity
  // 4) move sunrise/sunset earlier in the day by a few minutes, lower daily high by 3 degrees


  // END GOAL, display weather cards for user to guess in a random order
  // console.log('weatherGuessOrder', weatherGuessOrder)
  // console.log('currentCityIndex', currentCityIndex)


  // console.log('currentCityIndex', currentCityIndex)

  return (<>
    <HeaderNavigation/>
    <section>
      {/* Page Title & Description */}      
      <div className=''>
        {/* Upper Header Section */}
        <div className='flex flex-row justify-evenly bg-slate-400 p-4'>
          <div className='w-8/12 p-4'>
            <h2 className='text-2xl'>Weather Project</h2>
            <p className='py-2'>
              Instead of creating the typical Weather API project - I decided to use the OpenWeather API to build a weather guessing game. 
              I'm using axios to make the fetch request and implementing the following React Hooks for application logic.
            </p>
            <div className='px-4'>
              <ul>
                <li>useState: </li>
                <li>useRef : </li>
                <li></li>
              </ul>
            </div>      
            {/* <div><button className='p-2 bg-sky-400 rounded-xl' onClick={() => retrieveWeatherData()}>Click To Test Data</button></div>       */}
          </div>
          <div className='border-2 border-dashed p-4 mt-6'>
            <h4 className='text-xl uppercase'>Instructions:</h4>
            <p className='text-xl py-2'>Guess the daily high and low for major cities</p>
            <p className='text-xl py-2'>sdfshflksdfnsdlkfjhsfhsfs</p>
          </div>
        </div>        
      </div>

      {/* Page Title & Description */}      
      <div className='flex flex-row justify-evenly py-4 border-b-2 border-sky-700'>
        {/* Upper Header Section */}
        <div className=''>
          <h2 className='text-2xl'>Weather Project Game</h2>          
        </div>
        <div className='text-center'>
          <h4 className='text-xl'>Current Score</h4>
          <div className='bg-emerald-300 text-white rounded-xl'>
            <p className='p-1 font-medium'>Guessed {gameData.score} of 10 correctly</p>
          </div>
        </div>
      </div>    

      {/* List of citites & city info  */}
      <div className='p-4'>
        <h3 className='text-2xl'>Cities & Status:</h3>
        <div className='grid grid-cols-3 md:grid-cols-5 justify-items-center gap-4 py-4'>
          { cityData.map((city, cityIndex) => <>
          <div className='w-40'>
                {/* {city.name} */}
                <CityStatus
                  key={`${cityIndex}-cityStatus`}
                  cityData={cityData}
                  cityIndex={cityIndex}
                  gameData={gameData}
                  setGameData={setGameData}
                  currentCityIndex={currentCityIndex}
                  setCurrentCityIndex={setCurrentCityIndex}
                />              
          </div>
          </>) }
          
        </div>        
      </div>

      {/* GUESSING SECTION */}
      <section>
        {/* area to guess which weather card is correct */}
        <div className=''>
          <h3 className='text-2xl tracking-wide'>Guess The Correct Weather</h3>
          {/* grid layout for user options */}
          <div className='grid grid-cols-3 justify-evenly justify-items-center py-14'>
            { weatherGuessOrder && cityData[currentCityIndex].data !== null ? weatherGuessOrder.map((guessType, guessIndex) => {                
              return <WeatherCard key={guessIndex} guessType={guessType} cityData={cityData} currentCityIndex={currentCityIndex} />
            }) : null} 
            
          </div>
        </div>        

        {/* button to submit guess */}
        <div className='flex justify-center pt-10 pb-8'>
          <div className='py-8 px-16 border-2 border-slate-700 border-dashed rounded-xl'>
            <button className='p-2 bg-sky-800/30 rounded-xl shadow-2xl'>
              Submit My Guess
            </button>
          </div>
        </div>

      </section>      

    </section>
    <ContactSection/>
  </>)
}
