import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://joelstan:jvsk2001@cluster0.9sx7spc.mongodb.net/todo-app');
    console.log("DB connected")
}