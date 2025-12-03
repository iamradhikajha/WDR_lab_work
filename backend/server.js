import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesRouter from "./routes/notes.js";
import db from "./db.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/notes", notesRouter);

// Basic test route
app.get("/test", (req, res) => {
  res.send("Backend working!");
});

// Extra test
app.get("/add", (req, res) => {
  res.send("Added in the test2");
});

// Start Server
app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});


