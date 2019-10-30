const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Book
      .find(req.query)
      .sort({ dateSaved: -1 })
      .then(dbRes => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Book
      .create(
        req.body
        // googleId: req.body.googleId,
        // title: req.body.title,
        // authors: req.body.authors,
        // description: req.body.description
      )
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },
  delete: (req, res) => {
    db.Book
      .findById({ googleId: req.body.googleId })
      .then(dbDel => dbDel.remove())
      .then(dbDel => res.json(dbDel))
      .catch(err => res.status(422).json(err));
  } 
};