import React, { Component } from 'react';
import {Link} from 'react-router';
 export  default class Signup extends Component {
   constructor(props){
    super(props);
    this.state = {
      error:''
    };
   }
   onSubmit(e){
     e.preventDefault();
     
     this.setState({
       error: "Something went wrong"
     })

   }
    render() {
      return (
        <div>
          <p>Sign up</p>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)}> 
            <input type="email" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="Password"/>
            <button> Create Account</button>
          </form>
          <br/>
          <Link to="/">Alreary have an account ?</Link>
        </div>
      );
    }
  }