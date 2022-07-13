/** @format */

import React from "react";
import './About.css'

const About = () => {
  return (
    <div className="about">
      <h1>
        ABOUT <span>ME</span>
      </h1>
      <div className="information">
        <div className="inner-information1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut
            dignissimos inventore omnis, voluptate non odit asperiores, eos
            ducimus assumenda recusandae atque corporis. Consequatur repellat
            itaque nemo fugiat ea optio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aut
            dignissimos inventore omnis, voluptate non odit asperiores, eos
            ducimus assumenda recusandae atque corporis. Consequatur repellat
            itaque nemo fugiat ea optio.
          </p>
        </div>
        <div className="inner-information2">
          <div>
            <div>
              <div>
                <p>20+</p>
              </div>
              <p>Projects Completed</p>
            </div>
            <div>
              <div>
                <p>1+</p>
              </div>
              <p>Years Of Experience</p>
            </div>
          </div>
        </div>
      </div>

      <h2>MY SKILLS</h2>
      <div className="allprogress">
        <div className="progress">
          <p>HTML5</p>
          <div>
            <p>80%</p>
            <div className="progress-inner">
              <div className="progressbar html"></div>
            </div>
          </div>
        </div>
        <div className="progress">
          <p>CSS</p>
          <div>
            <p>70%</p>
            <div className="progress-inner">
              <div className="progressbar css"></div>
            </div>
          </div>
        </div>
        <div className="progress">
          <p>JavaScript</p>
          <div>
            <p>80%</p>
            <div className="progress-inner">
              <div className="progressbar javascript"></div>
            </div>
          </div>
        </div>
        <div className="progress">
          <p>ReactJs</p>
          <div>
            <p>70%</p>
            <div className="progress-inner">
              <div className="progressbar react"></div>
            </div>
          </div>
        </div>
        <div className="progress">
          <p>Python</p>
          <div>
            <p>40%</p>
            <div className="progress-inner">
              <div className="progressbar python"></div>
            </div>
          </div>
        </div>
        <div className="progress">
          <p>Django</p>
          <div>
            <p>30%</p>
            <div className="progress-inner">
              <div className="progressbar django"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
