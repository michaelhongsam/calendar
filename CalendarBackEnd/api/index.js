const router = require('express').Router();

// matches GET requests to /api/
router.get('/api/', function (req, res, next) { /* etc */});
// matches POST requests to /api/
router.post('/api/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/:id
router.put('/api/:id', function (req, res, next) { /* etc */});
// matches DELETE requests to /api/:id
router.delete('/api/:id', function (req, res, next) { /* etc */});

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;