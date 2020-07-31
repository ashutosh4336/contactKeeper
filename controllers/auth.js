// @desc        Get Loggedin User
// @route       GET api/v1/auth/
// @access      Private

exports.getLoggedinUser = async (req, res, next) => {
  res.status(200).json({ msg: 'Get the logged in user' });
};

// @desc        Login User
// @route       POST api/v1/auth/
// @access      Public

exports.loginUser = async (req, res, next) => {
  res.status(200).json({ msg: 'Login the user' });
};
