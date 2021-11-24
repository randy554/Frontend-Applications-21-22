// import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title/Title";
import Filter from "./components/Filter/Filter";
import Legend, { legendItems } from "./components/Legend/Legend";
import SvgBody from "./components/SvgBody/SvgBody";

function App() {
  return (
    <div className="App">
      <Title />
      <Filter />
      <Legend listItem={legendItems} />
      <SvgBody />
    </div>
  );
}

export default App;
