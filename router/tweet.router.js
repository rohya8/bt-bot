const express = require('express');
const router = express.Router();
const tweetcontroller = require('../controller/tweet.controller');

router.get('/sendTweet', tweetcontroller.sendTweet);

module.exports.userRouter = router;