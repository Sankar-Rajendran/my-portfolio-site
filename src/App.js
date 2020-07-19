import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.scss";

import { ThemeContext } from "./Theme";

function App() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Router>
      <div
        className="app"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <Header />
        <Home />
        <About />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
