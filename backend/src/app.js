import express from "express";
import { createServer } from "node:http";
import { connectToServer } from "./controllers/socketManager.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app = express();
const httpServer = createServer(app);
const io = connectToServer(httpServer);

app.set("port", process.env.PORT || 3000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));


app.get("/", (req, res) => {
  res.send("Welcome to the Zoom Clone Backend!");
});

const start = async () => {
  try {
    const connectionDB = await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/zoom-clone"
    );
    console.log("Connected to MongoDB:", connectionDB.connection.name);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }

  httpServer.listen(app.get("port"), () => {
    console.log("Server is running on port 3000");
  });
};

start().catch((err) => {
  console.error("Error starting the server:", err);
});
