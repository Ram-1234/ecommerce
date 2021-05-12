import React from "react";
import './App.css';
import {BrowserRouter as Router, Route,Switch}from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
//import { auth } from "./components/firebase";
import Checkout from './components/Checkout';
import Signup from './components/Signup';


function App() {
  

  return (
    <div className="App">
     <Router>
     <Switch>
           <Route exact path="/login" ><Login/></Route>
         </Switch>
         <Switch>
           <Route exact path='/checkout'><Checkout/></Route>
         </Switch>
         <Switch>
           <Route exact path="/signup"><Signup/></Route>
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
