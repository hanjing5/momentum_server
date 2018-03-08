// grab the things we need
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/momentum_server');
var Schema = mongoose.Schema;

// create a schema
var emailSchema = new Schema({
    email: {type: String, required: true},
    message: String
});


// // custom method to add string to end of name
// // you can create more important methods like name validations or formatting
// // you can also do queries and find similar users 
// userSchema.methods.dudify = function() {
//   // add some stuff to the users name
//   this.name = this.name + '-dude'; 

//   return this.name;
// };

// the schema is useless so far
// we need to create a model using it
var Email = mongoose.model('Email', emailSchema);

// make this available to our users in our Node applications
module.exports = Email;