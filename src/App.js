import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Nav from "./Duy/Nav";
import Home from "./Duy/Home";
import ContactUs from "./Ngọc/Contactus";
import About from "./Quy/About";

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

              </Route>
              <Route exact path="/project">

              </Route>
              <Route exact path="/aboutus">
                  <About/>
              </Route>
              <Route exact path="/contact">
                  <ContactUs/>
              </Route>
              <Route exact path="/news">

              </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
