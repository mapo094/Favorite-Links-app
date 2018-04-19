import React, { Component } from 'react';
import {browserHistory} from 'react-router';

export default class Link extends Component {
    onLogout(){
        browserHistory.push('/')
    }
    render() {
        return (
            <div>
                <button onClick={this.onLogout.bind(this)} >Log out</button>
            </div>
        );
    }
}