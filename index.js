const express = require("express");
const app = express();
const cors = require("cors");

const Book = require("./lib/models/Books.js");
const parser = require("body-parser");

app.use(cors());
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.get("/", function(req, res) {
  Book.find({}).then(books => {
    res.redirect("/books");
  });
});

app.get("/books", function(req, res) {
  Book.find({}).then(books => {
    res.json(books);
  });
});

app.get("/books/title/:title", function(req, res) {
  Book.find({ title: req.params.title }).then(book => {
    res.json(book);
  });
});

app.get("/books/author/:author", function(req, res) {
  Book.find({ author: req.params.author }).then(book => {
    res.json(book);
  });
});

app.get("/books/publisher/:publisher", function(req, res) {
  Book.find({ publisher: req.params.publisher }).then(book => {
    res.json(book);
  });
});

app.post("/books", function(req, res) {
  Book.create(req.body).then(book => {
    res.json(req.body);
  });
});

app.put("/books/title/:title", function(req, res) {
  Book.findOneAndUpdate({ title: req.params.title }, req.body, {
    new: true
  }).then(book => {
    res.json(book);
  });
});

app.delete("/books/title/:title", function(req, res) {
  Book.findOneAndDelete({ title: req.params.title }).then(book => {
    res.json(book);
  });
});

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
