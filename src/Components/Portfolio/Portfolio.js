/** @format */

import React from "react";
import "./Portfolio.css";
import githubIcon from "../../Assets/Icons/github.svg";
import Fylo from "../../Assets/ProjectImages/FyloIMG.png";
import Shortly from "../../Assets/ProjectImages/ShortlyIMG.png";
import EasyBanking from "../../Assets/ProjectImages/EasyBankingIMG.png";
import TradeExpress from "../../Assets/ProjectImages/TradeExpressIMG.png";
import RockPaperScissors from "../../Assets/ProjectImages/RockPaperScissorsIMG.png";
import DictionaryApp from "../../Assets/ProjectImages/DictionaryIMG.png";
import haWallet from "../../Assets/ProjectImages/ha-wallet.png";
import GuessMyNumber from "../../Assets/ProjectImages/GuessMyNumber.png";
import DiceGame from "../../Assets/ProjectImages/DiceGameIMG.png";
import CounterApp from "../../Assets/ProjectImages/CounterApp.png";

const Portfolio = () => {
  const ReactData = [
    {
      id: 1,
      name: "Shortly",
      Github: "https://github.com/ObodoakorDavid/Shortly",
      LiveDemo: "https://shortly-webpage.netlify.app/",
      img: Shortly,
    },
    {
      id: 2,
      name: "Ha-Wallet",
      Github:
        "https://github.com/ObodoakorDavid/https://github.com/ObodoakorDavid/BookmarkWebpage",
      LiveDemo: "https://github.com/ObodoakorDavid/Ha-Wallet",
      img: haWallet,
    },
    {
      id: 3,
      name: "Fylo",
      Github: "https://github.com/ObodoakorDavid/Fylo",
      LiveDemo: "https://fylo-webpage-project.netlify.app/",
      img: Fylo,
    },
    {
      id: 4,
      name: "EasyBanking",
      Github: "https://github.com/ObodoakorDavid/TradExpress",
      LiveDemo: "https://generate-random-number.netlify.app/",
      img: EasyBanking,
    },
    {
      id: 5,
      name: "Rock Paper Scissors",
      Github: "https://github.com/ObodoakorDavid/Rock-Paper-Scissors",
      LiveDemo: "https://rock-paper-scissors-webpage.netlify.app/",
      img: RockPaperScissors,
    },
    {
      id: 6,
      name: "Dictionary App",
      Github: "https://github.com/ObodoakorDavid/Working-Dictionary",
      LiveDemo: "",
      img: DictionaryApp,
    },
    {
      id: 7,
      name: "TradExpress",
      Github: "https://github.com/ObodoakorDavid/TradExpress",
      LiveDemo: "https://generate-random-number.netlify.app/",
      img: TradeExpress,
    },
  ];

  const JavaScriptData = [
    {
      id: 1,
      name: "Guess My Number",
      Github: "https://github.com/ObodoakorDavid/GuessMyNumber",
      LiveDemo: "https://guess-my-number-tsa.netlify.app/",
      img: GuessMyNumber,
    },
    {
      id: 2,
      name: "Dice Game",
      Github: "https://github.com/ObodoakorDavid/DiceGame",
      LiveDemo: "https://dice-game-tsa.netlify.app/",
      img: DiceGame,
    },
    {
      id: 3,
      name: "Counter App",
      Github: "https://github.com/ObodoakorDavid/CounterWebsite",
      LiveDemo: "https://counterwebpage.netlify.app/",
      img: CounterApp,
    },
  ];

  const HtmlData = [
    {
      id: 1,
      name: "Shortly",
      Github: "https://github.com/ObodoakorDavid/Shortly",
      LiveDemo: "https://shortly-webpage.netlify.app/",
      img: Shortly,
    },
    {
      id: 2,
      name: "Ha-Wallet",
      Github:
        "https://github.com/ObodoakorDavid/https://github.com/ObodoakorDavid/BookmarkWebpage",
      LiveDemo: "https://github.com/ObodoakorDavid/Ha-Wallet",
      img: Shortly,
    },
    {
      id: 3,
      name: "Fylo",
      Github: "https://github.com/ObodoakorDavid/Fylo",
      LiveDemo: "https://fylo-webpage-project.netlify.app/",
      img: Fylo,
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
                    <a href="">Github</a>
                    <a href="">Live Demo</a>
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
