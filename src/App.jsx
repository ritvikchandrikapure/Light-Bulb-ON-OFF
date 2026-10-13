
import { useState } from "react";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);
  const [bulbColor, setBulbColor] = useState("#D98B72");

  const toggleLight = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="app">
      <main className="lighting">
        {/* Heading */}
        <div className="heading">
          <h1>
            Make it glow<span>.</span>
          </h1>
        </div>

        {/* Bulb */}
        <div
          className={`bulb-area ${isOn ? "on" : "off"}`}
          style={{ "--light-color": bulbColor }}
        >
          <div className="bulb">
            <div className="bulb-glass">
              <div className="glass-reflection"></div>
              <div className="filament">
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="bulb-neck"></div>

            <div className="bulb-socket">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="bulb-contact"></div>
          </div>
        </div>

        {/* Light switch */}
        <div className="power-section">
          <div className="power-info">
            <span className={`power-dot ${isOn ? "active" : ""}`}></span>
            <h3>{isOn ? "Light is ON" : "Light is OFF"}</h3>
          </div>

          <button
            type="button"
            className={`switch ${isOn ? "enabled" : ""}`}
            onClick={toggleLight}
            aria-label={isOn ? "Turn light off" : "Turn light on"}
            aria-pressed={isOn}
          >

            <span className="switch-knob"></span>
          </button>
        </div>

        {/* Color picker */}
        <div className="color-section">
          <div className="color-heading">
            <label htmlFor="bulb-color">Bulb colour</label>
            <span>{bulbColor.toUpperCase()}</span>
          </div>

          <input
            id="bulb-color"
            className="color-picker"
            type="color"
            value={bulbColor}
            onChange={(e) => setBulbColor(e.target.value)}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
