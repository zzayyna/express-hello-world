// app/index.cjs
const cors = require('cors');
const express = require('express');
const { Pool } = require('pg');
const path = require('path'); 


// ##### APP SETUP #####
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const app = express();
const port = 3001;
// app.use(cors({
//     origin: [`${process.env.VITE_URL}`],
// })); 
app.use(cors());
app.use(express.json()); 

const pool = new Pool({
    user: process.env.PSQL_USER,
    host: process.env.PSQL_HOST,
    database: process.env.PSQL_DATABASE,
    password: process.env.PSQL_PASSWORD,
    port: process.env.PSQL_PORT,
    ssl: {rejectUnauthorized: false}
});

process.on('SIGINT', function() {
    pool.end();
    console.log('Application successfully shutdown');
    process.exit(0);
});

// ##### API FUNCTIONS #####
app.get('/api/test', async (req, res) => {
    res.json({'message': 'sup'});
});

app.get('/api/getPokedex', async (req, res) => {
    try {
        const query_res = await pool.query('SELECT * FROM Pokedex;');
        res.json(query_res.rows);
    } catch (error) {
        console.error('query error:', error);
        res.status(500).json({ error: 'query error' });
    }
});

app.post('/api/send', async (req, res) => {
    try {
        const { query } = req.body;
        const query_res = await pool.query(query);
        res.json(query_res.rows);
    } catch (error) {
        console.error('send error:', error);
        res.status(500).json({ error: 'send error' });
    }
});

// ##### START #####

// serve frontend build
app.use(express.static(path.join(__dirname, '../dist')));

// catch-all
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// start
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
