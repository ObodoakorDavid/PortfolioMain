/** @format */

import React, { useState } from "react";
import { images } from "../../assets/images";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <div className="inner-main">
        <div>
          <h1>
            Hi, I'm <span>David Obodoakor. </span>A Web Developer
          </h1>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis
            tempora, tempore labore veritatis ullam eius aspernatur rem impedit
            facilis, cum consectetur ut perferendis eaque dolorem non nobis,
            dicta similique.
          </p> */}

          <p>
            I'm an enthusiatic web Developer that's passionate about creating
            beautiful, funtional and interactive webpages/websites using modern
            frameworks and libraries. I am also a fast learner who's always
            eager to learn about new things.
          </p>
        </div>
        <img src={images.myPhoto} alt="" />
      </div>
    </main>
  );
};

export default Main;
