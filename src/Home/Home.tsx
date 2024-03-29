import React from "react";
import "./styles/Home.css";
import { Shape } from "./Shape";

export const Home: React.FC<{}> = () => {
  return (
    <div className="home__header__content">
      <div className="home__left__header">
        <Shape />
        <div className="home__image__container">
          <img src="./assets/images/photo.jpg" alt="home personal" />
        </div>
      </div>
      <div className="home__right__header">
        <h1 className="home__header__name">
          "Meet:
          <span> Galal</span> Aspiring Junior Web Developer with a Passion for
          Creativity & IT Support Specialist"
        </h1>
        <p className="first__paragraph">
          I am a self-motivated individual who thrives on giving my all to any
          project I undertake. The thrill of successfully completing one project
          and eagerly moving on to the next one excites me. I am always looking
          ahead to the next task at hand, ready to take on new challenges with
          passion and enthusiasm. My dedication to IT and my genuine enjoyment
          of learning drive me to continuously improve and expand my skills.
        </p>
        <p className="second__paragraph">
          I'm a driven person by evaluation, development and innovation.
        </p>
        <div className="btn__container">
          <a href="link" className="main__btn">
            <span className="btn__text">Download CV</span>
            <span className="btn__icon">
              <i className="fas fa-download"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
