// import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title/Title";
import Filter from "./components/Filter/Filter";
import Legend, { legendItems } from "./components/Legend/Legend";
import SvgBody from "./components/SvgBody/SvgBody";
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Whoops404 } from "./pages";

function App() {
  return (
    <div className="App">
      {/* <Title />
      <Filter />
      <Legend listItem={legendItems} />
      <SvgBody /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
