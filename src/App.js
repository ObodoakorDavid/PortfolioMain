/** @format */
import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarr from "./components/Navbar/Navbarr";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactme" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
