import pool from "./db.js";

// Function to fetch students list
export async function fetchStudentsList(req, res) {
  try {
    const [result] = await pool.query("SELECT * FROM student");
    res.json(result);
  } catch (err) {
    console.log("Unable to fetch data ", err);
    res.status(500).json({ error: "Database Error" });
  }
}

//Function to insert student
export async function insertStudent(req, res) {
  try {
    const { name, age, grade } = req.body;

    const [result] = await pool.query(
      "INSERT INTO student (name, age, grade) VALUES (?, ?, ?)",
      [name, age, grade]
    );

    res.json({
      message: "Student inserted successfully",
      insertedId: result.insertId,
    });
  } catch (err) {
    console.log("Unable to insert data", err);
    res.status(500).json({ error: "Database Insert Error" });
  }
}

//function to update the student's data
export async function updateStudent(req, res) {
  try {
    const { id } = req.params;
    const { name, age, grade } = req.body;

    const [result] = await pool.query(
      "UPDATE student SET name=?, age=?, grade=? WHERE id=?",
      [name, age, grade, id]
    );

    res.json({
      message: "Student updated successfully",
      affectedRows: result.affectedRows,
    });
  } catch (err) {
    console.log("Unable to update data", err);
    res.status(500).json({ error: "Database Update Error" });
  }
}

// function to delete student's data
export async function deleteStudent(req, res) {
  try {
    const { id } = req.params;

    const [result] = await pool.query("DELETE FROM student WHERE id=?", [id]);

    res.json({
      message: "Student deleted successfully",
      affectedRows: result.affectedRows,
    });
  } catch (res) {
    console.log("unable to delete the student data properly");
    res.status(500).json({ error: "Database Update Error" });
  }
}
