# LIRI Bot


LIRI is like iPhone's SIRI, however, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is be a command line node app that takes in on of four parameters and returns the relative data.

--->LIRI uses the following commands:
* spotify-this-song 
* movie-this 
* concert-this
* do-what-it-says

--->How to Run LIRI-Bot<---

--->Command: node liri.js spotify-this-song <song name here>.

This will show the following information about the song in your terminal/bash window:
There will be 5 results for this song search
The results will be logged in log.txt file
If no song is provided then the program will default to "The Sign" Ace of Base

* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from



--->Command: node liri.js movie-this <movie name here>.

This will output the following information to your terminal/bash window:
The results will be logged in log.txt file
If the user doesn't type a movie in, the program will output data for the movie 'Mr.Nobody'

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.



--->Command : node liri.js concert-this <artist/band name here>

This will output the following information to your terminal/bash window
There will be 5 concerts results 
The results will be logged in log.txt file

* Name of the venue
* Venue location (City)
* Venue Region (State)
* Date of the Event 


--->Command: node liri.js do-what-it-says

This will output the command placed in random.txt file
The results will be logged in log.txt file

---> DEMO<---
Please see the Videos on videos folder
