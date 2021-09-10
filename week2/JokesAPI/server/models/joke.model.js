const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,

		minlength:[10,"at least 10 characters long"]
	},
	punchline: { 
		type: String,

		minlength:[3,"at least 3 characters long"]
	}
}, { timestamps: true })
   // create a constructor function for our model and store in variable 'Joker'
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;