const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todolist", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  logging: false //Set false for disable query logs
});

module.exports = sequelize;
