const path = require('path');

module.exports = {
  "config": path.resolve('./config/', 'config.js'),
  "models-path": path.resolve('./server/models'),
  "seeders-path": path.resolve('./server/seeders'),
  "migrations-path": path.resolve('./server/migrations')
}

