import { useState } from "react";
import "./App.css";

function App() {
  const imgLightOn = process.env.PUBLIC_URL + "/on.jpg";
  const imgLightOff = process.env.PUBLIC_URL + "/off.jpg";
  const [isOn, setIsOn] = useState(false);

  return (
    <div id="container">
      <img id="light" src={isOn ? imgLightOn : imgLightOff} alt="Light"/>
      <button id="btn" onClick={() => setIsOn(!isOn)}>
        {isOn ? "On" : "Off"}
      </button>
    </div>
  );
}

export default App;
