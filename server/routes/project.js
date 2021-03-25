// const { verifySignUp } = require("../services");
const { authJwt } = require("../services");
const controller = require("../controllers/project-controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/project/get",
    [authJwt.verifyToken],
    controller.getProject
  );

  app.post(
    "/project/add",
    [authJwt.verifyToken],
    controller.addProject
  );

  app.post(
    "/project/update",
    [authJwt.verifyToken],
    controller.updateProject
  );

};