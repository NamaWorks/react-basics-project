


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
  console.log(city)
  const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q={${city}},{state code}&appid=${import.meta.env.VITE_API_KEY}`)
  const resJson = await res.json()
  console.log(resJson) 
}