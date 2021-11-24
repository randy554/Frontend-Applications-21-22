// import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title/Title";
import Filter from "./components/Filter/Filter";
import Legend from "./components/Legend/Legend";
import SvgBody from "./components/SvgBody/SvgBody";

function App() {
  return (
    <div className="App">
      <Title />
      <Filter />
      <Legend />
      <SvgBody />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
