import { Meteor } from 'meteor/meteor';
import {WebApp} from "meteor/webapp";
 
import '../imports/api/users';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  // code to run on server at startup


  WebApp.connectHandlers.use((req,res,next) => {
    // console.log("This is from middleware");
    // console.log(req.url, req.method, req.headers,req.query);
    
    // if path id is real its redirect you to the current website
    const _id = req.url.slice(1);
    const link = Links.findOne({_id: _id})

    if(link){
      res.statusCode = 302;
      res.setHeader("Location", link.url);
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
