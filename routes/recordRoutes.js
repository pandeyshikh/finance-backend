const router = require('express').Router();
const auth = require('../middleware/auth');
const { createRecord, getRecords } = require('../controllers/recordController');

router.use(auth);
router.post('/', createRecord);
router.get('/', getRecords);

module.exports = router;