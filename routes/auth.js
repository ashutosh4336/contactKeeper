const express = require('express');
const router = express.Router();

const { getLoggedinUser, loginUser } = require('../controllers/auth');

router.get('/', getLoggedinUser);
router.post('/', loginUser);

module.exports = router;
