const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "radhika123", 
  database: "movie_db",
});

db.connect((err) => {
  if (err) {
    console.error("!!! DATABASE CONNECTION FAILED:", err.message);
  } else {
    console.log("--- SUCCESS: Connected to MySQL ---");
  }
});

app.post("/api/book", (req, res) => {
  const { name, movie_type, hall, time_slot, seat_class } = req.body;
  
  // LOGGING TO HELP YOU DEBUG
  console.log("Attempting to save:", req.body);

  const sql = "INSERT INTO bookings (name, movie_type, hall, time_slot, seat_class) VALUES (?, ?, ?, ?, ?)";
  
  db.query(sql, [name, movie_type, hall, time_slot, seat_class], (err, result) => {
    if (err) {
      console.error("!!! MYSQL INSERT ERROR:", err.sqlMessage); // This tells us WHY it fails
      return res.status(500).json({ success: false, error: err.sqlMessage });
    }
    console.log("--- SUCCESS: Saved to Database ---");
    res.status(200).json({ success: true });
  });
});

app.listen(5000, () => console.log("Backend running on port 5000"));