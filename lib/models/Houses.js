const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

memberSchema = new Schema({
  name: String,
  role: String,
  house: String,
  school: String,
  ministryOfMagic: Boolean,
  orderOfThePhoenix: Boolean,
  dumbledoresArmy: Boolean,
  deathEater: Boolean,
  bloodStatus: String,
  species: String,
  _id: String
});

const houseSchema = new Schema({
  _id: String,
  name: {
    type: String,
    trim: true
  },
  mascot: String,
  headOfHouse: String,
  houseGhost: String,
  founder: String,
  school: String,
  members: [memberSchema],
  values: [
    {
      type: String,
      enum: [
        "courage",
        "bravery",
        "nerve",
        "chivalry",
        "intelligence",
        "creativity",
        "learning",
        "wit",
        "ambition",
        "cunning",
        "leadership",
        "resourcefulness",
        "hard work",
        "patience",
        "justice",
        "loyalty"
      ]
    }
  ],
  colors: [
    {
      type: String,
      enum: [
        "yellow",
        "black",
        "green",
        "silver",
        "blue",
        "bronze",
        "scarlet",
        "gold"
      ]
    }
  ]
});

module.exports = mongoose.model("House", houseSchema);
