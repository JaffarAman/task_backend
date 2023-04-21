const { errors } = require("../helper");
const jwt = require("jsonwebtoken");

const loginTokenService = async (request) => {
  try {
    const { userId } = request.body;
    const token = jwt.sign(userId, "MYPRIVATEKEY");
    const response = {
      token,
      status: true,
    };

    return response;
  } catch (error) {
    errors["003"].reason = error.message;
    return errors["003"];
  }
};

module.exports = {
  loginTokenService,
};
