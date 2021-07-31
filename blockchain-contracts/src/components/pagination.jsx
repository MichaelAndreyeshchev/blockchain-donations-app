import React, { useState } from 'react';
import bootstrap from 'bootstrap' 
import paginationcss from './pagination.module.css'

function Pagination(){
   return(
       <React.Fragment>
                <div className={paginationcss.pagination}>
                    page
                    <select name="page">
                        <option value="volvo">1</option>
                        <option value="saab">2</option>
                        <option value="mercedes">3</option>
                        <option value="audi">4</option>
                    </select>
                </div>
       </React.Fragment>
   )
}

export default Pagination;