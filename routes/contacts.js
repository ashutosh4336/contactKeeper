const express = require('express');
const router = express.Router();

const {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
} = require('../controllers/contacts');

router.route('/').get(getAllContacts).post(createContact);
router.route('/:id').put(updateContact).delete(deleteContact);

module.exports = router;
