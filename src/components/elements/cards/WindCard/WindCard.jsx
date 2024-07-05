import React from 'react'
import "./WindCard.css"

const WindCard = ({ windSpeed, windDeg }) => {
  return (
    <div className='card'>
      <div className="top-card">
        <h3>wind<br/>status</h3>
      </div>

      <div className="bottom-card">
        <p>Wind Speed: <span className='card-data'>{windSpeed} m/s</span></p>
        <div>
          <p>Wind Direction:</p>
          <div className='compass'>
            <div className='compass-drawing' style={{transform:`rotate(${windDeg}deg)`}}>
              <div className='inner-circle'>
                <div className='inner-direction'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WindCard