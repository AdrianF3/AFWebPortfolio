import React from 'react'
import { WiThermometer } from "react-icons/wi";

export default function WeatherCard(props) {

    // card title -  (Guess 1 or You Guessed or You Answered)
    // weather value - 
    // weather conditions - text description under the weather
    // sunrise/sunset -> possibly use progress bar effect to show prgress to sunset
    // current time
    // daily low temperature
    // humidity






    return (
    <section className='border-2 border-sky-400 bg-sky-300/50 p-8 rounded-lg shadow-2xl'>

        <div>
            {/* title */}
            <div>
                <h4>Card Title</h4>
            </div>

            {/* sunrise/sunset progress bar */}            
            <div>
                <p>Time of Day: ##:##</p>
                <div className='flex flex-row justify-evenly'>
                    <span>sunrise</span>
                    <span>sunset</span>
                </div>

            </div>

            {/* weather description & details */}
            <div className='flex flex-col'>
                {/* <WiThermometer/> */} 
                <p>current weather</p>
                <p>daily high</p>
                <p>daily low</p>
                <p>humidity</p>


            </div>
        </div>
    </section>
    )
}
