const router = require("express").Router();
const Event = require("../db/models");

// matches GET requests to /api/
router.get("/", function(req, res, next) {
  Event.findAll()
    .then(events => res.json(events))
    .catch(next);
  // res.send('get')
});
// matches POST requests to /api/
router.post("/", function(req, res, next) {
  Event.create(req.body)
    .then(event => res.json(event))
    .catch(next);
  // res.send('post')
});
// matches PUT requests to /api/:id
router.put("/:id", function(req, res, next) {
  res.send(`put ${req.params.id}`);
});
// matches DELETE requests to /api/:id
router.delete("/:id", function(req, res, next) {
  res.send(`delete ${req.params.id}`);
});

router.use(function(req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
