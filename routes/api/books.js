const router = require("express").Router();
const axios = require('axios');


router.route("/api/saved", (req, res) => {
  axios.get({
    method: 'get',
    url: '/api/saved'
  })
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
