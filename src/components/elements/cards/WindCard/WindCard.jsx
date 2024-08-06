import "./WindCard.css"

const WindCard = ({ weather  }) => {  
  return (
    <div className='card'>
      <div className="top-card">
        <h3>wind<br/>status</h3>
      </div>

      <div className="bottom-card">
        <p>Wind Speed: <span className='card-data'>{weather ? JSON.parse(weather).wind.speed : 0} m/s</span></p>
        <div>
          <p>Wind Direction:</p>
          <div className='compass'>
            <div className='compass-drawing' style={{transform:`rotate(${weather ? JSON.parse(weather).wind.deg : 0}deg)`}}>
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