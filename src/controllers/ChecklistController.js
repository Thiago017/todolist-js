const Checklist = require("../models/checklist");
const db = require("../config/connection");

class ChecklistController {

  async index (req, res) {
    Checklist.findAll()
    .then(rows => {
      return res.send(rows);
    })
    .catch(err => {
      return (`ERROR: ${err}`)
    });
  }

  async getChecklistById(req, res) {
    Checklist.findOne({
      where: {
        id: `${req.params.id}`,
        removed: 0,
      },
    })
    .then(async function (rows) {
      if (rows && rows.dataValues) {
        return res.send(rows.dataValues);
      } else {
        return res.send('Checklist not found!');
      }
    })
    .catch(function (err) {
      return res.send(`ERROR: ${err}`);
    })
  }

  async updateChecklistById(req, res) {
    Checklist.findOne({
      where: {
        id: `${req.params.id}`,
        removed: 0,
      },
    })
    .then(async function (rows) {
      if (rows && rows.dataValues) {
        db.query(`UPDATE checklists set name = '${req.body.name}', removed = ${req.body.removed} WHERE id = ${req.params.id}`, { type: db.UPDATE });
        return res.send(rows.dataValues)
      } else {
        return res.send('Checklist not found!');
      }
    })
    .catch(function (err) {
      return res.send(`ERROR: ${err}`);
    })
  }

}

module.exports = new ChecklistController()
