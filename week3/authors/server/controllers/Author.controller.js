const Author = require("../models/Author.model") 

module.exports = {
    // READ ALL 
    findAll: (req, res) => {
        Author.find()
            .then(allAuthors => {
                // console.log("allAuthors ->", allAuthors);
                res.json({allAuthorsArray: allAuthors})
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({message: "error", error:err})
            });
    },
    // READ ONE 
    findOne: (req, res) => {
        // console.log("req.params.id =>", req.params.id);
        // Author.findOne({_id: req.params.id})
        Author.findById(req.params.id)
            .then(Author => {
                // console.log("retrieved one Author: ", Author);
                res.json(Author)})
            .catch(err => {
                // console.log("couldn't find obj");
                res.status(400).json({message: "error", error:err})
            })
    },
    // CREATE 
    create: (req, res) => {
        // const {title, content} = req.body;
        // Author.create({title, content})
        Author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.status(400).json(err))
    },
    // UPDATE 
    update : (req, res) => {
        // Author.findOneAndUpdate({_id: req.params.id})
        Author.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.status(400).json(err))
    },
    // DELETE 
    delete : (req, res) => {
        // console.log(req.params.id);
        // Author.deleteOne({_id: req.params.id})
        Author.findByIdAndDelete(req.params.id)
            .then(result => {
                res.json({result: result})
            })
            .catch(err => {
                console.log("ERROR", req.params.id);
                res.status(400).json(err)
            })
    }
}