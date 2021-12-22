const express = require('express');
const application = express();
const bodyParser = require('body-parser');

const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4000;



const dbconfig = require('./DB.js');
mongoose.Promise = global.Promise;

mongoose.connect(dbconfig.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Cannot connect to the database....'+ err)}
);
const postRoute = require('./RoutePost');



application.use(cors());
application.use(bodyParser.urlencoded({extended: true}));
application.use(bodyParser.json());

application.use('/posts', postRoute);

application.listen(PORT, function(){
  { console.log('Opening port...') }
  console.log('Server is running on Port:',PORT);
});