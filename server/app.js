/* Load the Express library */
const express = require("express");
const mongoose = require("mongoose");
var request = require("request");
var querystring = require("querystring");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const spotifyRoutes = require("./routes/spotify");

/*--------------------------------Create an HTTP server to handle responses--------------------------------*/
// Connect to MongoDB
mongoose
  .connect(
    "mongodb://satyanarayana:satyanarayana@cluster0-shard-00-00.pnnqy.mongodb.net:27017,cluster0-shard-00-01.pnnqy.mongodb.net:27017,cluster0-shard-00-02.pnnqy.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-d9c8kc-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

const app = express();

// Init middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Logger
app.use("/", (req, res, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
  next();
});

// Routes:
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", spotifyRoutes);

// Listen to req
const PORT = 8089;
app.listen(PORT, () => {
  console.log(`Server running at Port ${PORT}`);
  authSpotifyApi();
});

const client_id = "9fbca87d65b34e4899b4547c42644b45"; // Your client id
const client_secret = "b81ed71174ce4a4fba45b37718980e68"; // Your secret
access_token = "";

function authSpotifyApi() {
  let options = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      grant_type: "client_credentials",
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
  };
  request.post(options, (err, res, body) => {
    access_token = `${JSON.parse(body).access_token}`;

    console.log(JSON.parse(body).access_token);
  });
}
