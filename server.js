var mongoose = require('mongoose'),
	express = require("express"),
  	app = express(),
	bodyParser = require('body-parser'),
 	_ = require("underscore"),
 	Track = require('./models/tracks');

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost/test");

var tracks = [
  {title:"Subzero" , artist: "Ben Klock", genre: "Techno", id:1}
  
];

app.get('/tracks', function(req,res){
	var tracks = Track.find(function(err, tracks) {
  res.json(tracks);
	})	
});

// app.get('/tracks/new',function(req,res){

// 	var track = new Track({
//     	title: req.body.title,
//   	 	artist: req.body.artist,
//   		genre: req.body.genre,
//    		id: req.body.id
// 	});	
// 		console.log(track);
// 	track.save(function (err, track) {
//   		console.log('track saved')
//   		if (err) { return res.json(err) };
//   		res.status(201).json(track)
// });
// })

// set server to localhost:3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});