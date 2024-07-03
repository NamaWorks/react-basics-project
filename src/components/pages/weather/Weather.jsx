import { useEffect, useState } from "react"
import { getCityCoordinates, getWeather } from "../../../api/getLocation"
import MainCardWeather from "../../elements/MainCardWeather/MainCardWeather";


const Weather = ({ coordinates, weather, city, weatherMain, weatherDescription, weatherIcon, mainTemp, mainFeelsLike, mainTempMin, mainTempMax, mainHumidity, mainSeaLevel, mainGroundLevel, visibility, windSpeed, winDeg, clouds, setCoordinates, setCity, setWeather, setWeatherMain, setWeatherDescription, setWeatherIcon, setMainTemp, setMainFeelsLike, setMainTempMin, setMainTempMax, setMainHumidity, setMainSeaLevel, setMainGroundLevel, setVisibility, setWindSpeed, setWindDeg, setClouds }) => {

  useEffect(() => {
    if(!weather){
      
        async function fetchDefaultCity (){
        
          const cityCoords = await getCityCoordinates("London");
          setCoordinates([cityCoords[0].lat, cityCoords[0].lon])
          
          const weatherData = await getWeather(
            cityCoords[0].lat,
            cityCoords[0].lon
          );
          const weatherDataJson = JSON.stringify(weatherData)
          setWeather(await weatherDataJson)

          console.log(weatherData)

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
        mainFeelsLike ={mainFeelsLike}
        windSpeed={windSpeed}
        mainTempMin={mainTempMin}
        mainTempMax={mainTempMax}
        mainHumidity={mainHumidity}
        />
    </main>
  );
}

export default Weather