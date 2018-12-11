const Post = require('../models').blog_posts;

module.exports = {
  create(req, res) {
    return Post
      .create({
//      req: incoming request from client, res: response we are preparing to send back to client
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        data_file: req.body.data_file,
        status: req.body.status,
        content_type: req.body.content_type,
        comment_cnt: req.body.comment_cnt,
        like_cnt: req.body.like_cnt,
        update_reason: req.body.update_reason
      })
      .then(post => res.status(201).send(post))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Post
      .all()
      .then(posts => res.status(200).send(posts))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Post
      .findById(req.params.id)
      .then(post => {
        if (!post) {
          return res.status(404).send({
            message: 'Blog Post Not Found',
          });
        }
        return res.status(200).send(post);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Post
      .findById(req.params.id)
      .then(post => {
        if (!post) {
          return res.status(404).send({
            message: 'Blog Post Not Found',
          });
        }
        return post
          .update({
            title: req.body.title || post.title,
            content: req.body.content || post.content,
            image: req.body.image || post.image,
            data_file: req.body.data_file || post.data_file,
            status: req.body.status || post.status,
            content_type: req.body.content_type || post.content_type,
            comment_cnt: req.body.comment_cnt || post.comment_cnt,
            like_cnt: req.body.like_cnt || post.like_cnt,
            update_reason: req.body.update_reason || post.update_reason
          },)
          .then(() => res.status(200).send(post))  // Send back the updated todo.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Post
      .findById(req.params.id)
      .then(post => {
        if (!post) {
          return res.status(400).send({
            message: 'Blog Post Not Found',
          });
        }
        return post
          .destroy()
          .then(() => res.status(204).send({message: "Blog Post Was Successfully Deleted!"}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }

};