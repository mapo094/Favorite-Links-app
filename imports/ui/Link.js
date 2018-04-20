import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";

export default class Link extends Component {
    onLogout(){
      Accounts.logout();
    }
    render() {
        return (
            <div>
                <button onClick={this.onLogout.bind(this)} >Log out</button>
            </div>
        );
    }
}