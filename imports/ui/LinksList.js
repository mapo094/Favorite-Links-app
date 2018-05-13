import React, { Component } from 'react';
import {Meteor} from "meteor/meteor";
import {Tracker} from "meteor/tracker";
import {Session} from "meteor/session";
import FlipMove from 'react-flip-move';

import { Links } from '../api/links';
import LinksListItem from './LinkListItem';

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
        // We create publish -'links' and we can access it with subscribe('name')
        // It's come from api/links and show links from db
            Meteor.subscribe("links")
            const links = Links.find({
                visible: Session.get('showVisible')
            }).fetch();
            this.setState({links});
          })
    }
    
    componentWillUnmount(){
        console.log("Component will unmount LinkList")
        this.linksTracker.stop();
    }
    renderLinksListItems(){

        if(this.state.links.length === 0){
            return ( 
                <div className="item">
                    <p className="item__status-message">No Links Found</p>
                </div>
            );
        }
        return this.state.links.map((link)=>{
            const shortUrl = Meteor.absoluteUrl(link._id);
            return <LinksListItem key={link._id} shortUrl={shortUrl} {...link} />
            // return <p key={link._id}>{link.url}</p>
        })
        
    }
    render() {
        return (
            <div>
                <p>Links</p>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderLinksListItems()}
                </FlipMove>
            </div>
        );
    }
}