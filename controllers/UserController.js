const { responseJsonHandler } = require("../helper");
const {
  createUserService,
  getUserService,
  updateDeviceIdService,
} = require("../services/UserService");

const createUserController = async (request, response) => {
  const data = await createUserService(request);
  if (data.code) {
    responseJsonHandler(data, null, response);
  } else {
    responseJsonHandler(null, data, response);
  }
};

const getUserController = async (request, response) => {
  const data = await getUserService(request);
  if (data.code) {
    responseJsonHandler(data, null, response);
  } else {
    responseJsonHandler(null, data, response);
  }
};

const updateDeviceIdController = async (request, response) => {
  const data = await updateDeviceIdService(request);
  if (data.code) {
    responseJsonHandler(data, null, response);
  } else {
    responseJsonHandler(null, data, response);
  }
};

module.exports = {
  createUserController,
  getUserController,
  updateDeviceIdController,
};
