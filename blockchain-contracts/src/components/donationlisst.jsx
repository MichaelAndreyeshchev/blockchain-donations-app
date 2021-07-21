
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import donationListCSS from './donationList.module.css'

function Donationlist() {
    return (
        <React.Fragment>
            <div className="container-fluid" >
                <div classNam="row justify-content-md-center" id={donationListCSS.header}>
                    <div className="col-8">
                        <h1>Projects</h1>
                    </div>
                    <div className="col-3">  <button type="button" className="btn btn-outline-dark" id={donationListCSS.projectbtn}>submit your project</button></div>
                </div>
                <div className="row justify-content-md-center" >
                    <nav className="navbar" id={donationListCSS.list}>
                        <div className="btn-group" id="droplist">
                            <button className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria- expanded="false">
                                CATEGORY
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li style="float:none"><a className="dropdown-item" href="#">Action</a></li>
                                <li style="float:none"><a className="dropdown-item" href="#">Another action</a></li>
                                <li style="float:none"><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria- expanded="false">
                                Sortby
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li style="float:none"><a className="dropdown-item" href="#">Action</a></li>
                                <li style="float:none"><a className="dropdown-item" href="#">Another action</a></li>
                                <li style="float:none"><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <span>  <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form></span>

                    </nav>
                </div>
                <div className="main container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <div className="card" style="width: 100%;">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" style="width: 100%;">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card" style="width: 100%;">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card" style="width: 100%;">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                <div className="pagination">
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