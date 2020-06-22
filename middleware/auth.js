const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get the token from the header
  const token = req.header("x-auth-token");

  // check if token does not exist
  if (!token) {
    return res
      .status(401)
      .json({ msg: "No token exists, authorization is denied" });
  }

  try {
    // to pull out the payload
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // to have access to user data inside the route
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is invalid" });
  }
};
