import React, { useState } from 'react'
import { WiThermometer, WiHumidity, WiCloud, WiCloudyGusts, WiCloudyWindy } from "react-icons/wi";

export default function WeatherCard(props) {

    const [ weatherCardState, setWeatherCardState ] = useState({ status: 'PENDING', modified: false})

    if (weatherCardState.status === 'PENDING') {
        const returnStateObject = {
            status: 'SET',
            modified: false,
            cityName: props.cityData[props.currentCityIndex].name,            
            sunrise: props.cityData[props.currentCityIndex].data.city.sunrise,
            sunset: props.cityData[props.currentCityIndex].data.city.sunset,
            currentTemp: props.cityData[props.currentCityIndex].data.list[0].main.temp,
            feelsLike: props.cityData[props.currentCityIndex].data.list[0].main.feels_like,
            clouds: props.cityData[props.currentCityIndex].data.list[0].clouds.all,
            humidity: props.cityData[props.currentCityIndex].data.list[0].main.humidity,
            wind: props.cityData[props.currentCityIndex].data.list[0].wind.speed,
            gust: props.cityData[props.currentCityIndex].data.list[0].wind.gust,
            description: props.cityData[props.currentCityIndex].data.list[0].weather[0].description            
        }
        setWeatherCardState(returnStateObject)
    }

    
    
    
    
    // function to modify and return weather data with randomized modifications
    const modifyWeatherData = ( randNum ) => {        
              
        // switch statement, comparing random number, in each case, modify 3-5 values of current card
        
        switch (randNum) {
            case 1:
                // increase currentTemp 2, 
                setWeatherCardState( weatherCardState => ({
                    ...weatherCardState,
                    currentTemp: ( weatherCardState.currentTemp + 2),
                    modified: true
                }))                                
                break;
            case 2:
                setWeatherCardState( weatherCardState => ({
                    ...weatherCardState,                    
                    modified: true
                }))    
                break;
            case 3:
                setWeatherCardState( weatherCardState => ({
                    ...weatherCardState,                    
                    modified: true
                }))    
                break;
            case 4:
                setWeatherCardState( weatherCardState => ({
                    ...weatherCardState,                    
                    modified: true
                }))            
                break;
            case 5:
                setWeatherCardState( weatherCardState => ({
                    ...weatherCardState,                    
                    modified: true
                }))                 
                break;
            case 6:
                setWeatherCardState( weatherCardState => ({
                    ...weatherCardState,                    
                    modified: true
                }))                   
                break;
            case 7:
                setWeatherCardState( weatherCardState => ({
                    ...weatherCardState,                    
                    modified: true
                }))                        
                break;
            case 8:
                setWeatherCardState( weatherCardState => ({
                    ...weatherCardState,                    
                    modified: true
                }))                           
                break;
            case 9:
                setWeatherCardState( weatherCardState => ({
                    ...weatherCardState,                    
                    modified: true
                }))                              
                break;                                                
            default:
                // default is same as case 1
                break;
        }
                                                                                                        
    }
            

    switch (props.guessType) {        
        case 'modifiedA':
            
            if (!weatherCardState.modified) {
                modifyWeatherData(props.cityData[props.currentCityIndex].randNumA)
            }
            break;
        case 'modifiedB':
            if (!weatherCardState.modified) {
                modifyWeatherData(props.cityData[props.currentCityIndex].randNumB)                
            }                     
            break;    
        default:
            // don't manipulate data
            break;
    }
        


    
    

    // console.log('props', props)
    // console.log('weatherCardData', weatherCardData)
    // console.log('props.guessType', props.guessType)

    const formatTime = ( dt ) => {
        let date = new Date(dt * 1000)        
        let timeString = date.toLocaleTimeString("en-US")        
        return timeString
    }


    return (
    <section className='border-2 border-sky-400 bg-sky-300/50 p-8 rounded-lg shadow-2xl'>
        {/* title */}
        <div className='relative -top-12 -left-10 bg-sky-400 rounded-xl p-2'>
            <h3 className='text-xl text-center'>{weatherCardState.cityName} - Guess # {props.guessIndex + 1}</h3>
        </div>        
        <div className='flex flex-col justify-evenly'>
            {/* sunrise/sunset progress bar */}            
            <div className='flex flex-col items-center py-2'>
                <div className='flex flex-col '>         
                    <p>Sunrise: { formatTime(weatherCardState.sunrise)}</p>
                </div>
                <div className='flex flex-col'>         
                    <p>Sunset { formatTime(weatherCardState.sunset)}</p>
                </div>        
            </div>

            {/* weather description & details */}
            <div className='flex flex-col pt-4'>                
                <div className='flex flex-row justify-evenly'>
                    <p>Cloudiness: {weatherCardState.clouds}%</p>
                    <WiCloud size={28} />
                </div>
                <div className='flex flex-row justify-evenly'>
                    <p>Humidity: {weatherCardState.humidity}%</p>
                    <WiHumidity size={28} />

                </div>
                <div className='flex flex-row justify-evenly'>
                    <p>Winds: {weatherCardState.wind}<span className='text-xs text-slate-600 italic'>m/s</span> </p>
                    <WiCloudyWindy size={28} />
                </div>
                <div className='flex flex-row justify-evenly'>
                    <p>Gusts: {weatherCardState.gust}<span className='text-xs text-slate-600 italic'>m/s</span> </p>                
                    <WiCloudyGusts size={28} />
                </div>
                <div className='flex flex-row justify-evenly'>
                    <p>Current Temp: {weatherCardState.currentTemp}</p>
                    <WiThermometer size={28}/> 
                </div>
                <div className='flex flex-row justify-evenly pb-4'>
                    <p className='text-xs text-slate-600 italic'>
                        feels like {weatherCardState.feelsLike} with {weatherCardState.description} conditions 
                    </p>                    
                </div>
            </div>
        </div>
    </section>
    )
}
