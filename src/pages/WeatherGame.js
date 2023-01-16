import React, { useEffect, useState, useRef } from 'react'
import ContactSection from '../components/ContactSection'
import HeaderNavigation from '../components/HeaderNavigation'
import axios from 'axios';
import WeatherCard from '../components/weatherGame/WeatherCard';
import CityStatus from '../components/weatherGame/CityStatus'
import LoadingDiv from '../components/weatherGame/LoadingDiv';
import GameStatus from '../components/weatherGame/GameStatus';
import { handleScrollToTop } from '../components/renderless/handleScrollToTop';
import { handleScrollToBottom } from '../components/renderless/handleScrollToBottom';

export default function WeatherGame() {
  const [ weatherGuessOrder, setWeatherGuessOrder ] = useState([ 'default', 'modifiedA', 'modifiedB'])
  const [ currentlySelectedGuess, setCurrentlySelectedGuess ] = useState(null)
  // const [ weatherCardState, setWeatherCardState ] = useState({ status: 'PENDING', modified: false})
  const loadingRef = useRef(true)

  
  const [ gameData, setGameData ] = useState({
    score: 0,
    guesses: 0,
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
    randNumA: ( Math.floor( Math.random() * 3) + 1),
    randNumB: ( Math.floor( Math.random() * 3) + 1),
  },{ 
    name: 'Dallas',
    lat: '32.77',
    lon: '-96.79',
    data: null,
    randNumA: ( Math.floor( Math.random() * 3) + 1),
    randNumB: ( Math.floor( Math.random() * 3) + 1),

  },{ 
    name: 'Chicago',
    lat: '41.87',
    lon: '-87.62',
    data: null,
    randNumA: ( Math.floor( Math.random() * 3) + 1),
    randNumB: ( Math.floor( Math.random() * 3) + 1),
  },{ 
    name: 'Miami',
    lat: '25.77',
    lon: '-80.19',
    data: null,
    randNumA: ( Math.floor( Math.random() * 3) + 1),
    randNumB: ( Math.floor( Math.random() * 3) + 1),
  },{ 
    name: 'Boston',
    lat: '42.35',
    lon: '-71.06',
    data: null,
    randNumA: ( Math.floor( Math.random() * 3) + 1),
    randNumB: ( Math.floor( Math.random() * 3) + 1),
  },{ 
    name: 'San Francisco',
    lat: '37.77',
    lon: '-122.41',
    data: null,
    randNumA: ( Math.floor( Math.random() * 3) + 1),
    randNumB: ( Math.floor( Math.random() * 3) + 1),
  },{ 
    name: 'Las Vegas',
    lat: '36.16',
    lon: '-115.14',
    data: null,
    randNumA: ( Math.floor( Math.random() * 3) + 1),
    randNumB: ( Math.floor( Math.random() * 3) + 1),
  },{ 
    name: 'Honolulu',
    lat: '21.30',
    lon: '-157.85',
    data: null,
    randNumA: ( Math.floor( Math.random() * 3) + 1),
    randNumB: ( Math.floor( Math.random() * 3) + 1),
  },{ 
    name: 'Denver',
    lat: '39.73',
    lon: '-104.98',
    data: null,
    randNumA: ( Math.floor( Math.random() * 3) + 1),
    randNumB: ( Math.floor( Math.random() * 3) + 1),
  },{ 
    name: 'New York',
    lat: '40.71',
    lon: '-74.00',
    data: null,
    randNumA: ( Math.floor( Math.random() * 3) + 1),
    randNumB: ( Math.floor( Math.random() * 3) + 1),
  }]
)  

  
  
  // create an array, limited to 3 positions, saving the keys, default, modifiedA, and modifiedB
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  // when user selects a weather card
  const handleUserSelectGuess = ( guessIndex ) => { setCurrentlySelectedGuess(weatherGuessOrder[guessIndex]) }
  // const handleUserSelectGuess = ( guessIndex ) => { setCurrentlySelectedGuess(guessIndex) }

  // when user submits their guess
  const submitUserGuess = () => {
    let tempUserGuesses = [...gameData.userGuesses]
    if (currentlySelectedGuess !== null) {
      if (currentlySelectedGuess === 'default') {      
        tempUserGuesses[currentCityIndex] = { ...tempUserGuesses[currentCityIndex], guessed: 'correct'}
        setGameData( gameData => ({
          ...gameData, 
          score: (gameData.score + 1),
          guesses: (gameData.guesses + 1),
          userGuesses: tempUserGuesses
        }))
      } else { 
        tempUserGuesses[currentCityIndex] = { ...tempUserGuesses[currentCityIndex], guessed: 'incorrect'}      
        setGameData( gameData => ({
          ...gameData,
          guesses: (gameData.guesses + 1),
        userGuesses:tempUserGuesses
      })) }      
    }
  }

  const handleNewCity = (cityIndex) => {
    setCurrentCityIndex(cityIndex)  
    // reshuffle weather cards
    setWeatherGuessOrder(shuffleArray(weatherGuessOrder))    
    //  reset user guess
    setCurrentlySelectedGuess(null)    

  }

  

  // attempt using useEffect
  useEffect(() => {    
    // was previously using ternary, think it makes more sense to just set to true while in useEffect
    // loadingRef.current ? loadingRef.current = false : loadingRef.current = true
    loadingRef.current = true    

    
    // if weather data for current city not already loaded,     
    let key = process.env.REACT_APP_API_KEY    
    // **  research better way to check against null
    if (cityData[currentCityIndex].data == null) {
      let apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityData[currentCityIndex].lat}&lon=${cityData[currentCityIndex].lon}&units=imperial&appid=${key}`      
    
      axios({
        method: 'get',
        url: apiURL,
        withCredentials: false,
      })
      .then((response) => {                   
        // deep clone of the existing cityData
        let cityDataClone = JSON.parse(JSON.stringify(cityData))
        // update the data for currently selected city        
        cityDataClone[currentCityIndex].data = response.data             
        setCityData([...cityDataClone])                
      }) 
      
      // ** test omitting, ends up being redundant I think
      loadingRef.current = false      
    }
    
    loadingRef.current = false
  
  }, [currentCityIndex, cityData, weatherGuessOrder])  


  // only run this useEffect when page first loads
  useEffect(() => {
    handleScrollToTop()
  }, [])
  

  return (<>
    <HeaderNavigation handleScrollToBottom={handleScrollToBottom}/>
    <section>
      {/* Page Title & Description */}      
      <div className=''>
        {/* Upper Header Section */}
        <div className='flex flex-col md:flex-row justify-evenly bg-gradient-to-b from-slate-200 to-slate-300 p-4'>
          <div className='md:w-10/12 p-4'>
            <h2 className='text-2xl underline underline-offset-2'>My Take on the Classic <span className='italic'>'Weather Project'</span></h2>
            <p className='py-2'>
              In order to do something a little different - I used the OpenWeather API to build a simple game where users guess between the correct and modified versions of the weather. 
            </p>
            <p className='py-2'>
              I used <span className='font-bold'>Axios</span> to fetch the data, and used the <span className='font-bold'>useState</span>, <span className='font-bold'>useRef</span> & <span className='font-bold'>useEffect</span> hooks
               to implement the logic controlling the game.
            </p>            
          </div>          
        </div>        
      </div>

      {/* Page Title & Description */}      
      <div className='flex flex-col md:flex-row justify-evenly py-4 border-b-2 border-sky-700'>
        
        {/* Upper Title Section */}
        <div className='flex flex-col p-4 m-auto'>
          <h2 className='text-4xl text-center'>Weather Game</h2>
        </div>

          {/* Game Instructions */}
          <div className='flex flex-col md:w-1/3 justify-center'>
            <p className='pt-4 mx-auto center py-4 text-center px-4'>
              <span className='block font-medium text-lg'>How To Play:</span> For each of the 10 US cities listed below, three differnt versions of the weather will be displayed. 
            </p>          
            <p className='mx-auto text-center px-4'>
              Guess which version has the correct weather for that city.              
            </p>
          </div>

        {/* Display Current Score */}
        <GameStatus gameData={gameData} />
      </div>
      {/* GUESSING SECTION */}
      <section>
        { loadingRef.current ? <LoadingDiv /> : <>
          {/* area to guess which weather card is correct */}
          <div className='p-4'>
            
            {/* grid layout for user options IF data loaded, otherwise display loading div */}                        
            <div className='flex flex-col md:py-8 bg-slate-400/30 rounded-xl px-2'>
              <div className='flex flex-row justify-evenly py-8'>             
                <div className='flex justify-center w-1/2 m-auto'>
                  <h3 className='text-3xl text-center md:text-left tracking-wide'>Guess The Correct Weather</h3>
                </div>

                {gameData.userGuesses[currentCityIndex].guessed !== null ? <div className='flex justify-center w-1/2 m-auto'><p>Your guess was {gameData.userGuesses[currentCityIndex].guessed}</p></div> : 
                <div className='flex justify-center w-1/2 m-auto' onClick={() => submitUserGuess()}>
                  <button className='rounded-lg px-4 py-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-green-100 duration-300 active:scale-90 active:bg-green-900'>
                    Submit My Guess
                  </button>
                </div> }              

              </div>
              
              <div className='flex whitespace-nowrap overflow-x-scroll border-2 border-slate-500/10 rounded-xl p-2 md:overflow-auto gap-4 snap-x md:snap-none snap-mandatory md:justify-center z-10'>
                {  ( cityData[currentCityIndex].data !== null & !loadingRef.current ) ? weatherGuessOrder.map((guessType, guessIndex) => {                
                  return <WeatherCard 
                    key={guessIndex} 
                    guessIndex={guessIndex} guessType={guessType} 
                    cityData={cityData} setCityData={setCityData} 
                    currentCityIndex={currentCityIndex}                  
                    currentlySelectedGuess={currentlySelectedGuess} setCurrentlySelectedGuess={setCurrentlySelectedGuess}  
                    handleUserSelectGuess={handleUserSelectGuess}
                    gameData={gameData}                      
                  />
                }) : <LoadingDiv/> }               
              </div>


              <div className='flex justify-center w-1/2 m-auto'>
                  <h3 className='italic text-center md:text-left tracking-wide text-md md:text-xl pb-4'>click a card & submit your guess</h3>
                </div>               
            </div>          
          </div>        
        </>}        
      </section>      

      {/* List of citites & city info  */}
      <div className='p-4'>
        <h3 className='text-2xl text-center md:text-left md:pl-10 tracking-wide'>Cities & Guess Status</h3>
        <div className='grid grid-cols-2 md:grid-cols-5 justify-items-center gap-6 py-4'>
          { cityData.map((city, cityIndex) => <>
          <div className='w-40'>                
                <CityStatus
                  key={`${cityIndex}-cityStatus`}
                  city={city}                
                  cityIndex={cityIndex}
                  gameData={gameData}                
                  currentCityIndex={currentCityIndex}
                  handleNewCity={handleNewCity}
                  currentGuessStatus={gameData.userGuesses[cityIndex].guessed}                  
                />              
          </div>
          </>) }
          
        </div>        
      </div>

      {/* Display Current Score */}
        <div className='flex flex-col justify-center border-b-2 border-slate-700/50 mx-20 mb-10'>          
          <GameStatus gameData={gameData} />
        </div>


    </section>
    <ContactSection/>
  </>)
}
