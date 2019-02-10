const Authentication = require("./controllers/authentication");
const passportService = require("./services/auth/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  // send the user to index html page inspite of the url
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("./app/public/", "index.html"));
  });

  /* Start Auth Routes */
  app.post("/signin", requireSignin, Authentication.signin);

  app.post("/signup", Authentication.signup);
  /* End Auth routes */
};
