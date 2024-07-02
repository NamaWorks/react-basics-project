import { getCurrentLocationMock, weatherFetchMock } from "./dataMock";

export const getCurrentLocation = () => {

navigator.geolocation.getCurrentPosition(function(position){
       let coordinates = {
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude,
      };
      let coordinatesString = JSON.stringify(coordinates)
      sessionStorage.setItem("coordinates", coordinatesString)
    })
}

export const getCityCoordinates = async (city) => {
  // const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q={${city}},{state code}&appid=${import.meta.env.VITE_API_KEY}`)
  // const resJson = await res.json()
  const resJson = getCurrentLocationMock
  return resJson

}

export const getForecast = async (lat, lng) => {
 const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${import.meta.env.VITE_API_KEY}`)
  const resJson = await res.json()

  let coordinates = {
    latitude: lat, 
    longitude: lng,
  };
  let coordinatesString = JSON.stringify(coordinates)
  sessionStorage.setItem("coordinates", coordinatesString)

  return resJson
}

export const getWeather = async (lat, lng) => {
const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
const resJson = await res.json()

let coordinates = {
  latitude: lat, 
  longitude: lng,
};
let coordinatesString = JSON.stringify(coordinates)
sessionStorage.setItem("coordinates", coordinatesString)

  // const resJson = weatherFetchMock
  return resJson
}

