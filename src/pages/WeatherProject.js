import React, { useEffect, useMemo, useState } from 'react'
import ContactSection from '../components/ContactSection'
import HeaderNavigation from '../components/HeaderNavigation'
import axios from 'axios';
import WeatherCard from '../components/weatherGame/WeatherCard';
import CityStatus from '../components/weatherGame/CityStatus'

export default function WeatherProject() {
  const [ weatherGuessOrder, setWeatherGuessOrder ] = useState([ 'default', 'modifiedA', 'modifiedB'])
  // let weatherGuessOrderMemo = useMemo(() => shuffleArray(weatherGuessOrder), [weatherGuessOrder])
  const [ currentlySelectedGuess, setCurrentlySelectedGuess ] = useState(null)
  // const [ cardSelected, setCardSelected ] = useState(null)

  
  const [ isLoadingData, setIsLoadingData ] = useState(false)
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
      }
    ]
  })

  const [ currentCityIndex, setCurrentCityIndex ] = useState(0)
  const [ cityData, setCityData ] = useState([{
    name: 'Los Angeles',
    lat: '34.05',
    lon: '-118.24',
    data: null,
    randNumA: Math.floor( Math.random() * 5),
    randNumB: Math.floor( Math.random() * (10 - 5) + 1) + 5
  },{ 
    name: 'Dallas',
    lat: '32.77',
    lon: '-96.79',
    data: null,
    randNumA: Math.floor( Math.random() * 6),
    randNumB: Math.floor( Math.random() * (10 - 5) + 1) + 5

  },{ 
    name: 'Chicago',
    lat: '41.87',
    lon: '-87.62',
    data: null,
    randNumA: Math.floor( Math.random() * 5),
    randNumB: Math.floor( Math.random() * (10 - 5) + 1) + 5
  },{ 
    name: 'Miami',
    lat: '25.77',
    lon: '-80.19',
    data: null,
    randNumA: Math.floor( Math.random() * 5),
    randNumB: Math.floor( Math.random() * (10 - 5) + 1) + 5
  },{ 
    name: 'Boston',
    lat: '42.35',
    lon: '-71.06',
    data: null,
    randNumA: Math.floor( Math.random() * 5),
    randNumB: Math.floor( Math.random() * (10 - 5) + 1) + 5
  },{ 
    name: 'San Francisco',
    lat: '37.77',
    lon: '-122.41',
    data: null,
    randNumA: Math.floor( Math.random() * 5),
    randNumB: Math.floor( Math.random() * (10 - 5) + 1) + 5
  },{ 
    name: 'Las Vegas',
    lat: '36.16',
    lon: '-115.14',
    data: null,
    randNumA: Math.floor( Math.random() * 5),
    randNumB: Math.floor( Math.random() * (10 - 5) + 1) + 5
  },{ 
    name: 'Honolulu',
    lat: '21.30',
    lon: '-157.85',
    data: null,
    randNumA: Math.floor( Math.random() * 5),
    randNumB: Math.floor( Math.random() * (10 - 5) + 1) + 5
  },{ 
    name: 'Denver',
    lat: '39.73',
    lon: '-104.98',
    data: null,
    randNumA: Math.floor( Math.random() * 5),
    randNumB: Math.floor( Math.random() * (10 - 5) + 1) + 5
  },{ 
    name: 'New York',
    lat: '40.71',
    lon: '-74.00',
    data: null,
    randNumA: Math.floor( Math.random() * 5),
    randNumB: Math.floor( Math.random() * (10 - 5) + 1) + 5
  }]
)  

  
  
  // create an array, limited to 3 positions, saving the keys, default, modifiedA, and modifiedB
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }


  const handleUserSelectGuess = ( guessIndex ) => { setCurrentlySelectedGuess(weatherGuessOrder[guessIndex]) }

  const submitUserGuess = () => {
    let tempUserGuesses = [...gameData.userGuesses]
    if (currentlySelectedGuess !== null) {
      if (currentlySelectedGuess === 'default') {      
        tempUserGuesses[currentCityIndex] = { ...tempUserGuesses[currentCityIndex], guessed: 'correct'}
        setGameData( gameData => ({
          ...gameData, 
          score: (gameData.score + 1),
          userGuesses: tempUserGuesses
        }))
      } else { 
        tempUserGuesses[currentCityIndex] = { ...tempUserGuesses[currentCityIndex], guessed: 'incorrect'}      
        setGameData( gameData => ({
        ...gameData,
        userGuesses:tempUserGuesses
      })) }      
    }
  }

  const handleNewCity = (cityIndex) => {
    setCurrentCityIndex(cityIndex) 
    shuffleArray(weatherGuessOrder)
    setCurrentlySelectedGuess(null)
  }

  // const apiKey ='186bd501fb99a25eb3920a4deee082d1'
  const baseURL = window.location.href
  console.log(baseURL)


  // attempt using useEffect
  useEffect(() => {
    setIsLoadingData(true)

    
    // shuffleArray(weatherGuessOrder)
  
    // if weather data for current city not already loaded, 

    let key = process.env.REACT_APP_API_KEY
    // console.log('use effect called')
    // **  research better way to check against null
    if (cityData[currentCityIndex].data == null) {
      let apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityData[currentCityIndex].lat}&lon=${cityData[currentCityIndex].lon}&units=imperial&appid=${key}`
      console.log('apiURL', apiURL)
      
      // axios.get(apiURL, {"headers": {""} })
      axios({
        method: 'get',
        url: apiURL,
      withCredentials: false,
      })
      .then((response) => {           
        console.log('response', response) 
        response.headers.set()
        // deep clone of the existing cityData
        let cityDataClone = JSON.parse(JSON.stringify(cityData))
        // update the data for currently selected city        
        cityDataClone[currentCityIndex].data = response.data             
        setCityData([...cityDataClone])                
      }) 
      
    }
    setIsLoadingData(false)
  
  }, [currentCityIndex, cityData])
  
  
  // console.log('weatherGuessOrder', weatherGuessOrder)
  // console.log('currentCityIndex', currentCityIndex)
  // console.log('cityData[currentCityIndex]', cityData[currentCityIndex])
  // console.log('currentlySelectedGuess', currentlySelectedGuess)
  // console.log('gameData', gameData)
  // console.log('process.env.REACT_APP_API_KEY', process.env.REACT_APP_API_KEY)
  // console.log('key', key)

  return (<>
    <HeaderNavigation/>
    <section>
      {/* Page Title & Description */}      
      <div className=''>
        {/* Upper Header Section */}
        <div className='flex flex-col md:flex-row justify-evenly bg-slate-400 p-4'>
          <div className='md:w-8/12 p-4'>
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
      <div className='flex flex-col md:flex-row justify-evenly py-4 border-b-2 border-sky-700'>
        
        {/* Upper Title Section */}
        <div className='flex flex-col px-4 my-20 md:w-1/4'>
          <h2 className='text-4xl text-center'>Guess The Weather Game</h2>
        </div>

          
          <div className='flex flex-col md:w-1/3 justify-center'>
            <p className='pt-4 mx-auto center py-4 md:py-0 text-center px-4'>
              <span className='block text-left font-medium text-lg'>How To Play:</span> Guess which is the correct weather below - For each of the available cities there are 2 false cards and only one card with the correct information, see how many you guess right!
            </p>          
          </div>

        <div className='flex flex-col md:flex-row justify-center'>          
          <div className='m-0 px-4 py-8 text-center'>
            <h4 className='text-xl'>Your Current Score</h4>
            <div className='bg-emerald-800 text-white p-1 mx-4 rounded-xl'>
              <p className='p-1 font-medium'>Guessed {gameData.score} of 10 correctly</p>
            </div>
          </div>
        </div>
      </div>    

      {/* List of citites & city info  */}
      <div className='p-4'>
        <h3 className='text-2xl text-center md:text-left tracking-wide'>Cities & Status:</h3>
        <div className='grid grid-cols-2 md:grid-cols-5 justify-items-center gap-6 py-4'>
          { cityData.map((city, cityIndex) => <>
          <div className='w-40'>                
                <CityStatus
                  key={`${cityIndex}-cityStatus`}
                  cityData={cityData}
                  cityIndex={cityIndex}
                  gameData={gameData}
                  setGameData={setGameData}
                  currentCityIndex={currentCityIndex} setCurrentCityIndex={setCurrentCityIndex}
                  handleNewCity={handleNewCity}
                />              
          </div>
          </>) }
          
        </div>        
      </div>

      {/* GUESSING SECTION */}
      <section>
        { isLoadingData ? <>
          <div className='flex flex-col w-max h-96 m-auto'>
            <div className='bg-slate-200 border-b-2 border-sky-800 rounded-full animate-spin h-10 w-10 m-auto'>
            </div>
              <p className='m-auto'>Loading Data...</p>
          </div>
        </> : <>
          {/* area to guess which weather card is correct */}
          <div className='p-4'>
            <div className='flex flex-row justify-evenly'>
              
              <div className='flex justify-center w-1/2 m-auto'>
                <h3 className='text-2xl text-center md:text-left tracking-wide'>Guess The Correct Weather</h3>
              </div>
                {gameData.userGuesses[currentCityIndex].guessed !== null ? <div><p>You've already guessed</p></div> : 
                <div className='flex justify-center w-1/2 m-auto' onClick={() => submitUserGuess()}>
                  <button className='p-2 bg-sky-800/30 rounded-xl shadow-2xl'>
                    Submit My Guess
                  </button>
                </div>
                }
              

            </div>
            {/* grid layout for user options IF data loaded, otherwise display loading div */}
            {/* <div className='grid grid-cols-1 md:grid-cols-3 justify-evenly justify-items-center gap-8 md:gap-2 px-4 py-10'> */}
            <div className='flex whitespace-nowrap overflow-x-auto gap-4 snap-x scroll-px-4'> 
              { weatherGuessOrder && cityData[currentCityIndex].data !== null ? weatherGuessOrder.map((guessType, guessIndex) => {                
                return <WeatherCard 
                  key={guessIndex} 
                  guessIndex={guessIndex} guessType={guessType} 
                  cityData={cityData} setCityData={setCityData} 
                  currentCityIndex={currentCityIndex} 
                  currentlySelectedGuess={currentlySelectedGuess} setCurrentlySelectedGuess={setCurrentlySelectedGuess}  
                  handleUserSelectGuess={handleUserSelectGuess}
                  // cardSelected={cardSelected}
                />
              }) : null }               
            </div>          
          </div>        
        </>}
        


      </section>      

    </section>
    <ContactSection/>
  </>)
}
