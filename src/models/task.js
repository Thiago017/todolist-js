const DataTypes = require("sequelize");
const db = require("../config/connection");

const Task = db.define(
  "task",
  {
    id: { type: DataTypes.INTEGER, primaryKey: 1, autoIncrement: 1 },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    checklist_id: { type: DataTypes.INTEGER},
    done: { type: DataTypes.BOOLEAN,  defaultValue: false},
    
  },
  {
    timestamps: false,
  },
  {
    tableName: "tasks"
  },
);

module.exports = Task;
