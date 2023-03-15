const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Checklist extends Model {
  static async getChecklistByTaskAmount(amout) {
    return Checklist.findAll();
  }
}

Checklist.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: 1, autoIncrement: 1 },
    name: { type: DataTypes.STRING },
    removed: { type: DataTypes.INTEGER},
  },
 {
  sequelize,
  tableName: "checklists",
  timestamps: false,
  modelName: "Checklist"
});

module.exports = Checklist;
