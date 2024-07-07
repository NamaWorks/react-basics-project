import "./TempsCard.css"
import "../../cards/cards.css"

import React from 'react'

const TempsCard = ({ mainTempMin, mainTempMax, mainFeelsLike }) => {
  return (
    <div className="card">
      <div className="top-card">
        <h3>temperature <br/>status</h3>
      </div>

      <div className="bottom-card">
        <p>Minimum: <span className="card-data">{mainTempMin}°</span></p>
        <p>Maximum: <span className="card-data">{mainTempMax}°</span></p>
        <p>Feels like: <span className="card-data">{mainFeelsLike}°</span></p>
      </div>
    </div>
  )
}

export default TempsCard