import React, { Component } from "react";
import {Link} from "react-router";

import {Accounts} from "meteor/accounts-base";
 export  default class Signup extends Component {
   constructor(props){
    super(props);
    this.state = {
      error:""
    };
   }
   onSubmit(e){
     e.preventDefault();
     
     let email = this.refs.email.value.trim();
     let password = this.refs.password.value.trim();
     if(password.length < 9){
       return this.setState({error: "Password must be at least 8 characters long"})
     } 

    Accounts.createUser({email:email,password},(err)=>{
        if(err){
          this.setState({error: err.reason});
        }else{
          this.setState({error:""});
        }

    })

   }
    render() {
      return (
        <div>
          <p>Sign up</p>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)} noValidate> 
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button> Create Account</button>
          </form>
          <br/>
          <Link to="/">Alreary have an account ?</Link>
        </div>
      );
    }
  }