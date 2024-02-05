import express from "express";
import {createTask, getTasks} from "../db/tasks";

export const getAllTasks = async (req: express.Request, res: express.Response) => {
    try{
        const tasks = await getTasks();

        return res.status(200).json(tasks);
    } catch (error){
        console.log(error);
        res.sendStatus(400);
    }
}

export const createNewTask = async (req: express.Request, res: express.Response) => {
    try {
        const task = req.body;

        const newTask = await createTask(task)

        return res.status(200).json(newTask).end();

    } catch (error){
        console.log(error);
        res.sendStatus(400);
    }
}