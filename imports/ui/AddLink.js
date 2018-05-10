import React, { Component } from 'react';
import {Meteor} from "meteor/meteor";
import Modal from 'react-modal';
import {Links} from '../api/links';



export default class AddLinks extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: "",
            isOpen: false
        }
    }
    
    onSubmit(e){
        const url = this.state.url;
        // const { url } = this.state  ->ES6

        
        e.preventDefault();

        if(url){
            Meteor.call("links.insert",url,(err,res)=>{
                if(!err){
                    this.setState({
                        url: "",
                        isOpen: false
                    })
                }
            });
        }
    }
    onChange(e){
        this.setState({
            url: e.target.value
        })
    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.setState({isOpen: true})}}>+ Add Link</button>
                <Modal isOpen={this.state.isOpen} contentLabel="Add link! " ariaHideApp={false}>
                    <p>Add Link</p>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input 
                            type="text"
                            ref="url"
                            placeholder="URL"
                            value={this.state.url}
                            onChange={this.onChange.bind(this)}
                        />
                        <button>Add Link</button>
                    </form>
                    <button onClick={() => this.setState({isOpen: false, url: ''})}  >Close</button>
                </Modal>
            </div>
        );
    }
}

