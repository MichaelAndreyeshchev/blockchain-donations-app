import React, { useState } from 'react';
import signUpCSS from './signUp.module.css'


function Signup() {
    return (
        <React.Fragment>
            <div class="container-sm">
                <div class="row justify-content-sm-center">
                    <div class="col col-md-6" id="signup">

                        <center><h3>Sign up</h3></center>
                        <form>
                            <label class="class=" form-label>Username</label>
                            <input type="text" class="form-control" />
                            <label class="class=" form-label>Email</label>
                            <input type="email" class="form-control" />
                            <label class="class=" form-label>Password</label>
                            <input type="password" class="form-control" />
                            <label class="class=" form-label>Re-enter password </label>
                            <input type="password" class="form-control" />
                            <span id="btn">
                                <button type="submit" class="btn btn-primary" >Create account</button>
                                <div class="g-signin2" data-onsuccess="onSignIn"></div>
                            </span>

                            <div class="form-text">
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