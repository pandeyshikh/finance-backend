const db = require('../config/db');

exports.createRecord = async (req, res) => {
  const { amount, type, category, date, notes } = req.body;

  await db.query(
    'INSERT INTO financial_records (amount,type,category,date,notes,user_id) VALUES (?,?,?,?,?,?)',
    [amount, type, category, date, notes, req.user.id]
  );

  res.json({ message: 'Created' });
};

exports.getRecords = async (req, res) => {
  const [rows] = await db.query(
    'SELECT * FROM financial_records WHERE user_id=?',
    [req.user.id]
  );
  res.json(rows);
};