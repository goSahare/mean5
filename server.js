let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors');

//server configuration
let port = 6200;

// Connection to DB

let dbUri = 'mongodb://gosahare:S2ftwAre@ds147480.mlab.com:47480/mean5'
mongoose.connect(dbUri)
    .then( => {
      
    })
    .catch(err => {
        console.error('Backend error:', err.stack);
        process.exit(1);
    });

let profileSchema = mongoose.Schema({
    username: String,
    password: String
});
 
let profile = mongoose.model('profile', profileSchema);

// App Instance
let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Execute App
app.listen(port, () => {
  console.log('Backend running on Port: ',port);
});