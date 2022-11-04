const DataTypes = require("sequelize");
const db = require("../config/connection");

const Checklist = db.define(
  "checklist",
  {
    id: { type: DataTypes.INTEGER, primaryKey: 1, autoIncrement: 1 },
    name: { type: DataTypes.STRING },
    removed: { type: DataTypes.INTEGER},
  },
  {
    timestamps: false,
  },
  {
    tableName: "checklists"
  },
);

module.exports = Checklist;
