// @desc        Get all Contacts
// @route       GET api/v1/contact/
// @access      Private

exports.getAllContacts = async (req, res, next) => {
  res.status(200).json({ msg: 'Get all Contacts' });
};

// @desc        Create a Contact
// @route       POST api/v1/contact/
// @access      Private

exports.createContact = async (req, res, next) => {
  res.status(201).json({ msg: 'Contact Created' });
};

// @desc        Update a Contact
// @route       PUT api/v1/contact/:id
// @access      Private

exports.updateContact = async (req, res, next) => {
  res.status(200).json({ msg: 'Contact Updated' });
};

// @desc        Delete a Contact
// @route       DELETE api/v1/contact/:id
// @access      Private

exports.deleteContact = async (req, res, next) => {
  res.status(200).json({ msg: 'Contact Deleted' });
};
