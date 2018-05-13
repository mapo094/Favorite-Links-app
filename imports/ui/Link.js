import React, { Component } from "react";

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinkListFilter from './LinkListFilter';


// Statlest function components
export default ()=>{
    return(
        <div>
            <PrivateHeader title="Your links"/>
            <div className="page-content">
                <LinkListFilter/>
                <AddLink/>
                <LinksList/>
            </div>
        </div>
    )
}