const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;
isbnSchema = new Schema({
  isbn10: {
    type: String,
    trim: true
  },
  isbn13: {
    type: String,
    trim: true
  }
});

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
  },
  isbns: [isbnSchema]
});
module.exports = mongoose.model("Book", bookSchema);
