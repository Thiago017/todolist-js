const Checklist = require("../models/checklist");
const Task = require('../models/task');
const db = require("../config/connection");

class ChecklistController {

  async index (req, res) {
    let sql = "SELECT *, (select count(tasks.checklist_id) FROM tasks WHERE tasks.checklist_id = checklists.id AND tasks.done = 0) AS qtd FROM checklists WHERE checklists.removed = 0";
    await db.query(sql, { type: db.SELECT })
    .then(rows => {
      if (rows && rows[0]) {
        return res.status(200).render('checklists/index', {checklists: rows[0]});
      }
    })
    .catch(err => {
      return res.status(200).render('pages/error/index', {error: err});
    });
  }

  async getChecklistById(req, res) {
    Checklist.findOne({
      where: {
        id: `${req.params.id}`,
        removed: 0,
      },
    })
    .then(async function (checklist) {
      if (checklist && checklist.dataValues) {

        let tasks = await Task.findAll({
          where: {
            checklist_id: `${req.params.id}`,
            done: 0,
          }
        });

        return res.status(200).render('checklists/show', {checklist: checklist, tasks: tasks});
      } else {
        return res.status(200).render('pages/error/index', {error: 'Checklist not found!'});
      }
    })
    .catch(function (err) {
      console.log(err)
      return res.status(200).render('pages/error/index', {error: err});
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
    console.log(req.body.name);

    if (req.body.name) {
      db.query(`INSERT INTO checklists (name) VALUES ('${req.body.name}')`, { type: db.INSERT })
        .then(function (insert) {
          if (insert) {
            res.redirect('/checklists');
          }
        }).catch(function (err) {
          return res.send(`ERROR: ${err}`);
        });
    } else {
      return res.send(`ERROR: checklist name cannot be null.`);
    }
  }

  async createChecklistForm(req, res) {
    let checklist = new Checklist();

    return res.status(200).render('checklists/new', { checklist: checklist });
  }

}

module.exports = new ChecklistController()
