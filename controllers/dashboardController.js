const db = require('../config/db');

exports.summary = async (req, res) => {
  const [rows] = await db.query(
    `SELECT 
     SUM(CASE WHEN type='income' THEN amount ELSE 0 END) income,
     SUM(CASE WHEN type='expense' THEN amount ELSE 0 END) expense
     FROM financial_records WHERE user_id=?`,
    [req.user.id]
  );

  res.json(rows[0]);
};