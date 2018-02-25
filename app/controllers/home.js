var express = require('express'),
  router = express.Router(),
  db = require('../models'),
  helper = require('../utility/helper');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  db.blog.findAll({
    limit: 4,
    order: 'updated_at desc'
  }).then(function(result) {
    var blogs = []
    result.forEach(function(bigBlog) {
      var smallBlog = {}
      smallBlog.id = bigBlog.id;
      smallBlog.time = bigBlog.updated_at.toString().substring(0, 10);
      smallBlog.title = bigBlog.title;
      smallBlog.abstract = bigBlog.abstract;
      smallBlog.href = bigBlog.href ? bigBlog.href : '/blog/'+bigBlog.id;
      blogs.push(smallBlog)
    })
    console.log(blogs)
    res.render('index', {
      title: 'Bio',
      blogs: JSON.parse(JSON.stringify(blogs)),
      home: true
    });
  }).catch(function(err) {
    res.render('index', {
      title: 'Bio',
    });})

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
    text: req.body.text,
    abstract: req.body.abstract
  }

  db.blog.create(blog).then(function(result) {
      res.status(200);
      res.send(helper.genReponse(200, result));
  }).catch(function(err) {
    res.status(400);
    res.send(helper.genReponse(400, err));
  })
})


router.get('/blog/editor', function(req, res) {
  res.render('editor', {
    header: '<script src="https://cdn.ckeditor.com/ckeditor5/1.0.0-alpha.2/classic/ckeditor.js"></script>',
    script: '<script src="/js/editor.js" type="text/javascript"></script>'
  });
})



router.get('/blog/:id', function(req, res) {
  db.blog.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(blog) {
    console.log(blog)
    blog.text = blog.text.toString();
    res.render('blog', JSON.parse(JSON.stringify(blog)))
  }).catch(function(err) {
    res.render('blog', {id: 0, title: "this blog doesn't exist", text: ""})
  })
})

router.get('/error', function(req, res) {
  res.render('error', {});
})
