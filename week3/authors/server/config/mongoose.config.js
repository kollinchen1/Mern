const mongoose = require("mongoose");
const DB = "author_db"
mongoose.connect('mongodb://localhost/'+ DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${DB} database`))
    .catch(err => console.log(`Something went wrong when connecting to the ${DB} database `, err));

