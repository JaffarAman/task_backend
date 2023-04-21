const {
  createUserData,
  getUserData,
  updateDeviceIdData,
} = require("../database/UserData");
const { errors } = require("../helper");
const jwt = require("jsonwebtoken");
const createUserService = async (request) => {
  try {
    const { firstName, lastName, userId, deviceId, email } = request.body;
    const objToSend = {
      first_name: firstName,
      last_name: lastName,
      user_id: userId,
      device_id: deviceId,
      email,
    };
    const response = await createUserData(objToSend);
    return response;
  } catch (error) {
    if (error.code) {
      return error;
    } else {
      errors["003"].reason = error.message;
      return errors["003"];
    }
  }
};

const getUserService = async (request) => {
  try {
    const { userId } = request.params;
    if (!userId) {
      return errors["004"];
    }
    const response = await getUserData(userId);
    const token = jwt.sign(
      { userId: response.data.user_id },
      process.env.JWT_SECRET
    );

    return { ...response, token };
  } catch (error) {
    if (error.code) {
      return error;
    } else {
      errors["003"].reason = error.message;
      return errors["003"];
    }
  }
};

const updateDeviceIdService = async (request) => {
  try {
    const { userId, deviceId } = request.body;
    if (!userId || !deviceId) {
      return errors["004"];
    }

    const response = await updateDeviceIdData(userId, deviceId);
    return response;
  } catch (error) {
    if (error.code) {
      return error;
    } else {
      errors["003"].reason = error.message;
      return errors["003"];
    }
  }
};

module.exports = { createUserService, getUserService, updateDeviceIdService };
