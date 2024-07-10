import React, { useEffect, useState } from 'react'
import "./CitiesCards.css"
import "../cards.css"
import { getCityCoordinates, getWeather } from '../../../../api/getLocation'

const CitiesCards = ({ city }) => {

  const [popularCityTemp, setPopularCityTemp] = useState()
  const [popularCityIcon, setPopularCityIcon] = useState()
  const [popularCityDescription, setPopularCityDescription] = useState()
  const [popularCityCountry, setPopularCityCountry] = useState()

  useEffect(() => {
        async function fetchCity (){

          console.log(city)

            let cityCoords = await getCityCoordinates(city);
            console.log(await cityCoords)

          // console.log(await cityCoords)
          const weatherData = await getWeather(
            cityCoords[0].lat,
            cityCoords[0].lon
          );
          // const weatherDataJson = JSON.stringify(weatherData)
            // console.log(weatherData.main)
            setPopularCityTemp(Math.floor(weatherData.main.temp))
            setPopularCityCountry(weatherData.sys.country)
            setPopularCityIcon(weatherData.weather[0].icon)
            setPopularCityDescription(weatherData.weather[0].description)
        }
        fetchCity()
  },[]);

  return (
    <div className="popular-city-card card">
      <div className="top-card">
        <h3 className='city-name'>{city}, <span className='card-data'>{popularCityCountry}</span></h3>
      </div>
      <div className='bottom-card'>
        <div className='bottom-card-main'>
          <h2>{popularCityTemp}°</h2>
          <div className='bottom-card-main-image-container'>
          <img src={`../../../../../assets/icons/${popularCityIcon}@2x.png`} alt="" />
        </div>
        </div>
        <p className='card-data'>{popularCityDescription}</p>
      </div>
    </div>
  )
}

export default CitiesCards