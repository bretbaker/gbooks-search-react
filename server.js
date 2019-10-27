// require and use express
const express = require("express");
const app = express();

// require and use routes
const routes = require("./routes");
app.use(routes);

// init port
const PORT = process.env.PORT || 3001;

// serve static assets
if (process.env.NODE_ENV === "development") {
  app.use(express.static("./client/public"));
}

// start srver
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});