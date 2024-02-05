import express from "express";
import {createNewTask, getAllTasks} from "../controllers/tasks";

export default (router: express.Router) => {
    router.post('/tasks/create', createNewTask);
    router.get('/tasks', getAllTasks);
}