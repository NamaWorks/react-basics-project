import React, { useEffect, useState } from 'react'
import "./PopularCities.css"
import CitiesCards from '../../elements/cards/CitiesCards/CitiesCards'

const PopularCities = ({ currentSection, setCurrentSection }) => {

  useEffect(()=> {
    setCurrentSection('popularCities')
  },[])

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