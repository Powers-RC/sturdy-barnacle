const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
//const env = process.env.NODE_ENV || 'development';
//const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};

let sequelize;
  console.log(process.env)
  if(process.env !== 'Development'){
    sequelize = new Sequelize(process.env.DATABASE_URL, {host:process.env.HOST, dialect:process.env.DIALECT});
  }
  else{
    sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {host:process.env.HOST, dialect:process.env.DIALECT});
  }

fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
