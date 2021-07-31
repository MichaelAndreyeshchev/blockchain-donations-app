
import React, { useEffect, useState } from 'react';
import bootstrap from 'bootstrap' 
import donationListCSS from './donationList.module.css';
import data from './data/test.json';
import Pagination from './pagination'

/*donation list would be fetch from server, currently using test.json to test*/ 
const options = [{sortBy:["Name","Funds",""]},{category:["A","B","C",""]}];
function Donationlist() {
    const [state, setState] = useState({
        donations:data.donations,
        keyword: '',
        options:{
            sortBy:"",
            category:""
        }
      });

      useEffect(()=>{
          console.log("category: " + state.options.category)
          console.log("Sortby: "+state.options.sortBy)
          console.log("Keyword: "+state.keyword)
         
      })

      useEffect(()=>{
        handleChange();
      },[state.options,state.keyword])

      useEffect(()=>{ //similar to compomentDidMount()
        //Fetch data from sever
      },[])

      function updateKeyword(e){
        setState((prev) => ({...prev, 
            keyword:e.target.value,
         }))
        }

        function updateOptions(val,e){
            const value = val;
            const type = e.target.dataset.type;
            setState((prev) => ({
                ...prev,
                options:{
                 ...prev.options,
                  [type]:value
                }
             }))
        }

        function sortingNum(x,y){
            if (x.Funds < y.Funds) {
                return -1;
            }
            if (x.Funds > y.Funds) {
                return 1;
            }
            return 0;
        } 

        function sortingString(s1,s2){
           let x1 = s1.title.toUpperCase();
            let x2 = s2.title.toUpperCase();
            if (x1 < x2) {
                return -1;
            }
            if (x1 > x2) {
                return 1;
            }
            return 0;
        }

        function handleChange(){
         const condition = {title:state.keyword, category:state.options.category}
         const sorting = state.options.sortBy;  
         const newlist = data.donations.filter(
               (donation) =>{
                   for(const property in condition){
                    if(condition[property] === ""){ //if the option has no value
                        continue;
                    }
                    else{
                        if(property === "title"){
                             const dTitle = donation[property].toUpperCase() 
                             const cTitle = condition[property].toUpperCase()
                            if(dTitle.includes(cTitle) === false){
                                return false;
                            }
                        }else if(donation[property] !== condition[property]){
                            return false;
                         }
                    } 
                    
                   }
                   return true;
               }
           )
           if(sorting !== ""){
               if(sorting === "Name"){
                  newlist.sort(sortingString);  
               }
               if(sorting ==="Funds"){
                  newlist.sort(sortingNum);  
               }

           }
           setState((pre)=> ({...pre, donations:newlist}))
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
                                  options[1].category.map((item) => {
                                       return  <li style={{float:"none"}} name={item} onClick={(e)=>{updateOptions(item,e)}}>
                                           <a className="dropdown-item" href="#"  data-type ="category">{item}</a></li>
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
                                   options[0].sortBy.map((item) => {
                                       return  <li style={{float:"none"}} name={item} onClick={(e)=>{updateOptions(item,e)}}>
                                           <a className="dropdown-item" href="#"  data-type ="sortBy">{item}</a></li>
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
                           state.donations.map((item) =>{               
                                return <div className="col-3">
                                <div className="card" style={{width: '100%'}}>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.Funds}</p>
                                        <p className="card-text">{item.category}</p>
                                        <a href="#" className="btn btn-primary">{item.pageUrl}</a>
                                    </div>
                                </div>
                            </div>  

                            })
                        }
                    </div>
                </div>

                <Pagination/>
            </div>

        </React.Fragment>

    );
}


export default Donationlist;