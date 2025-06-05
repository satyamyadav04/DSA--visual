// const mongoose = require("mongoose");
import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://satyam87yadav:%40Satyam7255@visualize.s9on4ty.mongodb.net/demo?retryWrites=true&w=majority&appName=visualize");

    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};

mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb");
});
mongoose.connection.on("dissconnected", () => {
  console.log("mongo db is disconnected");
});

export default connect;