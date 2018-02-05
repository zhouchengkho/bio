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


router.post('/blog', function(req, res) {
  var blog = {
    title: req.body.title,
    text: req.body.text
  }
  db.Blog.create(blog, function(err, result) {
    if(err) res.redirect('/error');
    else {
      res.redirect('/blog/'+blog.id);
    }
  })
})


router.get('/blog/editor', function(req, res) {
  res.render('editor', {});
})



router.get('/blog/:id', function(req, res) {
  res.render('blog', {});
})

router.get('/error', function(req, res) {
  res.render('error', {});
})
