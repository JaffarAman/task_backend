const { responseJsonHandler } = require("../helper");
const {
  loginTokenService,
  getUserService,
} = require("../services/AuthService");

const loginTokenController = async (request, response) => {
  const data = await loginTokenService(request);
  if (data.code) {
    responseJsonHandler(data, null, response);
  } else {
    responseJsonHandler(null, data, response);
  }
};

module.exports = {
  loginTokenController,
};
