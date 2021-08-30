import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import ImageZoom from "./Component/ImageZoom/ImageZoom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/image-zoom">
          <ImageZoom></ImageZoom>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
