// IMPORTS
const mongoose = require('mongoose');

// PROMISE TO CONNECT
module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then( () => console.log(`SUCCESS! Connected to ${DB} database!`))
        .catch(err => console.log("FAIL! Cannot connect to database."))
}