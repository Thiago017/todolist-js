const Task = require('../models/task');
const db = require('../config/connection');

class TaskController {

  async index (req, res) {
    Task.findAll()
    .then(rows => {
      return res.status(200).json(rows);
    })
    .catch(err => {
      return (`ERROR: ${err}`)
    });
  }

  async getTaskById(req, res) {
    Task.findOne({
      where: {
        id: `${req.params.id}`,
        done: 0,
      },
    })
    .then(async function (rows) {
      if (rows && rows.dataValues) {
        return res.status(200).json(rows.dataValues);
      } else {
        return res.send('Task not found!');
      }
    })
    .catch(function (err) {
      return res.send(`ERROR: ${err}`);
    })
  }

  async updateTaskById(req, res) {
    Task.findOne({
      where: {
        id: `${req.params.id}`,
        done: 0,
      },
    })
    .then(async function (rows) {
      if (rows && rows.dataValues) {
        db.query(`UPDATE tasks set name = '${req.body.name}', description = '${req.body.description}', checklist_id = '${req.body.checklist_id}' WHERE id = ${req.params.id}`, { type: db.UPDATE });
        return res.status(200).json(rows.dataValues);
      } else {
        return res.send('Task not found!');
      }
    })
    .catch(function (err) {
      return res.send(`ERROR: ${err}`);
    })
  }

  async completeTaskById(req, res) {
    Task.findOne({
      where: {
        id: `${req.params.id}`,
        done: 0,
      },
    })
    .then(async function (rows) {
      if (rows && rows.dataValues) {
        db.query(`UPDATE tasks set done = 1 WHERE id = ${req.params.id}`, { type: db.UPDATE });
        return res.status(200).json(rows.dataValues);
      } else {
        return res.send('Task not found!');
      }
    })
    .catch(function (err) {
      return res.send(`ERROR: ${err}`);
    })
  }

  async deleteTaskById(req, res) {
    Task.findOne({
      where: {
        id: `${req.params.id}`,
        done: 0,
      },
    })
    .then(async function (rows) {
      if (rows && rows.dataValues) {
        db.query(`DELETE FROM tasks WHERE id = ${req.params.id}`, { type: db.UPDATE });
        return res.status(200).json(rows.dataValues);
      } else {
        return res.send('Task not found!');
      }
    })
    .catch(function (err) {
      return res.send(`ERROR: ${err}`);
    })
  }

  async createTask(req, res) {
    if (req.body.name) {
      db.query(`INSERT INTO tasks (name, description, checklist_id) VALUES ('${req.body.name}', '${req.body.description}', '${req.body.checklist_id}')`, { type: db.INSERT })
        .then(function (status) {
            return res.status(200).json(req.body);
        }).catch(function (err) {
          return res.send(`ERROR: ${err}`);
        });
    } else {
      return res.send(`ERROR: Task name cannot be null.`);
    }
  }

}

module.exports = new TaskController()
