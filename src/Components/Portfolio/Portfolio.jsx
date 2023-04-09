/** @format */

import React from "react";
import "./Portfolio.css";
import { images } from "../../Assets/images";

const Portfolio = () => {
  const ReactData = [
    {
      id: 1,
      name: "Countries Details",
      Github: "https://github.com/ObodoakorDavid/FM-rest-countries-api",
      LiveDemo: "https://rest-countries-api-main.netlify.app/",
      img: images.FMRestCountriesApi,
    },
    {
      id: 2,
      name: "Multi Step Form",
      Github: "https://github.com/ObodoakorDavid/FM-Multi-Step-Form",
      LiveDemo: "https://fm-multi-step-form-main-0.netlify.app/",
      img: images.MultiStepForm,
    },

    {
      id: 3,
      name: "Todo App",
      Github: "https://github.com/ObodoakorDavid/FM-Todo-App",
      LiveDemo: "https://fm-todo-app-main.netlify.app/",
      img: images.FMTodoApp,
    },
    {
      id: 4,
      name: "Job Listings",
      Github: "https://github.com/ObodoakorDavid/FM-static-job-listings",
      LiveDemo: "https://fm-job-listings-0.netlify.app/",
      img: images.jobListings,
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
      id: 7,
      name: "Ha-Wallet",
      Github: "https://github.com/ObodoakorDavid/BookmarkWebpage",
      LiveDemo: "https://ha-wallet.netlify.app/",
      img: images.haWallet,
    },

    {
      id: 8,
      name: "Shortly",
      Github: "https://github.com/ObodoakorDavid/Shortly",
      LiveDemo: "https://shortly-webpage.netlify.app/",
      img: images.Shortly,
    },

    {
      id: 9,
      name: "Fylo",
      Github: "https://github.com/ObodoakorDavid/Fylo",
      LiveDemo: "https://fylo-webpage-project.netlify.app/",
      img: images.Fylo,
    },
    {
      id: 10,
      name: "EasyBanking",
      Github: "https://github.com/ObodoakorDavid/TradExpress",
      LiveDemo: "https://easybanking-webpage.netlify.app/",
      img: images.EasyBanking,
    },

    
    // {
    //   id: 11,
    //   name: "TradExpress",
    //   Github: "https://github.com/ObodoakorDavid/TradExpress",
    //   LiveDemo: "https://tradexpress.netlify.app/",
    //   img: images.TradeExpress,
    // },
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
      name: "Social Media Dashboard",
      Github: "https://github.com/ObodoakorDavid/FM-social-media-dashboard",
      LiveDemo: "https://social-media-dashboard-0.netlify.app/",
      img: images.socialMediaDashboard,
    },
    {
      id: 3,
      name: "News Homepage",
      Github: "https://github.com/ObodoakorDavid/FM-news-homepage",
      LiveDemo: "https://new-homepage-0.netlify.app/",
      img: images.newsHomepage,
    },
    {
      id: 4,
      name: "FAQ Accordion",
      Github: "https://github.com/ObodoakorDavid/FM-faq-accordion-main",
      LiveDemo: "https://fm-faq-accordion-main.netlify.app/",
      img: images.faqAccordion,
    },

    {
      id: 5,
      name: "Interactive Rating Component",
      Github:
        "https://github.com/ObodoakorDavid/FM-interactive-rating-component",
      LiveDemo: "https://fm-interactive-rating-component-0.netlify.app/",
      img: images.interactiveIMG,
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
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
