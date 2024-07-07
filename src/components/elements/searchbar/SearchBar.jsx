import './SearchBar.css'
import { getCityCoordinates, getWeather } from '../../../api/getLocation'
import { useEffect } from 'react'



const SearchBar = ({ currentSection, city, setCoordinates, setCity, setWeather, setWeatherMain, setWeatherDescription, setWeatherIcon, setMainTemp, setMainFeelsLike, setMainTempMin, setMainTempMax, setMainHumidity, setMainSeaLevel, setMainGroundLevel, setVisibility, setWindSpeed, setWindDeg, setClouds  }) => {

  useEffect(()=> {
    if(city){
    const input = document.querySelector("#city-input")
    input.placeholder = city
    }
  },[city])
  
  return (
  <div id='searchbar'>
    <input 
      type="text" 
      id='city-input'  
      placeholder='search City' 
      onKeyDown={async function(e){
        if (e.code == "Enter") {
          if (e.target.value) {
            // if(currentSection == "weather"){
              try {
                const cityCoords = await getCityCoordinates(e.target.value);
                setCoordinates([cityCoords[0].lat, cityCoords[0].lon])
                
                const weatherData = await getWeather(
                  cityCoords[0].lat,
                  cityCoords[0].lon
                );
                const weatherDataJson = JSON.stringify(weatherData)
                setWeather(weatherDataJson)
  
                e.target.placeholder = weatherData.name
                e.target.value = weatherData.name
                setCity(weatherData.name)
                setWeatherMain(weatherData.weather[0].main)
                setWeatherDescription(weatherData.weather[0].description)
                setWeatherIcon(weatherData.weather[0].icon)
                setMainTemp(weatherData.main.temp)
                setMainFeelsLike(weatherData.main.feels_like)
                setMainTempMin(weatherData.main.temp_min)
                setMainTempMax(weatherData.main.temp_max)
                setMainHumidity(weatherData.main.humidity)
                setMainSeaLevel(weatherData.main.sea_level)
                setMainGroundLevel(weatherData.main.grnd_level)
                setVisibility(weatherData.visibility)
                setWindSpeed(weatherData.wind.speed)
                setWindDeg(weatherData.wind.deg)
                setClouds(weatherData.clouds.all)
    
              } catch (error) {
                console.log(error);
              }
            // } else if(currentSection == "forecast"){
              // console.log("pintamos el forecast")
            // }
          }
        }
    }}
    />
  </div>
  )
}

export default SearchBar