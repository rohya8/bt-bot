  
const express = require('express');
const app = express();

const {tweetController} = require('./router/tweet.router'); 

app.use('/helloWorld',tweetController);
app.listen(3000,() => {
    console.log("Started on PORT 3000");
  })