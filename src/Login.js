import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";

function Login() {
 
    const signIn = () => {
        // sigh in
        auth.signInWithPopup(provider).then(result => {

        }).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png" alt="" />
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;