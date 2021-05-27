import React from "react";

function ThemeSwitcherContainer({ onChangeTheme }) {
  
  return (
    <div className="h3-and-switch-container">
      <h2>calc</h2>

      <div className="switch-container">
        <p id="theme-p">THEME</p>
        <div className="switch">
          <input
            type="radio"
            id="switch1"
            name="switch"
            value="theme-one"
            onChange={() => onChangeTheme("ThemeOne")}
          />
          <label htmlFor="switch1">1</label>
          <input
            type="radio"
            id="switch2"
            name="switch"
            value="theme-two"
            onChange={() => onChangeTheme("ThemeTwo")}
          />
          <label htmlFor="switch2">2</label>
          <input
            type="radio"
            id="switch3"
            name="switch"
            value="theme-three"
            onChange={() => onChangeTheme("ThemeThree")}
          />
          <label htmlFor="switch3">3</label>
          <div className="switch__inner"></div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitcherContainer;
