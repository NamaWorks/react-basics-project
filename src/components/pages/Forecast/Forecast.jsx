import { getCityCoordinates, getForecast, getWeather } from "../../../api/getLocation";
import "./Forecast.css"
import React, { useEffect } from 'react'

const Forecast = ({ currentSection, forecast, coordinates, weather, city, weatherMain, weatherDescription, weatherIcon, mainTemp, mainFeelsLike, mainTempMin, mainTempMax, mainHumidity, mainSeaLevel, mainGroundLevel, visibility, windSpeed, windDeg, clouds, setCurrentSection, setCoordinates, setCity, setWeather, setWeatherMain, setWeatherDescription, setWeatherIcon, setMainTemp, setMainFeelsLike, setMainTempMin, setMainTempMax, setMainHumidity, setMainSeaLevel, setMainGroundLevel, setVisibility, setWindSpeed, setWindDeg, setClouds }) => {


  useEffect(() => {

    setCurrentSection("forecast")


    if(!forecast){
        async function fetchDefaultCity (){
        
          const cityCoords = await getCityCoordinates("London");
          setCoordinates([cityCoords[0].lat, cityCoords[0].lon])
          

          const weatherData = await getForecast(
            cityCoords[0].lat,
            cityCoords[0].lon
          );
          
          console.log(weatherData)
        }
        fetchDefaultCity()
    }
  },[weather]);


  return (
    <h1>Choripanes en salsa de tomate</h1>
  )
}

export default Forecast