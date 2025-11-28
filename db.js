import mysql from 'mysql2/promise';

// Create connection pool
const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',          // ❌ username → ✔ user
    password : 'radhika123',
    database : 'studentmanagement',
    connectionLimit : 10,
    waitForConnections : true
});

// Function to test connection
async function establishConnection() {
    try {
        const con = await pool.getConnection();
        console.log("Connected to MySQL");
        con.release();
    } catch (err) {
        console.log("Unable to connect with database ", err);
    }
}

establishConnection();

export default pool;
