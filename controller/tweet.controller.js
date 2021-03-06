var config = require('../utils/auth');
const axios = require('axios');
const twit = require('twit');
var T = new twit(config);
var url = 'https://icanhazdadjoke.com/';

module.exports.sendTweet = async (req, res, next) => {
    axios.get(url, {
        headers: {
            Accept: 'application/json'
        }
    }).then(function (response) {
        // success
        if (response && response.data && response.data.joke && response.data.joke.length < 242) {
            response.data.joke += ' #funny #memes #love #lol #jokeoftheday';
            if (response.data.joke.length < 263) {
                var str = 'JOKE OF THE DAY : ' + response.data.joke;
                if (str.length < 238) {
                    str += ' #meme #rofl #lmao #laugh';
                    if (str.length < 207) {
                        str += ' #dank #humor #funnyaf #joke';
                    }
                }
                tweetPost(str);
            } else {
                tweetPost(response.data.joke);
            }
            res.status(200).send("Success");
        }
    })
        .catch(function (error) {
            console.log(error);
            res.status(200).send(error);
        });
};

function tweetPost(msg) {
    var tweet = {
        status: msg
    }
    T.post('statuses/update', tweet, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data.id);
        }
    });
}