// @desc        Register a User
// @route       POST api/v1/auth/register
// @access      Public

exports.registerUser = async (req, res, next) => {
  res.status(201).json({ msg: 'Register User' });
};
