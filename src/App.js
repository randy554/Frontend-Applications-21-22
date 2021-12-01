// import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title/Title";
import Filter from "./components/Filter/Filter";
import Legend, { legendItems } from "./components/Legend/Legend";
import SvgBody from "./components/SvgBody/SvgBody";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Whoops404 from "./components/Pages/Whoops404/Whoops404";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Filter />
        <Legend listItem={legendItems} />
        <SvgBody />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Whoops404 />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
