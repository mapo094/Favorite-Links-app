import React, { Component } from 'react';
import {Meteor} from 'meteor/meteor';
import Clipboard from 'clipboard';
import PropTypes from 'prop-types';
import moment from 'moment';

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
    renderStats(){
        const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
        let visitedMessage = null;
        let lastVisit = moment(this.props.lastVisitedAt);
        if( typeof this.props.lastVisitedAt === 'number'){
            visitedMessage = `(visited ${lastVisit.fromNow()})`
        }
        return <p>{this.props.visitedCount} - {visitMessage}, {visitedMessage}</p>
    }
    render() {
        return (
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
                <p>{this.props.visible.toString()}</p>
                {this.renderStats()}
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
    shortUrl: PropTypes.string.isRequired,
    visitedCount: PropTypes.number.isRequired,
    lastVisitedAt: PropTypes.number
}