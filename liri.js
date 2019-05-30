require("dotenv").config();
var request = require('request');
var moment = require('moment');

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var axios = require("axios");

var fs = require("fs");


var caseData = process.argv[2];
var userInput = process.argv.slice(3).join('+');


//------------------"Switch" Function pick--------------//
function pick (caseData, userInput){
    switch (caseData){
        case 'spotify-this-song':
            spotifyThisSong(userInput);
            break;
        case 'movie-this' :
            getMovie(userInput);
            break;
        case 'do-what-it-says':
            doWhatItSays();
            break;    
        case 'concert-this':
            bandsInTown (userInput);
            break;
        default: console.log('Liri does not know this command')
       }
   
}


//  -----------"Spotify" Function spotifyThisSong-----------//
function spotifyThisSong (trackName){
    if (!trackName) {
        trackName = "Ace of Base The Sign";
       
    };
    spotify.search({ 
        type: 'track', 
        query: trackName,
        }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
     
        var trackInfo= data.tracks.items;
         for (var i=0 ; i<5 ; i++){

            var spotifyResults =
                            "\n======Begin Spotify Results======" + "\n" +
                            "Artist: " + trackInfo[i].artists[0].name + "\n" +
                            "Song: " + trackInfo[i].name + "\n" +
                            "Preview URL: " + trackInfo[i].preview_url + "\n" +
                            "Album: " + trackInfo[i].album.name + "\n"+
                            "======End Spotify Results======" + "\n";
            console.log(spotifyResults)  ; 

           
           

        fs.appendFile("log.txt", spotifyResults, function (err) {
            if (err) throw err;
        });
            
    }   


        
    });

}





// ---------------- "Movies"  Function getMovie ------------//
function getMovie (movieName){
    

    if (!movieName) {
        movieName = "Mr Nobody";
       
    };
    var movieQueryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    
   
 
     axios.get(movieQueryUrl).then(
       function(response){

        

          var OMDBResults=  "\n======Begin OMDB Results======" + "\n" +
                            "Movie Title:  " + response.data.Title + "\n" +
                            "Release Year:  " + response.data.Year + "\n" +
                            "IMDB Rating:   " + response.data.imdbRating+ "\n" +
                            "Rotten Tomatoes Rating:   " + response.data.Ratings[1].Value + "\n" +
                            "Country:  " + response.data.Country + "\n" +
                            "Language:  " + response.data.Language + "\n" +
                            "Plot:  " + response.data.Plot + "\n" +
                             "Actors:  " + response.data.Actors + "\n" +
                             "======End OMDB Results=====" + "\n";
        
         console.log(OMDBResults) ; 

        fs.appendFile("log.txt", OMDBResults, function (err) {
            if (err) throw err;
        });
    

      });
     
 
  
     

    


}

 

// ----------------"Concerts"  Function bandsInTown---------------//
function bandsInTown (band){

    var concertQueryUrl = "https://rest.bandsintown.com/artists/"+ band +"/events?app_id=codingbootcamp";
    
    axios.get(concertQueryUrl).then(
        
    function (response) {
     
        for (var i=0 ; i<5 ; i++){

            
            var concertsResults =  "\n======Begin Concerts Results======" + "\n" +
                                   "Name of the venue: " + response.data[i].venue.name + "\n" +
                                   "Venue Location: " + response.data[i].venue.city + "\n" +
                                   "Venue Region: " + response.data[i].venue.region + "\n" +
                                   "Date of event: " +  moment(response.data[i].datetime).format("MM-DD-YYYY") + "\n"+
                                   "======End Concerts Results======" + "\n";
             console.log(concertsResults);

             fs.appendFile("log.txt", concertsResults, function (err) {
                if (err) throw err;
            });
             
         
        }
         

           
  
    })

 
           
    
  
}
//-----------------"ReadFile"  Function doWhatItSays ------------//
function doWhatItSays(){
  fs.readFile("random.txt", "utf8", function(error, data) {

    
    if (error) {
      return console.log(error);
    }
    var dataArr = data.split(",");
    pick (dataArr[0], dataArr[1])

     
    
  
  })


  
}

//----------Execute Code----------//
pick (caseData, userInput);


 




