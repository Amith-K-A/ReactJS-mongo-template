const db = require("../models");
const Project = db.project;

exports.addProject = (req, res) => {
  const user = new Project({
    id: req.body._id,
    label: req.body.label,
    item: req.body.item,
    userId: req.body.userId,
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "project was added successfully!" });
  });
};

exports.updateProject = (req, res) => {
  var query = { _id: req.body.projectId };

  Project.findOneAndUpdate(query, req.body, { upsert: true }, function (err, doc) {
    if (err) return res.send(500, { error: err });
    return res.send("Succesfully saved.");
  });
};

exports.getProject = function (req, res, next) {
  Project.findOne({ userId: req.query.userId }, function (err, data) {
    if (err) {
      return res.status(500);
    } else {
      return res.status(200).send({ result: data });
    }
  });
};
