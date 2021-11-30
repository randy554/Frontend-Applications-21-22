import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/Title/Title.css";
import "./components/Filter/Filter.css";
import "./components/Legend/Legend.css";
import "./components/SvgBody/SvgBody.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* 
      Door: <Router> wrappen om <App />, 
      heeft <App /> toegang tot <Router> properties als location & history  
      */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
