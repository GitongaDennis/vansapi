const express = require('express');

//set up express app
const app = express();
//using use method on our app
//initialize routes
app.use('/api', require('./routes/api'));
//listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listen for requests');

});