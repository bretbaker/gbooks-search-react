const path = require("path");
const router = require("express").Router();
const controller = require("../controllers/booksController");
const apiRoutes = require("./api");

// api route for books 
router.use("/api/saved", apiRoutes);

// homepage
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

// post route for saving book to db
router.post("/api/saved", (req, res) => {
  console.log(req.body);
  controller.create;
});


module.exports = router;