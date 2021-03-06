import { Meteor } from 'meteor/meteor';
import {WebApp} from "meteor/webapp";
import moment from 'moment'; 

import '../imports/api/users';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  // code to run on server at startup
  let now = new Date().getTime();

  let momentNow = moment(now);
  console.log(momentNow.fromNow())
  //Node server 
  WebApp.connectHandlers.use((req,res,next) => {
    
    // if path id is real its redirect you to the current website
    const _id = req.url.slice(1);
    const link = Links.findOne({_id: _id})

    if(link){
      res.statusCode = 302;
      res.setHeader("Location", link.url);
      Meteor.call('links.trackVisit',_id);
      res.end();
    }
    else{
      next();
    }
    // Set HTTP status code
    // res.statusCode = 302;
    // Set HTTP headers
    // res.setHeader("Location","http://www.google.com");
    // Set HTTP body
    // res.write("<h1>This is my middleware at work!</h1>");
    // End HTTP request
    // res.end();
    // next();
  })
});
