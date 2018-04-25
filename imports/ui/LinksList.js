import React, { Component } from 'react';
import {Tracker} from "meteor/tracker";

import { Links } from '../api/links';

export default class LinksList extends Component {
    constructor(props){
        super(props);
        this.state ={
            links: []
        }
    }
    //It's gonna called when this component is show on the screen
    componentDidMount(){
        console.log("Component did mount LinkList");
       this.linksTracker = Tracker.autorun(()=>{
            const links = Links.find().fetch();
            this.setState({links});
          })
    }
    
    componentWillUnmount(){
        console.log("Component will unmount LinkList")
        // this.linksTracker.stop();
    }
    renderLinksListItems(link){
        return this.state.links.map((link)=>{
            return <p key={link._id}>{link.url}</p>
        })
        
    }
    render() {
        return (
            <div>
                <p>Links</p>
                <div>
                    {this.renderLinksListItems()}
                </div>
            </div>
        );
    }
}