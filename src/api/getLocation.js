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
  // const cityInput = await document.querySelector("#city-input")
  // const cityInputValue = cityInput.value
  // console.log(cityInputValue)

  const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q={${city}},{state code}&appid=${import.meta.env.VITE_API_KEY}`)
  const resJson = await res.json()
  return resJson
}

export const getForecast = async (lat, lng) => {
const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${import.meta.env.VITE_API_KEY}`)
  const resJson = await res.json()
  return resJson
}

export const getWeather = async (lat, lng) => {
const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${import.meta.env.VITE_API_KEY}`)
  const resJson = await res.json()
  return resJson
}