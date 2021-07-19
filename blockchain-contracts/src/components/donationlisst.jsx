
import React, { useState } from 'react';
import donationListCSS from './donationList.module.css'

function Donationlist() {
    return (
        <React.Fragment>
            <div class="container-fluid" >
                <div class="row justify-content-md-center" id="header">
                    <div class="col-8">
                        <h1>Projects</h1>
                    </div>
                    <div class="col-3">  <button type="button" class="btn btn-outline-dark" id="projectbtn">submit your project</button></div>
                </div>
                <div class="row justify-content-md-center" >
                    <nav class="navbar" id="list">
                        <div class="btn-group" id="droplist">
                            <button class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria- expanded="false">
                                CATEGORY
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li style="float:none"><a class="dropdown-item" href="#">Action</a></li>
                                <li style="float:none"><a class="dropdown-item" href="#">Another action</a></li>
                                <li style="float:none"><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria- expanded="false">
                                Sortby
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li style="float:none"><a class="dropdown-item" href="#">Action</a></li>
                                <li style="float:none"><a class="dropdown-item" href="#">Another action</a></li>
                                <li style="float:none"><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <span>  <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form></span>

                    </nav>
                </div>
                <div class="main container-fluid">
                    <div class="row">
                        <div class="col-3">
                            <div class="card" style="width: 100%;">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card" style="width: 100%;">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="card" style="width: 100%;">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="card" style="width: 100%;">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                <div class="pagination">
                    page
                    <select name="page">
                        <option value="volvo">1</option>
                        <option value="saab">2</option>
                        <option value="mercedes">3</option>
                        <option value="audi">4</option>
                    </select>
                </div>
            </div>

        </React.Fragment>

    );
}


export default Donationlist;