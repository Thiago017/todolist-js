const routes = require('./routes/routes')
const express = require("express");
const app = express();

app.use(express.json());
// app.use("/checklists", checklistsRouter);
app.use(express.json());
// app.use("/tasks", taskRouter);

app.listen(3000, () => {
  console.log("The server has started!");
});

app.use(routes);