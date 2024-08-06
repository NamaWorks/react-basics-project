import "./App.css";
import { Route, Routes } from 'react-router-dom';
import SearchBar from "./components/elements/searchbar/SearchBar";
import CurrentCity from "./components/elements/CurrentCity/CurrentCity.jsx";
import Footer from "./components/elements/footer/Footer";
import Weather from "./components/pages/weather/Weather.jsx";
import { useEffect, useState } from "react";
import { getWeather } from "./api/getLocation.js";
import PopularCities from "./components/pages/PopularCities/PopularCities.jsx";
import ChangeSctButton from "./components/elements/ChangeSctButton/ChangeSctButton";


function App() {

  useEffect(()=> {
console.log("weather changed")
  },[])

  const [city, setCity] = useState();
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [currentSection, setCurrentSection] = useState()


  return (
    <>
      <div className="top-menu">
        <SearchBar
          currentSection={currentSection}
          city={city}
          weather={weather}
          setCoordinates={setCoordinates}
          setCity={setCity}
          setWeather={setWeather}
        />

        <ChangeSctButton
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <CurrentCity 
          coordinates={coordinates}
          city={city}
        />
      </div>
      <Routes>
        <Route path="/">
          <Route
            index element={
              <PopularCities
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
              />
              
            }
          />
          <Route 
            path="weather"
            element={<Weather
              currentSection={currentSection}
              coordinates={coordinates}
              city={city}
              weather={weather}
              setCurrentSection={setCurrentSection}
              setCoordinates={setCoordinates}
              setCity={setCity}
              setWeather={setWeather}/>}
          />
          <Route 
            path="weather/:cityParam"
            element={<Weather
              currentSection={currentSection}
              coordinates={coordinates}
              city={city}
              weather={weather}
              setCurrentSection={setCurrentSection}
              setCoordinates={setCoordinates}
              setCity={setCity}
              setWeather={setWeather}/>}
          />
          </Route>

      </Routes>
      <Footer
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        city={city}
        weather={weather}
      />
    </>
  );
}

export default App;
