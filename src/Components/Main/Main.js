/** @format */

import React, { useState } from "react";
import Me from "../../Assets/Icons/pexels-francesco-ungaro-2926525.jpg";
import './Main.css'

const Main = () => {
  return (
    <main className="main">
      <div className="inner-main">
        <div>
          <h1>
            Hi i'm <span>Phillip Stark. </span>A Web Developer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In debitis
            tempora, tempore labore veritatis ullam eius aspernatur rem impedit
            facilis, cum consectetur ut perferendis eaque dolorem non nobis,
            dicta similique.
          </p>
        </div>
        <img src={Me} alt="" />
      </div>
    </main>
  );
};

export default Main;
