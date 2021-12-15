import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MoonT from "./MoonT/pages/Index.js";
import AllMenu from "./MoonT/pages/Menu.js";
import About from "./MoonT/pages/About.js";

import Navbar from "./MoonT/Functions/Navbar.js";
import Nav from "./MoonT/Functions/Nav.js";

export default function App() {
  return (
    <Router>
      <div id="navcoll">
        <Navbar />
      </div>
      <div id="nav">
        <Nav />
      </div>
      <Switch>
        <Route exact path="/">
          <MoonT />
        </Route>

        <Route exact path="/Menu">
          <AllMenu />
        </Route>

        <Route exact path="/About">
          <About />
        </Route>

        <Route path="/">
          {" "}
          <h1 id="fail"> 404 File Not Found! :-( </h1>{" "}
        </Route>
      </Switch>
    </Router>
  );
}
