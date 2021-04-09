const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./config/db-config");
const app = express();
const db = require("./models");
const Role = db.role;
const path = require("path");

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 4000);
app.set("env", process.env.NODE_ENV);
app.set("mongo", process.env.MONGODB_URI || `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`);
// // set port, listen for requests
db.mongoose
  .connect(app.get("mongo"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

require("./routes/auth-routes")(app);
require("./routes/user-routes")(app);
require("./routes/project")(app);

app.use("/", express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', "index.html"))
})

if (app.get("env") === "production") {
  app.use("*", express.static(path.join(__dirname, "../src", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../src", "build", "index.html"));
  });
}



app.listen(app.get("port"), () => {
  console.log(`Server is running on port`);
});

//https://bezkoder.com/node-js-mongodb-auth-jwt/
//https://bezkoder.com/react-hooks-jwt-auth/
