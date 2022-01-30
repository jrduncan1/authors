// IMPORTS & GLOBAL VARIABLES
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = 'authorz';

// MIDDLEWARE
app.use(cors(), express.json(), express.urlencoded({extended:true}));

// CONNECT TO DATABASE
require("./config/mongoose.config")(DB);

// CONNECT TO REOUTES
require("./routes/author.routes")(app);

// LISTENER
app.listen(PORT, () => {console.log(`==== SERVER IS RUNNING on localhost:${PORT} ====`)});
