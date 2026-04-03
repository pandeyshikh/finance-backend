const db = require('../config/db');

exports.getSummary = async (req, res) => {
  try {
    const [income] = await db.query("SELECT SUM(amount) AS totalIncome FROM records WHERE type='Income'");
    const [expense] = await db.query("SELECT SUM(amount) AS totalExpense FROM records WHERE type='Expense'");

    const totalIncome = income[0].totalIncome || 0;
    const totalExpense = expense[0].totalExpense || 0;
    const netBalance = totalIncome - totalExpense;

    res.json({ totalIncome, totalExpense, netBalance });
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
};
