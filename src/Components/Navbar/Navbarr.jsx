/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbarr.css";

import { icons } from "../../assets/icons";



const Navbarr = () => {
  const [image, setImage] = useState(icons.brightness);
  const [active, setActive] = useState("home");
  console.log(document.querySelector("meta[name=theme-color]"));

  function lightmode() {
    let body = document.body;
    body.classList.toggle("lightmode");
    if (body.classList.contains("lightmode")) {
      setImage(icons.moon);
      document
        .querySelector("meta[name=theme-color]")
        .setAttribute("theme-color", "#ffffff");
        console.log('hh');
    } else {
      setImage(icons.brightness);
      document
        .querySelector("meta[name=theme-color]")
        .setAttribute("theme-color", "#191d2b");
    }
  }
  return (
    <header>
      <nav className="nav-menu">
        <Link to="/">
          <img
            className={active === "home" ? "home icons active" : "home icons"}
            onClick={() => setActive("home")}
            src={icons.Home}
            alt=""
          />
        </Link>
        <Link to="/aboutme">
          <img
            className={
              active === "aboutMe" ? "aboutMe icons active" : "aboutMe icons"
            }
            onClick={() => setActive("aboutMe")}
            src={icons.AboutMe}
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
            src={icons.Portfolio}
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
            src={icons.ContactMe}
            alt=""
          />
        </Link>
        <img className="darkk" onClick={lightmode} src={image} alt="" />
      </nav>
    </header>
  );
};

export default Navbarr;
