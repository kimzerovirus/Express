const pool = require('./index.js');

exports.selectAll = async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM test';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
        console.log(rows)
    } catch (error) {
        res.status(400).send(error.message)
    }
}