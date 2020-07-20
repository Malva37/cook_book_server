const dbConfig = require("../config/config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./recipe.model.js")(sequelize, Sequelize);

module.exports = db;

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });