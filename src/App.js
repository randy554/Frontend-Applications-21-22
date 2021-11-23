// import logo from "./logo.svg";
import "./App.css";

const Header = () => {
  return (
    <header>
      <h1>Eve's kitchen</h1>
    </header>
  );
};

const Main = () => {
  return (
    <section>
      <p>We serve the most delicious food around.</p>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>It's true.</p>
    </footer>
  );
};

function App() {
  return (
    <div className="App">
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
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
