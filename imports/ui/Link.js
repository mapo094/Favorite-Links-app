import React, { Component } from "react";

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink'


// Statlest function components
export default ()=>{
    return(
        <div>
            <PrivateHeader title="Your links"/>
            <LinksList/>
            <AddLink/>
        </div>
    )
}