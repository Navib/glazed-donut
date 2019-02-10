// Main Starting Point
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");

// DB setup
mongoose.connect(keys.mongoURI);

const app = express();

// App setup
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// the __dirname is the current directory from where the script is running
app.use(express.static("./app/public/"));

app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));

router(app);

const PORT = process.env.PORT || 5001;
const server = http.createServer(app);

server.listen(PORT);
console.log("server listening on:", PORT);
