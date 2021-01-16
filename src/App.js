import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Nav from "./Duy/Nav";
import Home from "./Duy/Home";
import Product from "./Tung/Product";
import Project from "./Quy/Project";
import About from "./Quy/About";
import ContactUs from "./Ngọc/Contactus";

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
                  <Project></Project>
              </Route>
              <Route exact path="/aboutus">
                  <About></About>
              </Route>1
              <Route exact path="/contact">
                  <ContactUs></ContactUs>
              </Route>
              <Route exact path="/news">

              </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
