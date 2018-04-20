import { Meteor } from 'meteor/meteor';
import SimpleSchema from  'simpl-schema';

Meteor.startup(() => {
  // code to run on server at startup

// const petSchema = new SimpleSchema({
//   name: {
//     type: String
//   },
//   age:{
//     type: Number,
//     min:0
//   },
//   contactNumber:{
//     type: String,
//     optional: true,
//     regEx:SimpleSchema.RegEx.Phone

//   }
// });

// petSchema.validate({
//    name:"Gosho",
//    age: 12,
//    contactNumber:"12345677"
// })

// const Employ = new SimpleSchema({
//   name:{
//     type:String,
//     min:1,
//     max:200
//   },
//   hourlyWage:{
//     type: Number,
//     min:1

//   },
//   email:{
//     type: String,
//     regEx:SimpleSchema.RegEx.Email
//   }
// })

// Employ.validate({
//   name: "Mapo",
//   hourlyWage: 12,
//   email: "mapo@gmai.com"
// })



});
