// require and use express
const express = require('express');
const app = express();
const path = require('path');

// connect to database
const mongoose = require('mongoose');
const mongooseConnection =
  process.env.MONGODB_URI || 'mongodb://localhost/gbooksreact';
mongoose.connect(mongooseConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// middleware for body/uri parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require and use routes
const routes = require('./routes');
app.use(routes);

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// initialize port and start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT);
  console.log('DB connected @ ' + mongooseConnection);
});
