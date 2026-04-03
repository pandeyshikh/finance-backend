// controllers/recordController.js
const db = require('../config/db');

exports.createRecord = async (req, res) => {
  const { amount, type, category, date, notes } = req.body;
  try {
    await db.query(
      'INSERT INTO records (amount, type, category, date, notes, created_by) VALUES (?, ?, ?, ?, ?, ?)',
      [amount, type, category, date, notes, req.user.id]
    );
    res.json({ message: 'Record added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM records');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
};
