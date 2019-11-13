const express = require("express");
const app = express();
const Book = require("./lib/models/Books.js");
const parser = require("body-parser");
app.use(parser.json());

app.get("/", function(req, res) {
  Book.find({}).then(books => {
    res.json(books);
  });
});

app.listen(4000, function() {
  console.log("I am listening at port 4000");
});
