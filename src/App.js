import React from "react";
import './App.css';
import {BrowserRouter as Router, Route,Switch}from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header'
import Checkout from './components/Checkout';
import Model from './components/Model.js';
import Navbar from './components/Navbar.js';
import Context from './components/Context.js';



function App() {

  return (
    <div className="App">
     <Router>
     <Switch>
      <Route exact path="/login" > 
      <Context>
     <Navbar/>
     <Model/>
     </Context></Route>
         </Switch>
         <Switch>
           <Route exact path='/checkout'><Checkout/></Route>
         </Switch>

       <Switch>
         <Route exact path="/"><Header/></Route>
         </Switch>
         <Switch>
         <Route exact path="/"><Home/></Route>
         </Switch> 
     </Router>
    </div>
  );
}

export default App;
