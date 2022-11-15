const Task = require("../models/task");
const db = require("../config/connection");

class TaskController {
  
  async createTask(req, res) {
    if (req.body.name) {
      db.query(
        `INSERT INTO tasks (name, description, checklist_id) VALUES ('${req.body.name}', '${req.body.description}', '${req.body.checklist_id}')`,
        { type: db.INSERT }
      )
        .then(function (insert) {
          if (insert) {
            res.redirect(`/checklists/${req.body.checklist_id}`);
          }
        })
        .catch(function (err) {
          return res.send(`ERROR: ${err}`);
        });
    } else {
      return res.send(`ERROR: Task name cannot be null.`);
    }
  }

  async completeTaskById(req, res) {

    Task.findOne({
      where: {
        id: req.params.id,
      }
    })
      .then(async function (rows) {
        if (rows && rows.dataValues) {
          db.query(`UPDATE tasks SET done = 1 WHERE id = ${req.params.id}`, { type: db.UPDATE });
          return res.redirect(`/checklists/${req.params.checklist_id}`);
        } else {
          return res.send("Checklist not found!");
        }
      })
      .catch(function (err) {
        return res.send(`ERROR: ${err}`);
      });
  }

  async deleteTaskById(req, res) {
    Task.findOne({
      where: {
        id: `${req.params.id}`,
        done: 0
      }
    })
      .then(async function (rows) {
        if (rows && rows.dataValues) {
          db.query(`DELETE FROM tasks WHERE id = ${req.params.id}`, { type: db.DELETE });
          return res.redirect(`/checklists/${req.params.checklist_id}`);
        } else {
          return res.send("Checklist not found!");
        }
      })
      .catch(function (err) {
        return res.send(`ERROR: ${err}`);
      });
  }
}

module.exports = new TaskController();
