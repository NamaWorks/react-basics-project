import React, { useState } from 'react'
import "./PopularCities.css"
import CitiesCards from '../../elements/cards/CitiesCards/CitiesCards'

const PopularCities = ({ currentSection, setCurrentSection }) => {

  setCurrentSection('popularCities')

  // const [cityA, setCityA] = useState("Almendralejo")
  // const [cityB, setCityB] = useState("Cadiz")
  // const [cityC, setCityC] = useState("Córdoba")
  // const [cityD, setCityD] = useState("Jerez de la Frontera")
  // const [cityE, setCityE] = useState("Sevilla")
  // const [cityF, setCityF] = useState("Don Benito")
  // const [cityG, setCityG] = useState("Grazalema")
  const [cityA, setCityA] = useState("Tanger")
  const [cityB, setCityB] = useState("Barcelona")
  const [cityC, setCityC] = useState("Paris")
  const [cityD, setCityD] = useState("Milan")
  const [cityE, setCityE] = useState("Berlin")
  const [cityF, setCityF] = useState("Oslo")
  const [cityG, setCityG] = useState("London")



  return (
    <div className='cities-cards'>
      <CitiesCards 
        city={cityA}
      />
      <CitiesCards 
        city={cityB}
      />
      <CitiesCards 
        city={cityC}
      />
      <CitiesCards 
        city={cityD}
      />
      <CitiesCards 
        city={cityE}
      />
      <CitiesCards 
        city={cityF}
      />
      <CitiesCards 
        city={cityG}
      />
    </div>
  )
}

export default PopularCities