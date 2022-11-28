import React from 'react'
import { WiThermometer } from "react-icons/wi";

export default function WeatherCard(props) {


    
    
    
    // function to modify and return weather data with randomized modifications
    const modifyWeatherData = ( dataParam ) => {        
        let dataToModify = Object.assign({}, dataParam)
        console.log('dataToModify', dataToModify)
        // generate a number, 1-9
        let randNum = Math.floor( Math.random() * 10 )
        
        // switch statement, comparing random number, in each case, modify 3-5 values
        
        // temporarly manually set num to 1
        randNum = 1
        
        switch (randNum) {
            case 1:
                dataToModify.list[0].main.temp = ( dataToModify.list[0].main.temp + 30 )
                console.log('case 1 called')
                // weatherCardData.list[0].main.temp +=  30 
                break;
            case 2:
                    
                break;
            case 3:
                        
                break;
            case 4:
                            
                break;
            case 5:
                                
                break;
            case 6:
                                    
                break;
            case 7:
                                        
                break;
            case 8:
                                            
                break;
            case 9:
                                                
                break;
                                                
            default:
                // default is same as case 1
                break;
        }
                                                                                                
        // return weatherCardData
        return dataToModify
    }
                                            
    // set currentData, based on the guess type which is shuffeled whenever a new city is selected
    let weatherCardData = {}

    switch (props.guessType) {
        case 'defualt':
            weatherCardData = props.cityData[props.currentCityIndex].data
            console.log('weatherCardData', weatherCardData)            
            break;
        case 'modifiedA':
            weatherCardData = modifyWeatherData(props.cityData[props.currentCityIndex].dataModifiedA)
            console.log('weatherCardData', weatherCardData)            
            break;
        case 'modifiedB':
            weatherCardData = modifyWeatherData(props.cityData[props.currentCityIndex].dataModifiedB)
            console.log('weatherCardData', weatherCardData)            
            break;    
        default:
            weatherCardData = props.cityData[props.currentCityIndex].data
            console.log('weatherCardData', weatherCardData)            
            break;
    }


    // console.log('props', props)
    console.log('weatherCardData', weatherCardData)
    console.log('props.guessType', props.guessType)

    const formatTimeDate = ( dt ) => {
        let date = new Date(dt * 1000)
        let dateString = date.toLocaleDateString("en-US")
        let timeString = date.toLocaleTimeString("en-US")
        
        return ` ${timeString} - ${dateString} ` 
    }


    return (
    <section className='border-2 border-sky-400 bg-sky-300/50 p-8 rounded-lg shadow-2xl'>

        <div>
            {/* title */}
            <div>
                <p>Guess# {props.guessIndex}</p>
                <h4>{weatherCardData.city.name} {props.guessType}</h4>
            </div>

            {/* sunrise/sunset progress bar */}            
            <div>
                <p className='text-xs text-slate-600'>Population: {weatherCardData.city.population}</p>
                <div className='flex flex-row justify-evenly'>                    
                    <span>Sunrise: { formatTimeDate(weatherCardData.city.sunrise)}</span>
                    <span>Sunset { formatTimeDate(weatherCardData.city.sunset)}</span>
                </div>
                

            </div>

            {/* weather description & details */}
            <div className='flex flex-col'>
                {/* <WiThermometer/> */} 
                <p>current weather{weatherCardData.list[0].main.temp}</p>
                <p>feels like: {weatherCardData.list[0].main.feels_like}</p>
                <p>Cloudiness: {weatherCardData.list[0].clouds.all}</p>
                <p>humidity{weatherCardData.list[0].main.humidity}</p>
                <p>Winds/Gust: {weatherCardData.list[0].wind.speed} / {weatherCardData.list[0].wind.gust}</p>                
                <p>Description: {weatherCardData.list[0].weather[0].description}</p>


            </div>
        </div>
    </section>
    )
}
