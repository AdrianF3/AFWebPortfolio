import React, { useState } from 'react'
import ContactSection from '../components/ContactSection'
import HeaderNavigation from '../components/HeaderNavigation'
import { WiThermometer } from "react-icons/wi";

export default function WeatherProject() {
  const [ score, setScore ] = useState(0)

  const cityIdeas = [
    {
      name: 'Los Angeles',
    },
    { 
      name: 'Dallas',
    },
    { 
      name: 'Chicago',
    },
    { 
      name: 'Miami',
    },
    { 
      name: 'Boston',
    },
    { 
      name: 'San Francisco',
    },
    { 
      name: 'Las Vegas',
    },
    { 
      name: 'Honolulu',
    },
    { 
      name: 'Denver',
    },
    { 
      name: 'London',
    },
    { 
      name: 'Sydney',
    },
    { 
      name: 'Tokyo',
    },
    { 
      name: 'Rome',
    },
    { 
      name: 'Hamburg',
    }
  ]


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
          <div className='bg-slate-800 text-white rounded-xl'>
            <p>{score} # 10</p>
          </div>
        </div>
      </div>    

      {/* List of citites & city info  */}
      <div className='p-4'>
        <h3 className='text-2xl'>Current City:</h3>
        <div className='flex flex-row snap-x'>
          {cityIdeas.length > 0 ? cityIdeas.map((city) => <>
            <p className='w-full snap-center'>
              {city.name}
            </p>
          </>) : null }
          
        </div>        
      </div>

      {/* GUESSING SECTION */}
      <section>
        {/* area to guess daily highs */}
        <div classname=''>
          <h3 className='text-2xl tracking-wide'>Daily Highs</h3>
          {/* grid layout for user options */}
          <div className='grid grid-cols-5'>
            <div>
              {/* title */}
              <div>
                <h4>Card 1</h4>

              </div>
              {/* weather description */}
              <div>
                <WiThermometer />
              </div>
            </div>
            <div><p>Card 2</p></div>
            <div><p>Card 3</p></div>
            <div><p>Card 4</p></div>
            <div><p>Card 5</p></div>
          </div>
        </div>
        {/* area to guess daily lows */}
        <div>
          <h3>Daily Highs</h3>
          {/* grid layout for user options */}
          <div className='grid grid-cols-5'>
            <div><p>Card 1</p></div>
            <div><p>Card 2</p></div>
            <div><p>Card 3</p></div>
            <div><p>Card 4</p></div>
            <div><p>Card 5</p></div>
          </div>
        </div>

        {/* button to submit guess */}
        <div className='flex justify-end'>
          <button className='p-2 bg-sky-800/30 rounded-xl'>
            Submit My Guess
          </button>
        </div>

      </section>

      {/* Reveal Section */}
      <div>
        <h3>Current City Name</h3>
        <p>You guessed right or you guessed wrong</p>
        {/* Display of actual user data */}
        <div>
            <p>
              Use this area to display the correct weather data for the currently 
              selected city, after the user submits their choice
            </p>
        </div>
      </div>

    </section>
    <ContactSection/>
  </>)
}
