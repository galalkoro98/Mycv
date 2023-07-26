import React from "react";

import "./Controls.css";

export const Controls: React.FC = () => {
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

      <div className="theme-btn">
        <i className="fas fa-adjust ico"></i>
      </div>
    </>
  );
};
