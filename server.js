// require and use express
const express = require("express");
const app = express();

// require and use routes
const routes = require("./routes");
app.use(routes);

// serve static assets
if (process.env.NODE_ENV === "development") {
  app.use(express.static("./client/public"));
}

// initialize port and start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});