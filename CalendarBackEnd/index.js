const path = require('path')
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000; 
const db = require('./db');


const app = express();

app.use(morgan('dev'));

// app.use(express.static(path.join(__dirname, './path/to/static/assets')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'));

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

module.exports = app;