const express = require('express');
const router = express.Router();
const { createRecord, getRecords } = require('../controllers/recordController');
const authMiddleware = require('../middleware/auth'); // ✅ matches file name

router.post('/', authMiddleware('Admin'), createRecord);
router.get('/', authMiddleware(), getRecords);

module.exports = router;
