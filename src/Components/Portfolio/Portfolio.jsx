/** @format */

import React from "react";
import "./Portfolio.css";
import { images } from "../../assets/images";

const Portfolio = () => {
  const ReactData = [
    {
      id: 10,
      name: "Countries Details",
      Github: "https://github.com/ObodoakorDavid/FM-rest-countries-api",
      LiveDemo: "https://rest-countries-api-main.netlify.app/",
      img: images.FMRestCountriesApi,
    },
    {
      id: 9,
      name: "Multi Step Form",
      Github: "https://github.com/ObodoakorDavid/FM-Multi-Step-Form",
      LiveDemo: "https://fm-multi-step-form-main-0.netlify.app/",
      img: images.MultiStepForm,
    },

    {
      id: 8,
      name: "Todo App",
      Github: "https://github.com/ObodoakorDavid/FM-Todo-App",
      LiveDemo: "https://fm-todo-app-main.netlify.app/",
      img: images.FMTodoApp,
    },
    {
      id: 5,
      name: "Random Advice Generator",
      Github: "https://github.com/ObodoakorDavid/FM-Advice-Generator",
      LiveDemo: "https://fm-random-advice-generator-main.netlify.app/",
      img: images.FMAdviceGenerator,
    },
    {
      id: 6,
      name: "Dictionary App",
      Github: "https://github.com/ObodoakorDavid/Working-Dictionary",
      LiveDemo: "https://dictionary-website.netlify.app/",
      img: images.DictionaryApp,
    },
    {
      id: 2,
      name: "Ha-Wallet",
      Github: "https://github.com/ObodoakorDavid/BookmarkWebpage",
      LiveDemo: "https://ha-wallet.netlify.app/",
      img: images.haWallet,
    },

    {
      id: 1,
      name: "Shortly",
      Github: "https://github.com/ObodoakorDavid/Shortly",
      LiveDemo: "https://shortly-webpage.netlify.app/",
      img: images.Shortly,
    },

    {
      id: 3,
      name: "Fylo",
      Github: "https://github.com/ObodoakorDavid/Fylo",
      LiveDemo: "https://fylo-webpage-project.netlify.app/",
      img: images.Fylo,
    },
    {
      id: 4,
      name: "EasyBanking",
      Github: "https://github.com/ObodoakorDavid/TradExpress",
      LiveDemo: "https://easybanking-webpage.netlify.app/",
      img: images.EasyBanking,
    },

    {
      id: 7,
      name: "TradExpress",
      Github: "https://github.com/ObodoakorDavid/TradExpress",
      LiveDemo: "https://tradexpress.netlify.app/",
      img: images.TradeExpress,
    },
  ];

  const JavaScriptData = [
    {
      id: 1,
      name: "Tip Calculator",
      Github: "https://github.com/ObodoakorDavid/FM-Tip-Calculator-App",
      LiveDemo: "https://fm-tip-calculator-main.netlify.app/",
      img: images.FMTipCalculator,
    },
    {
      id: 2,
      name: "Interactive Rating Component",
      Github:
        "https://github.com/ObodoakorDavid/FM-interactive-rating-component",
      LiveDemo: "https://fm-interactive-rating-component-0.netlify.app/",
      img: images.interactiveIMG,
    },
    {
      id: 3,
      name: "Guess My Number",
      Github: "https://github.com/ObodoakorDavid/GuessMyNumber",
      LiveDemo: "https://guess-my-number-tsa.netlify.app/",
      img: images.GuessMyNumber,
    },
    {
      id: 4,
      name: "Dice Game",
      Github: "https://github.com/ObodoakorDavid/DiceGame",
      LiveDemo: "https://dice-game-tsa.netlify.app/",
      img: images.DiceGame,
    },
  ];

  return (
    <div className="portfolio">
      <h1>
        MY <span>PORTFOLIO</span>
      </h1>
      <p>
        Here are some of the projects i've completed with the knowledge i have
        on various programming languagues.
      </p>

      <div className="allprojects">
        <div className="allprojects-items">
          <h1>React Projects </h1>
          <div className="projects">
            {ReactData.map((datum) => {
              return (
                <div className="eachproject" key={datum.id}>
                  <img src={datum.img} alt="" />
                  <h3>{datum.name}</h3>
                  <span className="bg-item">
                    <a href={datum.Github}>Github</a>
                    <a href={datum.LiveDemo}>Live Demo</a>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="allprojects-items">
          <h1>JavaScript Projects</h1>
          <div className="projects">
            {JavaScriptData.map((datum) => {
              return (
                <div className="eachproject" key={datum.id}>
                  <img src={datum.img} alt="" />
                  <h3>{datum.name}</h3>
                  <div className="bg-item">
                    <a href={datum.Github}>Github</a>
                    <a href={datum.LiveDemo}>Live Demo</a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="allprojects-items">
            <h1>HTML & CSS Projects</h1>
            <div className="projects">
              {HtmlData.map((datum) => {
                return (
                  <div className="eachproject" key={datum.id}>
                    <img src={datum.img} alt="" />
                    <h3>{datum.name}</h3>
                    <div className="bg-item">
                      <a href="">Github</a>
                      <a href="">Live Demo</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
