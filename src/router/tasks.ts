import express from "express";
import {createNewTask, deleteTask, getAllTasks, getTask, updateTask, updateTaskState} from "../controllers/tasks";

export default (router: express.Router) => {
    router.post('/tasks/create', createNewTask);
    router.delete('/tasks/:id', deleteTask);
    router.patch('/tasks/:id', updateTaskState);
    router.patch('/tasks/update/:id', updateTask);
    router.get('/tasks', getAllTasks);
    router.get('/task/:id', getTask);
}