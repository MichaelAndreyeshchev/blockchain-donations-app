
import React, { useEffect, useState } from 'react';
import bootstrap from 'bootstrap' 
import donationListCSS from './donationList.module.css';
import data from './data/test.json';

/*donation list would be fetch from server, currently using test.json to test*/ 
function Donationlist() {
    const [state, setState] = useState({
        keyword: '',
        options:{
            sortBy:{"Name":false,"Funds":false},
            category:{"A":false,"B":false,"C":false}
        }
      });

      useEffect(()=>{
          console.log(state.options.category)
          console.log(state.keyword)
      })

      function updateKeyword(e){
        setState((prev) => ({...prev, 
            keyword:e.target.value,
         }))
        }

        function updateOptions(e){
            const type = e.target.name;
            console.log(type);
            setState((prev) => ({
                options:{
                 ...prev.options,
                  category:{
                      ...prev.options.category,
                      [type]:!prev.options.category[type]
                  }
                    
                }
             }))
        }

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
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" name="CATEGORY">
                                {
                                   Object.keys(state.options.category).map((item) => {
                                       return  <li style={{float:"none"}} name={item} onClick={(e)=>{updateOptions(e)}}><a className="dropdown-item" href="#">{item}</a></li>
                                   })
                                }
                              
                            </ul>
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria- expanded="false">
                                Sortby
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            {
                                   Object.keys(state.options.sortBy).map((item) => {
                                       return  <li style={{float:"none"}}><a className="dropdown-item" href="#">{item}</a></li>
                                   })
                                }
                            </ul>
                        </div>
                        <span>  <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => updateKeyword(e)}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form></span>

                    </nav>
                </div>
                <div className="main container-fluid">
                    <div className="row">
                    {
                           data.donations.map((item) =>{               
                                return <div className="col-3">
                                <div className="card" style={{width: '100%'}}>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.Funds}</p>
                                        <a href="#" className="btn btn-primary">{item.pageUrl}</a>
                                    </div>
                                </div>
                            </div>  

                            })
                        }
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