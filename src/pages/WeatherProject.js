import React, { useEffect, useState } from 'react'
import ContactSection from '../components/ContactSection'
import HeaderNavigation from '../components/HeaderNavigation'
import axios from 'axios';
import WeatherCard from '../components/weatherGame/WeatherCard';
import CityStatus from '../components/weatherGame/CityStatus'

export default function WeatherProject() {
  // const axios = require('axios');
  const [ gameData, setGameData ] = useState({
    score: 0,
    userGuesses: [
      {
        guessed: null
      },
      {
        guessed: 'correct'
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
  const [ currentCityIndex, setCurrentCityIndex ] = useState(10)
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

  // // original function to retrieve data
  // const retrieveWeatherData = async ( ) => {
  //   console.log('retrieveWeatherData Called')
  //   try {      
  //     const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${cityData[currentCityIndex].lat}&lon=${cityData[currentCityIndex].lon}&appid=186bd501fb99a25eb3920a4deee082d1`)
  //     let cityDataClone = Object.assign({}, cityData)      
  //     cityDataClone[currentCityIndex].data = response.data
  //     setCityData(cityDataClone)      
  //   } catch (error) {
  //     console.log('error', error)
  //   }
  // }
  // if current city index < 9, reset to 0
  if (currentCityIndex > 9) {
    setCurrentCityIndex(0)
  }
  
  // attempt using useEffect
  useEffect(() => {


    // if weather data for current city not already loaded, 

    console.log('use effect called')
    // **  research better way to check against null
    if (cityData[currentCityIndex].data == null) {
      let apiURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${cityData[currentCityIndex].lat}&lon=${cityData[currentCityIndex].lon}&appid=186bd501fb99a25eb3920a4deee082d1`
      console.log('apiURL', apiURL)
      axios.get(apiURL)
      .then((response) => {
        // let cityDataClone = Object.assign({}, cityData) 
        console.log('response', response)
        // let cityDataClone = new Array(cityData)
        let cityDataClone = JSON.parse(JSON.stringify(cityData))
        
        cityDataClone[currentCityIndex].data = response.data
        console.log('cityDataClone', cityDataClone)
        setCityData([...cityDataClone])
        console.log('useEffect called')       
      })      
    }
  
  }, [currentCityIndex, cityData])


  console.log('cityData', cityData)
  // use useEffect to call render of data, automatically load one

  // console.log('cityData[0].name', cityData[0].name)

  // build array of random functions that slightly modify the weather fields
  // include fields: 

  // 4 random types
  // daily high weather by 3, daily high lower by 2, 


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
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
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
