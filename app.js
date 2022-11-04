require("./src/config/connection");
require("./src/models/task");
const express = require("express");
const checklistsRouter = require("./routes/checklist");
const taskRouter = require("./routes/task");
const app = express();

app.use(express.json());
app.use("/checklists", checklistsRouter);
app.use(express.json());
app.use("/tasks", taskRouter);

app.listen(3000, () => {
  console.log("The server has started!");
});
