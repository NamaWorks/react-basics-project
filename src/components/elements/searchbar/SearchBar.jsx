import './SearchBar.css'
import { getCityCoordinates, getWeather } from '../../../api/getLocation'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const SearchBar = ({ city, setCoordinates, setWeather , weather}) => {

  useEffect(()=> {
    if(city){
    const input = document.querySelector("#city-input")
    input.placeholder = city
    } 
  },[city])
  
  const navigate = useNavigate();
  
  return (
  <div id='searchbar'>
    <input 
      type="text" 
      id='city-input'  
      placeholder='search City' 
      onKeyDown={async function(e){
        if (e.code == "Enter") {
          if (e.target.value) {
              try {
                navigate("/weather/" + e.target.value)
                const cityCoords = await getCityCoordinates(e.target.value);
                setCoordinates([cityCoords[0].lat, cityCoords[0].lon])
                
                const weatherData = await getWeather(
                  cityCoords[0].lat,
                  cityCoords[0].lon
                );

                const weatherDataJson = await JSON.stringify(weatherData)
                setWeather(weatherDataJson)
  

                console.log(JSON.parse(weatherDataJson).name)


                e.target.placeholder = await JSON.parse(weatherDataJson).name
                e.target.value = await JSON.parse(weatherDataJson).name
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