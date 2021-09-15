const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    }
},{timestamps: true});

// make the schema and export
// module.exports.Author = mongoose.model('Author', AuthorSchema);
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;