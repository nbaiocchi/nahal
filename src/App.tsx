import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import { Button } from "./components/button"
import { AppContainer} from "./components/style";

function App() {
  const [meteo1, setMeteo1] = useState("");
  const [meteo2, setMeteo2] = useState("");
  const [meteo3, setMeteo3] = useState("");

  const meteolyon = () => {
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=Lyon&appid=8c2dbdca747ed150544b60e2ae60fbf1").then(
      (response) => {
        setMeteo1(response.data.weather[0].description);
        setMeteo2(response.data.wind.speed);
        setMeteo3(response.data.main.humidity);
      }
    );
  };
  
  return (
  <AppContainer  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <span className="heading3">React Meteo</span>
      <Button onClick={meteolyon}>Check Meteo Lyon</Button>
        <section className="section">
              <div className="level-item has-text-centered">
                <div>
                <p className="heading">Weather description</p>
                <p className="heading2">{meteo1}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">humidity</p>
                  <p className="heading2">{meteo3}</p>
                </div>
              </div>
                <div>
                  <p className="heading">wind</p>
                  <p className="heading2">{meteo2}</p>
              </div>
        </section>
    </AppContainer>
    )
}

export default App
