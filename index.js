const cors = require("cors");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const oktaClient = require("./lib/oktaClient");

app.use(cors());
app.options("*", cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Create a new User (register). */
app.post("/api/add-okta-user", (req, res, next) => {
  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email
    },
    credentials: {
      password: {
        value: req.body.password
      }
    }
  };

  oktaClient
    .createUser(newUser)
    .then(user => {
      res.status(201);
      res.send(user);
    })
    .catch(err => {
      res.status(400);
      res.send(err);
    });
});

app.listen(8000, function() {
  console.log("serving on port 8000");
});
