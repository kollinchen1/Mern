const express = require('express');
const cors = require('cors') // This is new
const app = express();
const port = 8000;
require('./server/config/mongoose.config'); 
app.use(cors()) // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routes/Author.routes')(app); // This is new
app.listen(port, () => {
    console.log("Listening at Port 8000")
})