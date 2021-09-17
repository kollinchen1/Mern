const Player = require("../models/Player.model") 

module.exports = {
    // READ ALL 
    findAll: (req, res) => {
        Player.find()
            .then(allPlayers => {
                res.json({allPlayersArray: allPlayers})
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({message: "error", error:err})
            });
    },
    // READ ONE 
    findOne: (req, res) => {
        Player.findById(req.params.id)
            .then(Player => {
                res.json(Player)})
            .catch(err => {
                res.status(400).json({message: "error", error:err})
            })
    },
    // CREATE 
    create: (req, res) => {
        Player.create(req.body)
            .then(newPlayer => res.json(newPlayer))
            .catch(err => res.status(400).json(err))
    },
    // UPDATE 
    update : (req, res) => {
        console.log("sadasdasdasdsad",req.params.id)
        console.log("sadasdasdasdsad",req.body)
        Player.findByIdAndUpdate(req.params.id, {joinedGames:req.body}, {new:true, runValidators:true})
            .then(updatedPlayer => res.json(updatedPlayer))
            .catch(err => {
                
                res.status(400).json(err)
            })
    },
    // DELETE 
    delete : (req, res) => {
        Player.findByIdAndDelete(req.params.id)
            .then(result => {
                res.json({result: result})
            })
            .catch(err => {
                console.log("ERROR", req.params.id);
                res.status(400).json(err)
            })
    }
}