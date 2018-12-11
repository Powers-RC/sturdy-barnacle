const blogController = require('../controllers').blogControllers;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/newPost', blogController.create);
  app.get('/api/posts', blogController.list);
  app.get('/api/posts/:id', blogController.retrieve);
  app.put('/api/update/:id', blogController.update);
  app.delete('/api/delete/:id', blogController.destroy);
};