  
const express = require('express');
const app = express();

const {tweetController} = require('./router/tweet.router'); 

app.use('/helloWorld',tweetController);
app.listen(process.env.PORT, '0.0.0.0' | 3000,() => console.log('Started server at 3000'));