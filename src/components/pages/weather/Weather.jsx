import "./Weather.css"

import { useEffect, useState } from "react"
import { getCityCoordinates, getWeather } from "../../../api/getLocation"
import MainCardWeather from "../../elements/cards/MainCardWeather/MainCardWeather";
import TempsCard from "../../elements/cards/TempsCard/TempsCard";
import WindCard from "../../elements/cards/WindCard/WindCard";
import MiscCard from "../../elements/cards/MiscCard/MiscCard";
import { useParams } from "react-router-dom";
import { fetchDefaultCity } from "../../../api/fetchDefaultCity";


const Weather = ({ currentSection, coordinates, weather, city, setCurrentSection, setCoordinates, setCity, setWeather }) => {

  
  const { cityParam } = useParams()
  // console.log(cityParam)
  
  
  useEffect(() => {
    setCurrentSection("weather")
      if(!weather){
          fetchDefaultCity(cityParam, setCoordinates, setWeather)
      }
      
    },[weather]);

  return (
    <main id="weather">
      <MainCardWeather 
        weather={weather}
        />
  <div className="smaller-cards">
      <TempsCard
      weather={weather}
      />

      <WindCard 
      weather={weather}
      />
  </div>
  
      <MiscCard 
        coordinates={coordinates}
        city={city}
        weather={weather}
      />
  
    </main>
  );
}

export default Weather