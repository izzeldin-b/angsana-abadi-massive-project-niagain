const mysql = require("mysql");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "ecommerce",
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
        // Release the connection back to the pool after the initial check
        connection.release();
    }
});

module.exports = pool;