var config = require('./auth');
const axios = require('axios');
const twit = require('twit');
var T = new twit(config);

var url = 'https://icanhazdadjoke.com/';

retrieveJoke();

//Posting the tweet!
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

function retrieveJoke() {
    try {
        getJoke();
        // setTimeout(retrieveJoke, 3600000);
        // setTimeout(retrieveJoke, 1000 * 60 * 10);
    } catch (err) {
        console.log(err);
    }
}

function getJoke() {
    axios.get(url, {
        headers: {
            Accept: 'application/json'
        }
    }).then(function (response) {
            // success
            if (response && response.data && response.data.joke && response.data.joke.length < 242) {
                console.log('In if' + response.data.joke.length);
                response.data.joke += ' #joke #lmao #memesdaily #braintickler';
                tweetPost(response.data.joke);
            } else {
                console.log('In else' + response.data.joke.length);
              //  getJoke();
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}
