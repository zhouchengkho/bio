var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Bio',
  });
});

router.get('/projects', function(req, res) {
  res.render('projects', {});
})

router.get('/contact', function(req, res) {
  res.render('contact', {});
})
