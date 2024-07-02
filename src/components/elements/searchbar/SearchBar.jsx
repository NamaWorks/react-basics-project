import './SearchBar.css'
import { getCityCoordinates, getWeather } from '../../../api/getLocation'



const SearchBar = ({ setCoordinates, setCity, setWeather, setWeatherMain, setWeatherDescription, setWeatherIcon, setMainTemp, setMainFeelsLike, setMainTempMin, setMainTempMax, setMainHumidity, setMainSeaLevel, setMainGroundLevel, setVisibility, setWindSpeed, setWindDeg, setClouds  }) => {
  
  return (
  <div id='searchbar'>
    <input 
      type="text" 
      id='city-input'  
      placeholder='search City' 
    //   onBlur={async function(e){
    //     console.log(`blur`)
    // }}
      onKeyDown={async function(e){
        if (e.code == "Enter") {
          if (e.target.value) {
            try {

              const cityCoords = await getCityCoordinates(e.target.value);
              setCoordinates([cityCoords[0].lat, cityCoords[0].lon])
              
              const weatherData = await getWeather(
                cityCoords[0].lat,
                cityCoords[0].lon
              );
              const weatherDataJson = JSON.stringify(weatherData)
              setWeather(weatherDataJson)
  
              e.target.value = weatherData.name
              setCity(weatherData.name)
  
            } catch (error) {
              console.log(error);
            }
          }
        }
    }}
    />
  </div>
  )
}

export default SearchBar