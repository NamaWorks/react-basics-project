import './App.css'
import { getCityCoordinates, getCurrentLocation } from './api/getLocation'
import SearchBar from './components/elements/SearchBar'

getCurrentLocation()
getCityCoordinates("Córdoba")

function App() {
  return (
    <>
      <h1>Weather App</h1>
      <SearchBar />
    </>
  )
}

export default App
