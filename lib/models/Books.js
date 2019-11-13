const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

bookSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  author: {
    type: String,
    trim: true
  },
  publisher: {
    type: String,
    trim: true
  }
});
module.exports = mongoose.model("Book", bookSchema);
