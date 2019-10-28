const path = require("path");
const router = require("express").Router();

// router.use((req, res) => {
//   res.sendFile(path.join)
// })
router.route("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

router.route("/saved", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;