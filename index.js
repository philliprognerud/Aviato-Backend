var express = require("express");
var app = express();
const oktaClient = require("./lib/oktaClient");

app.get("/test", (req, res) => {
  res.send("hello worldddd!!!!");
});

/* Create a new User (register). */
app.post("/api/add-okta-user", (req, res, next) => {
  console.log(req.body);

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
      console.log(err);
      // res.status(400);
      // res.send(err);
    });
});

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // If needed
  res.setHeader("Access-Control-Allow-Headers", "*"); // If needed
  res.setHeader("Access-Control-Allow-Credentials", true); // If needed

  // Pass to next layer of middleware
  next();
});

app.listen(8000, function() {
  console.log("serving on port 8000");
});
