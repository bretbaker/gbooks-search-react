// require and use express
const express = require("express");
const app = express();

// middleware for body/uri parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require and use routes
const routes = require("./routes");
app.use(routes);

// serve static assets
if (process.env.NODE_ENV === "development") {
  app.use(express.static("./client/public"));
} else if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

// connect to database
const mongoose = require("mongoose");
const mongooseConnection = process.env.MONGODB_URI || "mongodb://localhost/gbooksreact"; 
mongoose.connect(mongooseConnection);

// initialize port and start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
  console.log("DB connected @ " + mongooseConnection);
});