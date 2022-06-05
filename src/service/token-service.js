const constant = require("./../utils/constant");
const jwt = require("jsonwebtoken");
const userDAO = require("../dao/user-dao");

//to authenticate User
async function isAuthenticate(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (token == null) {
      throw new Error("Token not found in request");
    }
    // Verify token with APP_SECRET
    const userDetail = await jwt.verify(token, constant.JWT.SECRET);
    if (userDetail == null) {
      throw customResponse.error(
        constant.HTML_STATUS_CODE.UNAUTHORIZED,
        "Invalid Token"
      );
    }

    // check user data with database if user is valid or not...
    let user;
    user = await userDAO.getById(userDetail._id);
    if (user == null) {
      throw new Error("Invalid Token");
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.name && error.name.indexOf("TokenExpiredError") > -1) {
      res.status(constant.HTML_STATUS_CODE.UNAUTHORIZED).json(error);
    } else {
      res
        .status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR)
        .json(error);
    }
  }
}

module.exports = isAuthenticate;
