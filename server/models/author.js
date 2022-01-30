// IMPORTS
const mongoose = require('mongoose');

// SCHEMA
const AuthorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: [true, "Author is required!"],
        minlength: [3, "Author name must be at least 3 characters long!"]
    }
}, {timestamps:true})

// INSTANTIATE AND EXPORT SCHEMA
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;