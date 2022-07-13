/** @format */
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarr from "./Components/Navbar/Navbarr";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
