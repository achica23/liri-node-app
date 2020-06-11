require("dotenv").config();
var keys = require("/Users/ashleyhaven/Desktop/liri-node-app/keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var command = process.argv[2]
var userInput = process.argv.slice(3).join(' ')
function liri() {
    switch (command) {
        case "concert-this":
            concertThis()
            break;
        case "spotify-this-song":
            spotifySong()
            break;
        case "movie-this":
            movieThis()
            break;
        case "do-what-it-says":
            doIt()
            break;
        default:
            console.log('Please enter in one of these four commands')
    }
    function concertThis(search) {
        console.log("Finding your concerts")

    }
    function spotifySong() {
        if (!userInput) {
            userInput = 'The Sign, Ace of Base';
        }
        var spotify = new Spotify(keys.spotify);
        spotify.search({ type: 'track', query: userInput })

            .then(function () { })

    }
    function movieThis() {
        if (!userInput) {
            userinput = 'Mr. Nobody'
        }
        var movieURL = 'http://www.omdbapi.com/?t=' + userInput + '&y=&plot=short&apikey=trilogy'
        axios
            .get(movieURL)
            .then(function (response) {
                let results = response.data
                console.log(response)
            })
    }
    function doIt() {

    }
}
