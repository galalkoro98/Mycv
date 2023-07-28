import React from "react";

import "./Controls.css";

import useThemeButton from "../Hooks/Theme/useThemeButton";

export const Controls: React.FC = () => {
  const { handleThemeToggle, isLightMode } = useThemeButton();
  return (
    <>
      <div className="controls">
        <div className="control control-0 active-btn" data-id="home">
          <i className="fas fa-home icon"></i>
        </div>
        <div className="control control-1" data-id="camera">
          <i className="fas fa-camera icon"></i>
        </div>
        <div className="control control-2" data-id="about">
          <i className="fas fa-user icon"></i>
        </div>
        <div className="control control-3" data-id="portfolio">
          <i className="fas fa-briefcase icon"></i>
        </div>
        <div className="control control-4" data-id="blogs">
          <i className="far fa-newspaper icon"></i>
        </div>
        <div className="control control-5" data-id="contact">
          <i className="fas fa-envelope-open icon"></i>
        </div>
      </div>

      <div
        className={`theme-btn ${isLightMode ? "light-mode" : ""}`}
        onClick={handleThemeToggle}
      >
        <i className="fas fa-adjust ico"></i>
      </div>
    </>
  );
};
