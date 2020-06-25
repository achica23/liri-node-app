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
            concertThis(userInput)
            break;
        case "spotify-this-song":
            spotifySong(userInput)
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
}
liri()

function concertThis(search) {
    var queryURL = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"
    console.log("Finding your concerts")
    axios
        .get(queryURL)
        .then(function (response) {
            let results = response.data[0]
            console.log(results)
            console.log('Name of Venue;' + results.venue.name)
            console.log('Venue Location;' + results.venue.location)
            console.log('Date of Event;' + results.datetime)
        })


}
function spotifySong(userInput) {
    console.log('working')
    if (!userInput) {
        userInput = 'The Sign, Ace of Base';
    }
    var spotify = new Spotify(keys.spotify);
    spotify.search({ type: 'track', query: userInput })

        .then(function (results) {
            console.log(results.tracks.items[0])
            console.log('Artist;' + results.tracks.items[0].album.artists)
            console.log('Song Name;' + results.tracks.items[0].album.name)
            console.log('Spotify Link'; + results.tracks.items[0].album.href)
})

}
function movieThis() {
    if (!userInput) {
        userInput = 'Mr. Nobody'
    }
    var movieURL = 'http://www.omdbapi.com/?t=' + userInput + '&y=&plot=short&apikey=trilogy'
    axios
        .get(movieURL)
        .then(function (response) {
            let results = response.data
            console.log(results)
            console.log('Movie Title;' + results.Title)
            console.log('Year Released;' + results.Year)
            console.log('IMDB Rating;' + results.imdbRating)
            console.log('Rotten Tomatoes Score; ' + results.Ratings[1].Value)
            console.log('Country Movie was Produced;' + results.Country)
            console.log('Language;' + results.Language)
            console.log('Plot;' + results.Plot)
            console.log('Actors;' + results.Actors)
        })
}
function doIt() {

}
