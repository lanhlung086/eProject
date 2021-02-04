import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Nav from "./Duy/Nav";
import Home from "./Duy/Home";
import Product from "./Tung/Product";
import Project from "./Quy/Project";
import About from "./Quy/About";
import ContactUs from "./Ngoc/Contactus"
import Footer from "./Tung/Footer";
import ScrollToTop from "./Duy/ScrollToTop";
import Detail from "./KaiBM/Detail";
import SignUp from "./Duy/SignUp";
import SignIn from "./Duy/SignIn";
import Checkout from "./Duy/Checkout";
import Thanks from "./Ngoc/Thanks";
import ProjectM1 from "./Quy/ProjectM1";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
              <Route exact path="/">
                  <ScrollToTop/>
                  <Nav/>
                  <Home/>
                  <Footer/>
              </Route>
              <Route exact path="/products/:name" render={(props) =>
                  <>
                      <ScrollToTop/>
                      <Nav/>
                      <Product name={props.match.params.name}/>
                      <Footer/>
                  </>
              }>
              </Route>
              <Route exact path="/productdetail/:id" render={(props) =>
                  <>
                      <ScrollToTop/>
                      <Nav/>
                      <Detail id={props.match.params.id}/>
                      <Footer/>
                  </>
              }/>
              <Route exact path="/project">
                  <ScrollToTop/>
                  <Nav/>
                  <Project/>
                  <Footer/>
              </Route>
              <Route exact path="/aboutus">
                  <ScrollToTop/>
                  <Nav/>
                  <About/>
                  <Footer/>
              </Route>
              <Route exact path="/contact">
                  <ScrollToTop/>
                  <Nav/>
                  <ContactUs/>
                  <Footer/>
              </Route>
              <Route exact path="/thanks">
                  <ScrollToTop/>
                  <Nav/>
                  <Thanks/>
                  <Footer/>
              </Route>
              <Route exact path="/checkout">
                  <ScrollToTop/>
                  <Nav/>
                  <Checkout/>
                  <Footer/>
              </Route>
              <Route exact path="/signin">
                  <ScrollToTop/>
                  <SignIn/>
              </Route>
              <Route exact path="/signup">
                  <ScrollToTop/>
                  <SignUp/>
              </Route>
              <Route exact path="/projectM1">
                  <ScrollToTop/>
                  <Nav/>
                  <ProjectM1/>
                  <Footer/>
              </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
