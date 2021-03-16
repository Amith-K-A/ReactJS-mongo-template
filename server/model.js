const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let detail = new Schema({
  userName: {
    type: String
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model("detail", detail);