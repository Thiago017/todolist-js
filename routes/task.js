const express = require("express");
const router = express.Router();
const db = require("../src/config/connection");
const Task = require("../src/models/task");

// router.get("/", (req, res) => {
//   Task.findAll()
//     .then(tasks => {
//       res.send(tasks);
//     })
//     .catch(err => console.log(err));
// });
//
// router.get("/:id", (req, res) => {
//   Task.findOne({
//     where: {
//       id: `${req.params.id}`,
//       done: 0,
//     },
//   })
//   .then(tasks => {
//     res.send(tasks);
//   })
//   .catch(err => console.log(err));
// });

router.put("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`PUT ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`DELETE ID: ${req.params.id}`);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
});

module.exports = router;
