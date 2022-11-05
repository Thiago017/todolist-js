const Task = require('../models/task')

class TaskController {
  
  async index(req, res) {
    Task.findAll()
    .then(rows => {
      return res.send(rows);
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
        return res.send(rows.dataValues);
      } else {
        return res.send('Task not found!');
      }
    })
    .catch(function (err) {
      return res.send(`ERROR: ${err}`);
    })
  }
}

module.exports = new TaskController()
