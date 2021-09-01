import React, { useState } from 'react';
import bootstrap from 'bootstrap'
import paginationcss from './pagination.module.css'

const optionDemo = ["url1", "url2", "url3", "url4"] //get from props in real case
function Pagination(props) {
    return (
        <React.Fragment>
            <div className={paginationcss.pagination}>
                <div className={paginationcss.outerWrapper}>
                    <div>
                        <select name="page">
                            {optionDemo.map((item, index) => (
                                <option value={item}>{index + 1}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Pagination;