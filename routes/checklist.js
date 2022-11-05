const express = require("express");
const router = express.Router();
const db = require("../src/config/connection");
const Checklist = require("../src/models/checklist");

// router.get("/", (req, res) => {
//   Checklist.findAll()
//     .then(checklists => {
//       res.send(checklists);
//     })
//     .catch(err => console.log(err));
// });
//
// router.get("/:id", (req, res) => {
//   Checklist.findOne({
//     where: {
//       id: `${req.params.id}`,
//       removed: 0,
//     },
//   })
//   .then(checklists => {
//     // res.sendStatus(200);
//     res.send(checklists);
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
