import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import signUpCSS from './signUp.module.css'


function Signup() {
    return (
        <React.Fragment>
            <div className="container-sm">
                <div className="row justify-content-sm-center">
                    <div className="col col-md-6" id={signUpCSS.signup}>

                        <center><h3>Sign up</h3></center>
                        <form>
                            <label className="" form-label>Username</label>
                            <input type="text" class="form-control" />
                            <label className="" form-label>Email</label>
                            <input type="email" class="form-control" />
                            <label className="" form-label>Password</label>
                            <input type="password" class="form-control" />
                            <label classNames="" form-label>Re-enter password </label>
                            <input type="password" className="form-control" />
                            <span id={signUpCSS.btn}>
                                <button type="submit" className="btn btn-primary" >Create account</button>
                                <div class="g-signin2" data-onsuccess="onSignIn"></div>
                            </span>

                            <div className="form-text">
                                By creating an account, you agree to TFG's Conditions of Use and Privacy Notice.
                            </div>
                        </form>




                    </div>
                </div>

            </div >

        </React.Fragment >
    );
}


export default Signup;