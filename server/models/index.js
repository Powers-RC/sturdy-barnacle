const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const db = {};

//TODO: Add to the readme that the node environment must be passed when starting the app for dotenv-flow to read in to process env 

let sequelize;
console.log(`Current Running Environment: ${process.env.NODE_ENV}`)
  if(process.env.NODE_ENV === 'development'){
    console.log("Entered Development Block")
//    console.log(process.env)
    sequelize = new Sequelize(process.env.DATABASE_URL, {host:process.env.HOST, dialect:process.env.DIALECT});
  }
  else if (process.env.NODE_ENV === 'test'){
    sequelize = new Sequelize(process.env.DATABASE_URL, {host:process.env.HOST, dialect:process.env.DIALECT, dialectOptions:{ssl:true}});
  }
  else{
    sequelize = new Sequelize(process.env.DATABASE_URL, {host:process.env.HOST, dialect:process.env.DIALECT, dialectOptions:{ssl:true}});
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
