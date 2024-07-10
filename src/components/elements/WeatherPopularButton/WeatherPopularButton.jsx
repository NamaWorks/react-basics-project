import React from 'react'
import { useNavigate } from 'react-router-dom'

const WeatherPopularButton = ({ currentSection, setCurrentSection }) => {

  const navigate = useNavigate();

  return (
    <button onClick={()=>{
      if(!(currentSection == "weather")){
        navigate("/weather")
      } else {navigate("/")}
      }}>
      Popular Cities / Detail
    </button>
  )
}

export default WeatherPopularButton