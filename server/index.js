const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./config/db-config");
const app = express();
const db = require("./models");
const Role = db.role;

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to amith application." });
});

// set port, listen for requests
const PORT = process.env.port || 4000;

db.mongoose
  .connect(process.env.MONGODB_URI || `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../build"));
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//https://bezkoder.com/node-js-mongodb-auth-jwt/
//https://bezkoder.com/react-hooks-jwt-auth/
