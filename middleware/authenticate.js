const jwt = require("jsonwebtoken");
const { responseJsonHandler, errors } = require("../helper");
const UserModel = require("../Models/UserModel");

const authenticate = async (request, response, next) => {
  try {
    const token = request.headers.authorization?.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
      request.body._decoded = decoded;
      if (!err) {
        const user = await UserModel.findOne({
          user_id: decoded.userId,
        });
        if (user) {
          next();
        } else {
          responseJsonHandler(errors["008"], null, response);
        }
      } else {
        responseJsonHandler(errors["008"], null, response);
      }
    });
  } catch (error) {
    errors["008"].reason = error.message || "";
    responseJsonHandler(error, null, response);
  }
};

module.exports = authenticate;
