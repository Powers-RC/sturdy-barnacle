require('dotenv-flow').config();


module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "postgres"
  },
  "test": {
    "dialect": "postgres",
    "use_env_variable": process.env.DATABASE_URL
  },
  "production": {
    "dialect": "postgres",
    "use_env_variable": process.env.DATABASE_URL
  }
};

c