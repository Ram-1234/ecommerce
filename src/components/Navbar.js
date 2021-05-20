import React from 'react'
import { ContextProvider } from "./Context";

const Navbar = () => {
    const { model, openModel, user, loader, logout } = React.useContext(
      ContextProvider
    );
    console.log("mymodel", model);
  
    const openForms = () => {
      openModel();
    };
    const checkUser = () => {
      //  if loader is false and user is true;
      return !loader && user ? (
        <li>
          {user.displayName}/
          <span style={{ cursor: "pointer" }} onClick={userLogout}>
            Logout
          </span>
        </li>
      ) : (
        <li className="register-form" style={{ cursor: "pointer" }} onClick={openForms}>
          Register/Login
        </li>
      );
    };
    const userLogout = () => {
      logout();
    };
    return (
      <div>
      {checkUser()}
      </div>
 
  );
}

export default Navbar;