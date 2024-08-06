import { getCityCoordinates, getWeather } from "./getLocation";

  export const fetchDefaultCity = async(cityParam, setCoordinates, setWeather)=>{
    
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
    setWeather(weatherDataJson)
}