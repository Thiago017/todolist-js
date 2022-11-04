// const { db, DataTypes } = require('../config/connection');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mariadb::memory:');

  const taskModel = sequelize.define('task', {
    id: { type: DataTypes.INTEGER, primaryKey: 1, autoIncrement: 1 },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    checklist_id: { type: DataTypes.INTEGER },
    done: { type: DataTypes.BOOLEAN, defaultValue: false },
  }, {
    tableName: 'tasks'
  });

  module.exports = sequelize.models.taskModel;
