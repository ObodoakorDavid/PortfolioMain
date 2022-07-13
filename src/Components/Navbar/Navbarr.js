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
  const [active, setActive] = useState("home");

  function lightmode() {
    let body = document.body;

    body.classList.toggle("lightmode");
    if (body.classList.contains("lightmode")) {
      setImage(moon);
    } else {
      setImage(brightness);
    }
  }
  return (
    <header>
      <nav className="nav-menu">
        <Link to="/">
          <img
            className={active === "home" ? "home icons active" : "home icons"}
            onClick={() => setActive("home")}
            src={Home}
            alt=""
          />
        </Link>
        <Link to="/aboutme">
          <img
            className={
              active === "aboutMe" ? "aboutMe icons active" : "aboutMe icons"
            }
            onClick={() => setActive("aboutMe")}
            src={AboutMe}
            alt=""
          />
        </Link>
        <Link to="/portfolio">
          <img
            className={
              active === "portfolio-nav"
                ? "portfolio-nav icons active"
                : "portfolio-nav icons"
            }
            onClick={() => setActive("portfolio-nav")}
            src={Portfolio}
            alt=""
          />
        </Link>

        <Link to="/contactme">
          <img
            className={
              active === "contactMe"
                ? "contactMe icons active"
                : "contactMe icons"
            }
            onClick={() => setActive("contactMe")}
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
