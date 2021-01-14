import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Nav from "./Duy/Nav";
import Home from "./Duy/Home";
import Product from "./Tung/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Nav/>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route exact path="/product">
                  <Product/>
              </Route>
              <Route exact path="/project">

              </Route>
              <Route exact path="/aboutus">

              </Route>
              <Route exact path="/contact">

              </Route>
              <Route exact path="/news">

              </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
