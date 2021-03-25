const mongoose = require("mongoose");

const Project = mongoose.model(
  "Project",
  new mongoose.Schema({
    label: String,
    item: [],
    userId: String,
  })
);

module.exports = Project;