import express from "express";
import db from "../db.js";

const router = express.Router();

// GET all notes
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM notes");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE a note
router.post("/", async (req, res) => {
  const { title, content } = req.body;
  try {
    await db.query("INSERT INTO notes (title, content) VALUES (?, ?)", [
      title,
      content,
    ]);
    res.json({ message: "Note created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE a note
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    await db.query(
      "UPDATE notes SET title = ?, content = ? WHERE id = ?",
      [title, content, id]
    );
    res.json({ message: "Note updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a note
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await db.query("DELETE FROM notes WHERE id = ?", [id]);
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
