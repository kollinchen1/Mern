const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must be at least 2 characterss long"]
    },
    prefPos:{
        type: String
    },
    joinedGames:[]
},{timestamps: true});

const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;