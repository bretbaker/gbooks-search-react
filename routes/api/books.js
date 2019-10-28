require('dotenv').config();
const router = require("express").Router();
const axios = require('axios');

// api key
const apiKey = process.env.API_KEY;

router.route("/api/books", (req, res) => {
  axios.get({
    method: 'get',
    url: 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=' + apiKey
  })
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
