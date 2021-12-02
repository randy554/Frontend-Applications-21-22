import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Whoops404 from "./components/Pages/Whoops404/Whoops404";
import Navigation from "./components/Navigation/Navigation";
import { NewsArticleProvider } from "./components/providers/newsArticleProvider";

const App = () => {
  return (
    <Router>
      <NewsArticleProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Whoops404 />} />
          </Routes>
          <Navigation />
        </div>
      </NewsArticleProvider>
    </Router>
  );
};

export default App;
