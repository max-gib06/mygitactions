const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create scheme
let Post = new Schema({
  //get title
  title: {
    type: String
  },
  //get body
  body: {
    type: String
  }
},{
    collection: 'posts'
});