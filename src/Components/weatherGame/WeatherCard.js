import React, { useEffect, useState, useCallback } from 'react'
import { WiThermometer, WiHumidity, WiCloud, WiCloudyGusts, WiCloudyWindy } from "react-icons/wi";

export default function WeatherCard(props) {

    const [ weatherCardState, setWeatherCardState ] = useState({ status: 'PENDING', modified: false})
    // console.log('props', props)
    
    const resetData = () => {
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
    
    
    if (weatherCardState.status === 'PENDING' ) {
    // // if (weatherCardState.status === 'PENDING' || weatherCardState.name !== props.currentCityData.name) {
        resetData()
    }
    
    if (weatherCardState.cityName !== props.cityData[props.currentCityIndex].name) {
        // console.log('reset trigerred')
        resetData()
    }
    
    
    // function to modify and return weather data with randomized modifications
    const modifyWeatherData = ( randNum ) => {        
              
        // switch statement, comparing random number, in each case, modify 3-5 values of current card
        
        switch (randNum) {
            case 1:
                //  fields modified: currentTemp,  humidity, windspeed
                let fakeCurrentTemp = weatherCardState.currentTemp + 2
                let fakeHumidity = weatherCardState.humidity
                let fakeWind = weatherCardState.wind        
                // modify humidity
                if (fakeHumidity >= 5) {
                    fakeHumidity = ( fakeHumidity - 3 )                                        
                } else {
                    fakeHumidity = ( fakeHumidity + 2 )                    
                }
                // modify wind
                if (fakeWind >= 3 ) {
                    fakeWind = Math.round( fakeWind - 2 )
                } else {
                    fakeWind = ( fakeWind + 3 )
                }

                // update state with modified values
                setWeatherCardState( weatherCardState => ({
                    ...weatherCardState,
                    currentTemp: fakeCurrentTemp,
                    humidity: fakeHumidity,
                    wind: fakeWind,
                    modified: true,
                    modifiedCase: 1
                }))                                
                break;
            case 2:
                // fields modified: cloudiness, gusts, current temp
                let fakeClouds = weatherCardState.clouds
                let fakeGusts = weatherCardState.gusts
                let fakeCurrentTemp2 = weatherCardState.currentTemp
                // modify clouds
                if (fakeClouds >= 10 && fakeClouds > 89) {
                    fakeClouds = ( fakeClouds + 10 )
                } else {
                    fakeClouds = ( fakeClouds + 4 )
                }
                // modify gusts
                if (fakeGusts >= 10 && fakeGusts > 20) {
                    fakeGusts = ( fakeGusts + 2 )
                } else {
                    fakeGusts = ( fakeGusts + 1 )
                }
                // modify current temp
                if (fakeCurrentTemp2 >= 50 && fakeCurrentTemp2 < 90) {
                    fakeCurrentTemp2 = ( fakeCurrentTemp2 + 5 )
                } else {
                    fakeCurrentTemp2 = ( fakeCurrentTemp2 - 7 )
                }
                //  update state with modified values
                setWeatherCardState( weatherCardState => ({
                    ...weatherCardState,                    
                    clouds: fakeClouds,
                    guests: fakeGusts,
                    currentTemp: fakeCurrentTemp2,
                    modified: true,
                    modifiedCase: 2
                }))    
                break;
            case 3:
                // fields modified: humidity, winds, currentTemp
                let fakeHumidity3 = weatherCardState.humidity
                let fakeWind3 = weatherCardState.wind
                let currentTemp3 = ( weatherCardState.currentTemp + 4 )
                // modify humidity
                if (fakeHumidity3 > 25) {
                    fakeHumidity3 = ( fakeHumidity3 - 4 )
                } else {
                    fakeHumidity3 = ( fakeHumidity3 + 7 )
                }
                // modify wind
                if (fakeWind3 >= 10 ) {
                    fakeWind3 = ( fakeWind3 + 2 )
                } else {
                    fakeWind3 = ( fakeWind3 + 5 )
                }
                // Update state with modified values
                setWeatherCardState( weatherCardState => ({
                    ...weatherCardState,  
                    humidity: fakeHumidity3,
                    wind: fakeWind3,
                    currentTemp: currentTemp3,
                    modified: true,
                    modifiedCase: 3
                }))    
                break;
                                                     
            default:
                // save error in modified, change no values
                console.log('error - should provied for this randNum')
                setWeatherCardState( weatherCardState => ({
                    ...weatherCardState,                    
                    modified: true,
                    modifiedCase: 'default'
                }))   
                break;
        }
                                                                                                        
    }
            
    if (weatherCardState.status === 'SET') {
        switch (props.guessType) {        
            case 'modifiedA':
                if (!weatherCardState.modified) {
                    console.log('modifiedA')
                    modifyWeatherData(props.cityData[props.currentCityIndex].randNumA)
                }
                break;
            case 'modifiedB':
                if (!weatherCardState.modified) {
                    console.log('modifiedB')
                    modifyWeatherData(props.cityData[props.currentCityIndex].randNumB)                
                }                     
                break;    
            default:
                // don't manipulate data
                break;
        }        
    }
        
    // assign bgColor - if user has already guessed, update background colors to display correct answer
    let bgColor = props.currentlySelectedGuess === props.guessType ? 'bg-emerald-400/50' : 'bg-sky-400/50'
    if ( props.gameData.userGuesses[props.currentCityIndex].guessed === 'correct' || props.gameData.userGuesses[props.currentCityIndex].guessed === 'incorrect') {
        
        if (props.guessType === 'default') {
            bgColor = 'bg-emerald-400/80 border-2 border-emerald-800'
        } else {
            bgColor = 'bg-rose-400/80 border-2 border-rose-800'
        }

    }
    
    
    const formatTime = ( dt ) => {
        let date = new Date(dt * 1000)        
        let timeString = date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit'})        
        return timeString
    }
    

    return (
    <section 
        className={`flex flex-col snap-center snap-always min-w-full md:min-w-min 12 border-2 border-sky-400 p-4 rounded-lg shadow-2xl m-10 ${ bgColor }`}
        onClick={() => props.handleUserSelectGuess(props.guessIndex)}
    >
        {/* title */}
        <div className='relative -top-12 md:-left-10 bg-sky-400 rounded-xl p-2'>
            <div className='flex flex-col'>
                <p className='text-xs text-slate-600 italic'>Option {props.guessIndex + 1}</p>
                <h3 className='text-xl text-center'>{weatherCardState.cityName}</h3>
                <h3 className='text-xl text-center'>{weatherCardState.modifiedCase}</h3>
                <h3 className='text-xl text-center'>{props.guessType}</h3>

            </div>
        </div>        
        <div className='flex flex-col justify-evenly'>
            {/* sunrise/sunset progress bar */}            
            <div className='flex flex-col items-center -mt-8'>
                <div className='flex flex-col'>
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
                <div className='flex flex-row justify-evenly pt-2'>
                    <p className='text-xs text-center text-slate-600 italic'>
                        feels like {weatherCardState.feelsLike}, described as <span className='italic'>'{weatherCardState.description}'</span>
                    </p>                    
                </div>
            </div>
        </div>
    </section>
    )
}
