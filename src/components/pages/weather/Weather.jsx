import { useEffect, useState } from "react"
import { getCurrentLocation, getWeather } from "../../../api/getLocation"


const Weather = () => {

const [city, setCity] = useState()
const [coordinates, setCoordinates] = useState()
const [weather, setWeather] = useState()

useEffect(() => {
},[]);

  return (
    <main id="weather">
      
    </main>
  )
}

export default Weather