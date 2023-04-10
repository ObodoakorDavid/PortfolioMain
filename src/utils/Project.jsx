/** @format */

import React from "react";

const Project = ({ datum }) => {
  const { img, name, Github, LiveDemo } = datum;
  return (
    <div className="eachproject">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <span className="bg-item">
        <a href={Github}>Github</a>
        <a href={LiveDemo}>Live Demo</a>
      </span>
    </div>
  );
};

export default Project;
