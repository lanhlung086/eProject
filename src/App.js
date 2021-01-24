import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Nav from "./Duy/Nav";
import Home from "./Duy/Home";
import Product from "./Tung/Product";
import Project from "./Quy/Project";
import About from "./Quy/About";
import ContactUs from "./Ngọc/Contactus";
import ScrollToTop from "./Duy/ScrollToTop";
import Detail from "./Khai/Detail";
import SignUp from "./Duy/SignUp";
import SignIn from "./Duy/SignIn";
import Checkout from "./Duy/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
              <Route exact path="/">
                  <ScrollToTop/>
                  <Nav/>
                  <Home/>
              </Route>
              <Route exact path="/products">
                  <ScrollToTop/>
                  <Nav/>
                  <Product/>
              </Route>
              <Route exact path="/productdetail/:id" render={(props) =>
                  <>
                      <ScrollToTop/>
                      <Nav/>
                      <Detail id={props.match.params.id}/>
                  </>
              }/>
              <Route exact path="/project">
                  <ScrollToTop/>
                  <Nav/>
                  <Project/>
              </Route>
              <Route exact path="/aboutus">
                  <ScrollToTop/>
                  <Nav/>
                  <About/>
              </Route>
              <Route exact path="/contact">
                  <ScrollToTop/>
                  <Nav/>
                  <ContactUs/>
              </Route>
              <Route exact path="/news">
                  <ScrollToTop/>
                  <Nav/>
              </Route>
              <Route exact path="/checkout">
                  <ScrollToTop/>
                  <Nav/>
                  <Checkout/>
              </Route>
              <Route exact path="/signin">
                  <ScrollToTop/>
                  <SignIn/>
              </Route>
              <Route exact path="/signup">
                  <ScrollToTop/>
                  <SignUp/>
              </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
