const Checklist = require("../models/checklist")

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
}

module.exports = new ChecklistController()