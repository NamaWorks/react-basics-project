import { getCurrentLocationMock, weatherFetchMock } from "./dataMock";

export const getCityCoordinates = async (city) => {
  const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q={${city}}&appid=${import.meta.env.VITE_API_KEY}`)
  const resJson = await res.json()
  console.log(resJson)
  // const resJson = getCurrentLocationMock
  return resJson

}

export const getForecast = async (lat, lng) => {
 const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
  const resJson = await res.json()

  // console.log(res)

  console.log(resJson)


  // return resJson
}

export const getWeather = async (lat, lng) => {
const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
const resJson = await res.json()

let coordinates = {
  latitude: lat, 
  longitude: lng,
};
let coordinatesString = JSON.stringify(coordinates)

// const resJson = weatherFetchMock

  return resJson
}

