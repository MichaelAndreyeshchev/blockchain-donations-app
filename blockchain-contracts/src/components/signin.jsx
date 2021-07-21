import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import signInCSS from './signIn.module.css'

function Signin() {
    return (
        <React.Fragment>
            <div className="container-sm">
                <div className="row justify-content-sm-center">
                    <div className="col col-md-6" id={signInCSS["signup"]}>
                        <center><h3>Sign-In</h3></center>
                        <form>
                            <label className="" form-label>Username/Email</label>
                        <input type="text" className="form-control" />
                            <label className="class=" form-label>Password</label>
                        <input type="password" className="form-control"/>
                            <span id={signInCSS["btn"]}>
                                <button type="submit" className="btn btn-primary" >Sign-In </button>
                                <div className="g-signin2" data-onsuccess="onSignIn"></div> 
                            </span>
                            <div className="form-text">
                                You agree to TFG's Conditions of Use and Privacy Notice.
                            </div>
                         </form>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}


export default Signin;