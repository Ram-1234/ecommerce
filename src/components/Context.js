import React, { createContext} from "react";
//import firebase from "./firebase";
import { auth, db } from "./firebase";
const ContextProvider = createContext();

const Context = (props) => {
    const [model, setModel] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const [loader] = React.useState(true);
    console.log(db);
    const openModel = () => {
      setModel(true);
    };
    
    const closeModel = () => {
      setModel(false);
    };

    const register = async (user) => {
      const { username, email, password } = user;
      try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        //console.log(res);
        res.user.updateProfile({ displayName: username });
        setModel(false);
        
      } catch {
        console.log("Error");
      }
    };

    const login = async (user) => {
      const { email, password } = user;
  
      try {
        const res = await auth.signInWithEmailAndPassword(email, password);
        console.log(res);
        setModel(false);
      } catch {
        console.log("loginerror");
      }
    };
    const logout = () => {
      auth
        .signOut()
        .then(() => {
          setUser(null);
        })
        .catch((err) => {
          console.log(err);
        });
    }

        return (
            <ContextProvider.Provider
              value={{
                model,
                openModel,
                closeModel,
                register,
                login,
                user,
                loader,
                logout,
              }}
            >
              {/* pass the value to child component */}
              {props.children}
            </ContextProvider.Provider>
          );
        }

        export default Context;
        export { ContextProvider };
