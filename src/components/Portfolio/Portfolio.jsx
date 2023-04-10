/** @format */

import React, { useState } from "react";
import "./Portfolio.css";
import Project from "../../utils/Project";
import { data } from "../../data/data";

const Portfolio = () => {
  const [currentData, setCurrentData] = useState(data.ReactData);
  const [heading, setHeading] = useState("React");

  return (
    <div className="portfolio">
      <h1>
        MY <span>PORTFOLIO</span>
      </h1>
      <p>
        Here are some of the projects i've completed with the knowledge i have
        on various programming languagues.
      </p>

      <div className="options">
        <p
          onClick={() => {
            setCurrentData(data.ReactData);
            setHeading("React");
          }}
        >
          React
        </p>
        <p
          onClick={() => {
            setCurrentData(data.JavaScriptData);
            setHeading("JavaScript");
          }}
        >
          JavaScript
        </p>

        {/* <p>React/Django</p> */}
      </div>

      <div className="allprojects">
        <div className="allprojects-items">
          <h1>{heading} Projects</h1>
          <div className="projects">
            {currentData.map((datum) => {
              return <Project key={datum.id} datum={datum} />;
            })}
          </div>
        </div>

        {/* <div className="allprojects-items">
          <h1>JavaScript Projects</h1>
          <div className="projects">
            {data.JavaScriptData.map((datum) => {
              return <Project key={datum.id} datum={datum} />;
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
