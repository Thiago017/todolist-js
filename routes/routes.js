const { Router } = require('express');

// Controllers import
const ChecklistController = require('../src/controllers/ChecklistController');
const TaskController = require('../src/controllers/TaskController');
const PageController = require('../src/controllers/PageController');
const routes = Router()

//Checklist

//FORMS
routes.get('/checklists/new', ChecklistController.createChecklistForm); //Get create form
routes.get('/checklists/:id/edit', ChecklistController.updateChecklistForm); //Get edit form

//GET
routes.get('/checklists/', ChecklistController.index); //Get all checklists.
routes.get('/checklists/:id', ChecklistController.getChecklistById); //Get a specific checklist.

//PUT
routes.put('/checklists/:id/update', ChecklistController.updateChecklistById); //Update the checklist.
routes.put('/checklists/:id/remove', ChecklistController.removeChecklistById); //Remove the checklist.

//DELETE
routes.delete('/checklists/:id', ChecklistController.deleteChecklistById); //Remove the checklist.

//POST
routes.post('/checklists/', ChecklistController.createChecklist); //Remove the checklist.

//<--------------->

//Tasks
routes.get('/tasks/', TaskController.index); //Get all tasks.
routes.get('/tasks/:id', TaskController.getTaskById); //Get a specific task.
routes.put('/tasks/:id', TaskController.updateTaskById); //Update the task.
routes.put('/tasks/:id/complete', TaskController.completeTaskById); //Remove the task.
routes.delete('/tasks/:id', TaskController.deleteTaskById); //Remove the task.
routes.post('/tasks/', TaskController.createTask); //Remove the task.

//Pages
routes.get('/', PageController.index); //Test.


module.exports = routes
