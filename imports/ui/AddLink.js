import React, { Component } from 'react';
import {Meteor} from "meteor/meteor";
import Modal from 'react-modal';
import {Links} from '../api/links';



export default class AddLinks extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: "",
            isOpen: false,
            error: ''
        }
    }
    
    onSubmit(e){
        const url = this.state.url;
        // const { url } = this.state  ->ES6 
        e.preventDefault();   

        Meteor.call("links.insert",url,(err,res)=>{
            if(!err){
                this.handleModalClose();
            }else{
                this.setState({ error: err.reason})
            }
        });
    }
    onChange(e){
        this.setState({
            url: e.target.value
        })
    }
    handleModalClose(){
        this.setState({
            isOpen: false,
            url: '',
            error:''})
    }
    render() {
        return (
            <div>
                <button className="button" onClick={()=>{this.setState({isOpen: true})}}>+ Add Link</button>
                <Modal 
                    isOpen={this.state.isOpen}
                    contentLabel="Add link! "
                    ariaHideApp={false}
                    onAfterOpen={() => this.refs.url.focus()}
                    onRequestClose={this.handleModalClose.bind(this)}
                    className="boxed-view__box"
                    overlayClassName="boxed-view boxed-view--modal"
                    >
                    <h1>Add Link</h1>
                    <p>{this.state.error === '' ? '': this.state.error}</p>
                    <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
                        <input 
                            type="text"
                            ref="url"
                            placeholder="URL"
                            value={this.state.url}
                            onChange={this.onChange.bind(this)}
                        />
                        <button className="button" >Add Link</button>
                        <button type="button" className="button button--secondary" onClick={this.handleModalClose.bind(this)}  >Close</button>
                    </form>
                    
                </Modal>
            </div>
        );
    }
}

