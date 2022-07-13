/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbarr.css";

import Home from "../../Assets/Icons/house.svg";
import AboutMe from "../../Assets/Icons/person.svg";
import Portfolio from "../../Assets/Icons/briefcase.svg";
import ContactMe from "../../Assets/Icons/envelope-open.svg";
import brightness from "../../Assets/Icons/brightness-high.svg";
import moon from "../../Assets/Icons/moon-fill.svg";

const Navbarr = () => {
  const [image, setImage] = useState(brightness);

  function lightmode() {
    let body = document.body;

    body.classList.toggle("lightmode");
    if (body.classList.contains("lightmode")) {
      setImage(moon);
    } else {
      setImage(brightness);
    }
  }

  function iconClick(clickOne) {
    let icons = document.querySelectorAll(".icons");
    icons.forEach((icon) => {
      icon.classList.remove("active");
      clickOne.classList.add("active");
    });
  }
  return (
    <header>
      <nav className="nav-menu">
        <Link to="/">
          <img
            className="home icons"
            onClick={() => {
              let home = document.querySelector(".home");

              iconClick(home);
            }}
            src={Home}
            alt=""
          />
        </Link>
        <Link to="/aboutme">
          <img
            className="aboutMe icons"
            onClick={() => {
              let aboutMe = document.querySelector(".aboutMe");

              iconClick(aboutMe);
            }}
            src={AboutMe}
            alt=""
          />
        </Link>
        <Link to="/portfolio">
          <img
            className="portfolio-nav icons"
            onClick={() => {
              let portfolio1 = document.querySelector(".portfolio-nav");

              iconClick(portfolio1);
            }}
            src={Portfolio}
            alt=""
          />
        </Link>

        <Link to="/contactme">
          <img
            className="contactMe icons"
            onClick={() => {
              let contactMe = document.querySelector(".contactMe");

              iconClick(contactMe);
            }}
            src={ContactMe}
            alt=""
          />
        </Link>
        <img className="darkk" onClick={lightmode} src={image} alt="" />
      </nav>
    </header>
  );
};

export default Navbarr;
