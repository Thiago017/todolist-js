const db = require('../config/connection');

  const checklistModel = db.define('checklist', {
    id: { type: DataTypes.INTEGER, primaryKey: 1, autoIncrement: 1 },
    name: { type: DataTypes.STRING },
  }, {
    tableName: 'checklists'
  });

  module.exports = db.models.checklistModel;
