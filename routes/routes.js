const { Router } = require('express');

// Controllers import
const ChecklistController = require('../src/controllers/ChecklistController');
const TaskController = require('../src/controllers/TaskController');
const routes = Router()

// routes.get('/test', function(req, res) {
//     return res.json({
//         status: true,
//         message: 'Test OK'
//     })
// })

routes.get('/checklists/', ChecklistController.index);
routes.get('/checklists/:id', ChecklistController.getChecklistById);

routes.get('/tasks/', TaskController.index);
routes.get('/tasks/:id', TaskController.getTaskById);



module.exports = routes