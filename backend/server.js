require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: '@#albert5',
    port: process.env.PGPORT,
});

// Middleware to parse JSON
app.use(express.json());

// POST route to add drugshop data
app.post('/api/drugshops', async (req, res) => {
    const {
        serialNumber,
        nameDrugshop,
        physicalAddress,
        fulltimeIncharge,
        qualification,
        district,
    } = req.body;

    try {
        // Insert into your table with the matching fields
        const result = await pool.query(
            `INSERT INTO drugshops (S_N, NAME_DRUGSHOP, PHYSICAL_ADDRESS, FULLTIME_INCHARGE, QUALIFICATION, DISTRICT)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [serialNumber, nameDrugshop, physicalAddress, fulltimeIncharge, qualification, district]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Listen on a port
app.listen(5454, () => {
    console.log('Server running on http://localhost:5454');
});
