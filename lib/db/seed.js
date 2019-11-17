const axios = require("axios").default;
const Books = require("../models/Books.js");
//https://api.nytimes.com/svc/books/v3/lists/2019-08-10/science.json?api-key=YBUSf0ZC4G4osVkDqFA9lSuqGAsKb44j
axios
  .get(
    "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=YBUSf0ZC4G4osVkDqFA9lSuqGAsKb44j"
  )
  .then(function(res) {
    console.log("Success " + res.data.results[0]);
    const BooksMap = res.data.results.map(item => {
      const book = {};
      book.title = item.title;
      book.description = item.description;
      book.author = item.author;
      book.publisher = item.publisher;
      book.isbns = item.isbns;
      if (item.isbns.length > 0) {
        book.image = `http://covers.openlibrary.org/b/isbn/${item.isbns[0].isbn13}-L.jpg`;
      }
      console.log(book.image);

      return book;
    });

    Books.remove({}).then(() => {
      Books.create(BooksMap).then(() => {
        process.exit();
      });
    });
  })
  .catch(function(err) {
    console.log("Something is wrong " + err);
  });

//HELLO THIS IS A TEST
