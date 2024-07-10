import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./ChangeSctButton.css"

const ChangeSctButton = ({ currentSection, setCurrentSection }) => {

  const navigate = useNavigate();

  return (
    <button
      className='change-section-btn'
      onClick={() => {
        if (!(currentSection == "weather")) {
          navigate("/weather");
        } else {
          navigate("/");
        }
      }}
    >
      {currentSection=="weather" ? "back to popular cities" : "detail"}
    </button>
  );
}

export default ChangeSctButton