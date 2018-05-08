import React, { Component } from 'react';
import {Meteor} from 'meteor/meteor';
import Clipboard from 'clipboard';

import PropTypes from 'prop-types';

export default class LinkListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            justCopied: false
        }
    }
    componentDidMount(){
       this.clipboard = new Clipboard(this.refs.copy);
        
       this.clipboard.on('success', () => {
            this.setState({justCopied: true})
            setTimeout(() => this.setState({justCopied: false }),300)
       }).on('error',()=>{
           alert("Unable to copy! Please copy link manually. ")
       })
    }
    componentWillUnmount(){
        this.clipboard.destroy();
    }
    render() {
        return (
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
                <p>{this.props.visible.toString()}</p>
                <button ref="copy" data-clipboard-text={this.props.shortUrl}>
                    {this.state.justCopied ? 'Copied' : 'Copy'}
                </button>
                <button onClick={()=>{
                    Meteor.call('links.setVisibility', this.props._id, !this.props.visible)
                }} > 
                {this.props.visible ? 'Hide' : 'Visible' }</button>
            </div>
        );
    }
}


LinkListItem.propTypes = {
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    shortUrl: PropTypes.string.isRequired
}