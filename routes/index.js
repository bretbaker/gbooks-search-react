const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// api route for books search
router.use("/api", apiRoutes);

// homepage
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});


module.exports = router;