const Author = require("../models/author");

module.exports = {
    // == CREATE ==
    createAuthor : (req, res) => {
        console.log(req.body);
        Author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => {
                console.log("SERVER **ERROR** / Create")
                res.status(400).json({message: "error", error: err})
            })
    },
    // == RETRIEVE ==
    // retrieve all
    retrieveAllAuthors : (req, res) => {
        Author.find()
            .then(allAuthors => res.json(allAuthors))
            .catch(err => res.json({message: "error res", error: err}))
    },

    // retrieve one
    retrieveOneAuthor : (req, res) => {
        Author.findById(req.params.id)
            .then(author => res.json(author))
            .catch(err => res.json({message: "error res", error: err}))
    },
    
    // == UPDATE ==
    updateAuthor : (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then((revisedAuthor) => {
                res.json(revisedAuthor)
            })
            .catch(err => res.status(400).json({error: err}))
    },

    // == DELETE ==
    deleteAuthor : (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({error: err}))
    }
}