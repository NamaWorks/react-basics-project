import { Route, Routes } from 'react-router-dom'
import './App.css'
import SearchBar from './components/elements/searchbar/SearchBar'
import Weather from './components/pages/weather/Weather.jsx'
import { useState } from 'react'





function App() {

  const [city, setCity] = useState("Madrid")
  // const [coordinates, setCoordinates] = useState([40.4168, 3.7038])
  const [coordinates, setCoordinates] = useState(20)
  const [weather, setWeather] = useState()

  return (
    <>
      <SearchBar coordinates={coordinates} setCoordinates={setCoordinates} city={city} weather={weather} />
      <Weather coordinates={coordinates} city={city} weather={weather}/>
      {/* <Routes>
        <Route path="/" element={<Weather/>}/>
        <Route path="/weather/:name" element={<Weather/>}/>
        <Route path="/forecast/:name" element={<Forecast/>}/>
      </Routes> */}
    </>
  )
}

export default App
