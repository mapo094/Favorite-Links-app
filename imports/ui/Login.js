import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login to short link</h1>
                login form here

                <Link to="/signup">Have an account?</Link>
            </div>
        );
    }
}