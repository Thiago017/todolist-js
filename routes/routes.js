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

//Checklist
routes.get('/checklists/', ChecklistController.index); //Get all checklists.
routes.get('/checklists/:id', ChecklistController.getChecklistById); //Get a specific checklist.
routes.put('/checklists/:id', ChecklistController.updateChecklistById); //Update the checklist.
routes.put('/checklists/:id/remove', ChecklistController.removeChecklistById); //Remove the checklist.
routes.delete('/checklists/:id', ChecklistController.deleteChecklistById); //Remove the checklist.
routes.post('/checklists/', ChecklistController.createChecklist); //Remove the checklist.

//Tasks
routes.get('/tasks/', TaskController.index); //Get all checklists.
routes.get('/tasks/:id', TaskController.getTaskById); //Get a specific checklist.
routes.put('/tasks/:id', TaskController.updateTaskById); //Update the checklist.
routes.put('/tasks/:id/complete', TaskController.completeTaskById); //Remove the checklist.
routes.delete('/tasks/:id', TaskController.deleteTaskById); //Remove the checklist.
routes.post('/tasks/', TaskController.createTask); //Remove the checklist.


module.exports = routes
