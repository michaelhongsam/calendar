const router = require("express").Router();
const Event = require("../db/models");

// matches GET requests to /api/
router.get("/", (req, res, next) => {
  // let dbRequest;
  // if (req.query.startTime) {
  //   // console.log('hitting /api?')
  //   // console.log(req.query)
  //   dbRequest = Event.findAll({
  //     where: {
  //       startTime: new Date(req.query.startTime)
  //     }
  //   });
  // } else {
  //   dbRequest = Event.findAll();
  // }
  // dbRequest.then(events => res.json(events)).catch(next);

  Event.findAll()
    .then(events => res.json(events))
    .catch(next);
});

// matches POST requests to /api/
router.post("/", (req, res, next) => {
  Event.create(req.body)
    .then(event => res.json(event))
    .catch(next);
});
// matches PUT requests to /api/:id
router.put("/:id", (req, res, next) => {
  Event.findById(req.params.id)
    .then(event => event.update(req.body))
    .then(event => res.json(event))
    .catch(next);
});
// matches DELETE requests to /api/:id
router.delete("/:id", (req, res, next) => {
  Event.findById(req.params.id)
    .then(event => event.destroy())
    .then(event =>
      res.json({
        message: "event deleted"
      })
    )
    .catch(next);
});

router.use((req, res, next) => {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
