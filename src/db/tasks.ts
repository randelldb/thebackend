import mongoose from "mongoose";

// Define database schema
const TaskSchema = new mongoose.Schema({
    task: {type: String, required: true}
})

// Instantiate TaskModel
export const TaskModel = mongoose.model('Task', TaskSchema)

export const getTasks = () => TaskModel.find();
export const getTaskById = (id: string) => TaskModel.findById(id);
export const updateTaskById = (id: string) => TaskModel.findByIdAndUpdate(id);
export const createTask = (values: Record<string, any>) => new TaskModel(values)
    .save().then((task) => task.toObject());
export const deleteTaskById = (id: string) =>
    TaskModel.findByIdAndDelete({_id: id});
