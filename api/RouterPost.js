
//require packages
const express = require('express');
const postRoutes = express.Router();

// Get posts from ModelPost
let Post = require('./ModelPost');

// store royte
postRoutes.route('/add').post(function (req, res) {
  { console.log('storing route...') }
  let post = new Post(req.body);
  post.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'});
      { console.log('status passed...') }
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Get data
postRoutes.route('/').get(function (req, res) {
  { console.log('getting data route...') }
    Post.find(function(err, posts){
    if(err){
      res.json(err);
      { console.log('error route cannot be found...') }
    }
    else {
      res.json(posts);
      { console.log('data route found...') }
    }
  });
});

//  Update route
postRoutes.route('/update/:id').post(function (req, res) {
  { console.log('updating route...') }
  Post.findById(req.params.id, function(err, post) {
  if (!post)
    res.status(404).send("data is not found");
  else {
      post.title = req.body.title;
      post.body = req.body.body;
      post.save().then(() => {
        res.json('Update complete');
    })
    .catch(() => {
          res.status(400).send("unable to update the database");
    });
  }
});
});

// Edit route
postRoutes.route('/edit/:id').get(function (req, res) {
  { console.log('route edited...') }
  let id = req.params.id;
  Post.findById(id, function (err, post){
      if(err) {
        res.json(err);
      }
      res.json(post);
  });
});



// Delete route
postRoutes.route('/delete/:id').delete(function (req, res) {
  { console.log('deleted route...') }
    Post.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = postRoutes;