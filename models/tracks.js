var mongoose = require('mongoose'),
 	Schema = mongoose.Schema;

var TrackSchema = new Schema({
    title: String,
    artist: String,
    genre: String,
    id: Number
});

var Track = mongoose.model('Track', TrackSchema);