import express from "express";
import {createTask, deleteTaskById, getTaskById, getTasks} from "../db/tasks";
import {getUserById} from "../db/users";

export const getAllTasks = async (req: express.Request, res: express.Response) => {
    try{
        const tasks = await getTasks();
        return res.status(200).json(tasks);
    } catch (error){
        console.log(error);
        res.sendStatus(400);
    }
}

export const deleteTask = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params;

        const deletedTask = await deleteTaskById(id);

        return res.json(deletedTask);

    } catch (error){
        console.log(error);
        res.sendStatus(400);
    }
}

export const createNewTask = async (req: express.Request, res: express.Response) => {
    try {
        const task = req.body;
        console.log(task);
        const newTask = await createTask(task)
        return res.status(200).json(newTask).end();


    } catch (error){
        console.log(error);
        res.sendStatus(400);
    }
}

export const updateTaskState = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params;
        const { state } = req.body;

        const getTask = await getTaskById(id);

        getTask.state = state;
        await getTask.save();

        return res.status(200).json(getTask).end();
    } catch (error){
        console.log(error)
        return res.sendStatus(400);
    }
}

export const updateTask = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params;
        const { task, description } = req.body;

        console.log(req)

        const getTask = await getTaskById(id);

        getTask.task = task;
        getTask.description = description;
        await getTask.save();

        return res.status(200).json(getTask).end();
    } catch (error){
        console.log(error)
        return res.sendStatus(400);
    }
}

export const getTask = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.params;

        const task = await  getTaskById(id);
        return res.status(200).json(task);
    } catch (error) {
        console.log(error);
    }
}