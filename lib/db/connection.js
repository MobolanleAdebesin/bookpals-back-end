const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bestseller_db", {
  useNewUrlParser: true
});

module.exports = mongoose;
