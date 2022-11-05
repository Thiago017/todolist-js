const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todolist", "root", "", {
  host: "localhost",
  dialect: "mariadb"
});

module.exports = sequelize;
