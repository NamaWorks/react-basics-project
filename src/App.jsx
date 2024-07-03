import "./App.css";
import { Route, Routes } from 'react-router-dom';
import SearchBar from "./components/elements/searchbar/SearchBar";
import CurrentCity from "./components/elements/CurrentCity/CurrentCity.jsx";
import Footer from "./components/elements/footer/Footer";
import Weather from "./components/pages/weather/Weather.jsx";
import { useEffect, useState } from "react";
import { getWeather } from "./api/getLocation.js";


function App() {

  useEffect(()=> {
console.log("weather changed")
  },[])

  const [city, setCity] = useState();
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [weatherMain, setWeatherMain] = useState();
  const [weatherDescription, setWeatherDescription] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [mainTemp, setMainTemp] = useState();
  const [mainFeelsLike, setMainFeelsLike] = useState();
  const [mainTempMin, setMainTempMin] = useState();
  const [mainTempMax, setMainTempMax] = useState();
  const [mainHumidity, setMainHumidity] = useState();
  const [mainSeaLevel, setMainSeaLevel] = useState();
  const [mainGroundLevel, setMainGroundLevel] = useState();
  const [visibility, setVisibility] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [windDeg, setWindDeg] = useState();
  const [clouds, setClouds] = useState();

  useEffect(() => {
    // async function getWeatherData() {
    //   const weatherData = await getWeather(coordinates[0], coordinates[1]);
    //   const weatherDataJson = JSON.stringify(weatherData);
    //   setWeather(weatherDataJson);
    //   await getWeatherData();
    // }
  }, []);

  return (
    <>
      <div className="top-menu">
        <SearchBar
          setCoordinates={setCoordinates}
          setCity={setCity}
          setWeather={setWeather}
          setWeatherMain={setWeatherMain}
          setWeatherDescription={setWeatherDescription}
          setWeatherIcon={setWeatherIcon}
          setMainTemp={setMainTemp}
          setMainFeelsLike={setMainFeelsLike}
          setMainTempMin={setMainTempMin}
          setMainTempMax={setMainTempMax}
          setMainHumidity={setMainHumidity}
          setMainSeaLevel={setMainSeaLevel}
          setMainGroundLevel={setMainGroundLevel}
          setVisibility={setVisibility}
          setWindSpeed={setWindSpeed}
          setWindDeg={setWindDeg}
          setClouds={setClouds}
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
              <Weather
                coordinates={coordinates}
                city={city}
                weather={weather}
                weatherMain={weatherMain}
                weatherDescription={weatherDescription}
                weatherIcon={weatherIcon}
                mainTemp={mainTemp}
                mainFeelsLike={mainFeelsLike}
                mainTempMin={mainTempMin}
                mainTempMax={mainTempMax}
                mainHumidity={mainHumidity}
                mainSeaLevel={mainSeaLevel}
                mainGroundLevel={mainGroundLevel}
                visibility={visibility}
                windSpeed={windSpeed}
                windDeg={windDeg}
                clouds={clouds}
                setCoordinates={setCoordinates}
                setCity={setCity}
                setWeather={setWeather}
                setWeatherMain={setWeatherMain}
                setWeatherDescription={setWeatherDescription}
                setWeatherIcon={setWeatherIcon}
                setMainTemp={setMainTemp}
                setMainFeelsLike={setMainFeelsLike}
                setMainTempMin={setMainTempMin}
                setMainTempMax={setMainTempMax}
                setMainHumidity={setMainHumidity}
                setMainSeaLevel={setMainSeaLevel}
                setMainGroundLevel={setMainGroundLevel}
                setVisibility={setVisibility}
                setWindSpeed={setWindSpeed}
                setWindDeg={setWindDeg}
                setClouds={setClouds}
              />
            }
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
