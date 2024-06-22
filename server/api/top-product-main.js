const express = require('express');
const pool = require('../../db'); // Updated path

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const q = "SELECT * FROM products ORDER BY sold_amount DESC LIMIT 11";

        // Using the connection pool to query the database
        pool.query(q, (err, data) => {
            if (err) {
                console.error("Error fetching top products:", err);
                return res.status(500).json({ error: "Internal Server Error" });
            }
            return res.status(200).json(data);
        });

    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = app;