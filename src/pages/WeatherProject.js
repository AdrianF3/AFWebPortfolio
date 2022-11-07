import React from 'react'
import ContactSection from '../components/ContactSection'
import HeaderNavigation from '../components/HeaderNavigation'


export default function WeatherProject() {

  const cityIdeas = [
    'LA',
    'NY', 
    'Dallas',
    'Chicago',
    'Miami',
    'Boston',
    'San Francisco',
    'Las Vegas', 
    'Honolulu',
    'Denver',
    'London',
    'Syndey',
    'Tokyo',
    'Rome',
    'Hamburg'
  ]




  return (<>
    <HeaderNavigation/>
    <section>
      {/* Page Title & Description */}      
      <div className='flex flex-row justify-evenly'>
        {/* Upper Header Section */}
        <div className=''>
          <h2>Weather Project Game</h2>
          <p>Guess the daily high and low for major cities</p>
          <p>Instructions: sdfshflksdfnsdlkfjhsfhsfs</p>
        </div>
        <div>
          <h4>Current Score</h4>
          <p>0 # 10</p>
        </div>
      </div>    

      {/* List of citites & city info  */}
      <div>
        <p>scrolling list of cities</p>
        <p>Current City Name: information about current city</p>
      </div>

      {/* GUESSING SECTION */}
      <section>
        {/* area to guess daily highs */}
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
