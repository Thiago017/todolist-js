const Checklist = require("../models/checklist");
const db = require("../config/connection");

class ChecklistController {

  async index (req, res) {
    Checklist.findAll()
    .then(rows => {
      return res.status(200).json(rows);
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
        return res.status(200).json(rows.dataValues);
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
        db.query(`UPDATE checklists set name = '${req.body.name}' WHERE id = ${req.params.id}`, { type: db.UPDATE });
        return res.status(200).json(rows.dataValues);
      } else {
        return res.send('Checklist not found!');
      }
    })
    .catch(function (err) {
      return res.send(`ERROR: ${err}`);
    })
  }

  async removeChecklistById(req, res) {
    Checklist.findOne({
      where: {
        id: `${req.params.id}`,
        removed: 0,
      },
    })
    .then(async function (rows) {
      if (rows && rows.dataValues) {
        db.query(`UPDATE checklists set removed = 1 WHERE id = ${req.params.id}`, { type: db.UPDATE });
        return res.status(200).json(rows.dataValues);
      } else {
        return res.send('Checklist not found!');
      }
    })
    .catch(function (err) {
      return res.send(`ERROR: ${err}`);
    })
  }

  async deleteChecklistById(req, res) {
    Checklist.findOne({
      where: {
        id: `${req.params.id}`,
        removed: 0,
      },
    })
    .then(async function (rows) {
      if (rows && rows.dataValues) {
        db.query(`DELETE FROM checklists WHERE id = ${req.params.id}`, { type: db.UPDATE });
        return res.status(200).json(rows.dataValues);
      } else {
        return res.send('Checklist not found!');
      }
    })
    .catch(function (err) {
      return res.send(`ERROR: ${err}`);
    })
  }

  async createChecklist(req, res) {
    if (req.body.name) {
      db.query(`INSERT INTO checklists (name) VALUES ('${req.body.name}')`, { type: db.INSERT })
        .then(function (status) {
          if (status) {
            return res.status(200).json(req.body);
          }
        }).catch(function (err) {
          return res.send(`ERROR: ${err}`);
        });
    } else {
      return res.send(`ERROR: checklist name cannot be null.`);
    }
  }

}

module.exports = new ChecklistController()
