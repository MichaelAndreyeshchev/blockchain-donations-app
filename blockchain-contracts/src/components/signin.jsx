import React, { useState } from 'react';
import signInCSS from './signIn.module.css'

function Signin() {
    return (
        <React.Fragment>
            <div class="container-sm">
                <div class="row justify-content-sm-center">
                    <div class="col col-md-6" id="signup">
                        <center><h3>Sign-In</h3></center>
                        <form>
                            <label class="class=" form-label>Username/Email</label>
                        <input type="text" class="form-control" />
                            <label class="class=" form-label>Password</label>
                        <input type="password" class="form-control"/>
                            <span id="btn">
                                <button type="submit" class="btn btn-primary" >Sign-In </button>
                                <div class="g-signin2" data-onsuccess="onSignIn"></div> 
                            </span>
                            <div class="form-text">
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