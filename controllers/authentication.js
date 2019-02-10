const jwt = require("jwt-simple");
const User = require("../models/user");
const config = require("../config/config");

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has email and password auth'd already
  // We need to give them a token
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = function(req, res, next) {
  const { body } = req;
  const { email, username, password } = body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }
  User.findOne({ username: username }, function(err, existingUser) {
    console.log("findone");
    if (err) {
      return next(err);
    }
    // if a user with username does exist return an error
    if (existingUser) {
      return res.status(422).send({ error: "Username is in use" });
    }
  });
  // See if a user with given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    // if a user with email does exist return an error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({
      email: email,
      password: password,
      username: username
    });

    console.log("preSave()");
    user.save(function(err) {
      console.log("insideSave()");
      if (err) {
        return next(err);
      }
      // Respond to request idicating the user was created
      res.json({ token: tokenForUser(user) });
    });

    console.log("postSave()");
  });
};
