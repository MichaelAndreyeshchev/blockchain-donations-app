import React from "react";
import { Button } from "@material-ui/core";
import { authentication, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

import "./Login.css";

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        authentication.signInWithPopup(provider)
        .then((result) => {dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
           <div className="login__container">
               <div className="login__text">
                   <h1>Sign in to Cryptonate Messenger</h1>
               </div>
               <Button type="submit" onClick={signIn}>
                   Sign In With Google
               </Button>
           </div>
        </div>
    );
}

export default Login;