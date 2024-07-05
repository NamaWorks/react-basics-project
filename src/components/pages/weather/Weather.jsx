import "./Weather.css"

import { useEffect, useState } from "react"
import { getCityCoordinates, getWeather } from "../../../api/getLocation"
import MainCardWeather from "../../elements/cards/MainCardWeather/MainCardWeather";
import TempsCard from "../../elements/cards/TempsCard/TempsCard";
import WindCard from "../../elements/cards/WindCard/WindCard";
import MiscCard from "../../elements/cards/MiscCard/MiscCard";
import { useParams } from "react-router-dom";


const Weather = ({ currentSection, coordinates, weather, city, weatherMain, weatherDescription, weatherIcon, mainTemp, mainFeelsLike, mainTempMin, mainTempMax, mainHumidity, mainSeaLevel, mainGroundLevel, visibility, windSpeed, windDeg, clouds, setCurrentSection, setCoordinates, setCity, setWeather, setWeatherMain, setWeatherDescription, setWeatherIcon, setMainTemp, setMainFeelsLike, setMainTempMin, setMainTempMax, setMainHumidity, setMainSeaLevel, setMainGroundLevel, setVisibility, setWindSpeed, setWindDeg, setClouds }) => {

  
  const { cityParam } = useParams()
  console.log(cityParam)
  
  
  useEffect(() => {
    setCurrentSection("weather")

    
    
    if(!weather){
        async function fetchDefaultCity (){
        
          let cityCoords = []

          if(!cityParam){
            cityCoords = await getCityCoordinates("London");
          } else {
            cityCoords = await getCityCoordinates(cityParam);
          }

          setCoordinates([cityCoords[0].lat, cityCoords[0].lon])
          
          const weatherData = await getWeather(
            cityCoords[0].lat,
            cityCoords[0].lon
          );
          const weatherDataJson = JSON.stringify(weatherData)
          setWeather(await weatherDataJson)

          setCity(await weatherData.name)
          setWeatherMain(await weatherData.weather[0].main)
          setWeatherDescription(await weatherData.weather[0].description)
          setWeatherIcon(await weatherData.weather[0].icon)
          setMainTemp(await weatherData.main.temp)
          setMainFeelsLike(await weatherData.main.feels_like)
          setMainTempMin(await weatherData.main.temp_min)
          setMainTempMax(await weatherData.main.temp_max)
          setMainHumidity(await weatherData.main.humidity)
          setMainSeaLevel(await weatherData.main.sea_level)
          setMainGroundLevel(await weatherData.main.grnd_level)
          setVisibility(await weatherData.visibility)
          setWindSpeed(await weatherData.wind.speed)
          setWindDeg(await weatherData.wind.deg)
          setClouds(await weatherData.clouds.all)
        }
        fetchDefaultCity()
    }
  },[weather]);

  return (
    <main id="weather">
      <MainCardWeather 
        weatherDescription={weatherDescription}
        weatherIcon={weatherIcon}
        mainTemp={mainTemp} 
        />
  <div className="smaller-cards">
      <TempsCard
        mainTempMin={mainTempMin}
        mainTempMax={mainTempMax}
        mainFeelsLike={mainFeelsLike}
      />

      <WindCard 
        windSpeed={windSpeed}
        windDeg={windDeg}
      />
  </div>
  
      <MiscCard 
        coordinates={coordinates}
        city={city}
        mainHumidity={mainHumidity}
        mainSeaLevel={mainSeaLevel}
        mainGroundLevel={mainGroundLevel}
        visibility={visibility}
      />
  
    </main>
  );
}

export default Weather