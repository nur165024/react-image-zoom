import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Category from "./Component/Category/Category";
import Home from "./Component/Home/Home";
import ImageZoom from "./Component/ImageZoom/ImageZoom";
import ReactTable from "./Component/ReactTable/ReactTable";
import ScrollTopBar from "./Component/ScrollTopBar/ScrollTopBar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/image-zoom">
          <ImageZoom></ImageZoom>
        </Route>
        <Route path="/scroll-top-bar">
          <ScrollTopBar></ScrollTopBar>
        </Route>
        <Route path="/react-table">
          <ReactTable></ReactTable>
        </Route>
        <Route path="/category">
          <Category></Category>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
