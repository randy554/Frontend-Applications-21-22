// import logo from "./logo.svg";
import "./App.css";

const Header = (props) => {
  return (
    <header>
      <h1>{props.name}'s kitchen</h1>
    </header>
  );
};

// Dishes for menu
const dishes = ["Red Red", "Jollof", "Bami", "Spaghetti"];
// Create object to iterate over list items
const dishesObject = dishes.map((dish, i) => ({ id: i, title: dish }));

const Main = (props) => {
  console.log("Wat zit in props:", props);
  return (
    <section>
      We {props.activity} the most {props.adjective} {props.item} around.
      {/* <p>We serve the most {props.adjective} food around.</p> */}
      <ul>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
};

const Footer = (props) => {
  return (
    <footer>
      <p> Copyright {props.year}</p>
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
      <Header name="Randy" />
      <Main
        adjective="amazing"
        activity="move"
        item="boxes"
        dishes={dishesObject}
      />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
