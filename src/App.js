import React from "react";
import './App.css';
import {BrowserRouter as Router, Route,Switch}from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
//import { auth } from "./components/firebase";
import Checkout from './components/Checkout';
//import Signup from './components/Signup';


function App() {

  // useEffect(() => {
  //   //will only run once when the app component loads...
  
  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("THE USER IS >>> ", authUser);
  
  //     if (authUser) {
  //       // the user just logged in / the user was logged in
  
  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       // the user is logged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);

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
