const UserModel = require("../Models/UserModel");
const { errors } = require("../helper");

const createUserData = async (userObj) => {
  return new Promise((resolve, reject) => {
    try {
      const updateQuery = {
        is_visible: false,
      };
      UserModel.create(userObj, (err, data) => {
        if (err) {
          errors["001"].reason = err.message || "";
          reject(errors["001"]);
        } else {
          resolve({ message: "user create successfully", success: true, data });
        }
      });
    } catch (error) {
      errors["003"].reason = error.message;
      reject(errors["003"]);
    }
  });
};

const getUserData = async (userId) => {
  return new Promise((resolve, reject) => {
    try {
      const findQuery = {
        user_id: userId,
      };
      UserModel.findOne(findQuery, (err, data) => {
        if (err) {
          errors["002"].reason = err.message || "";
          reject(errors["002"]);
        } else {
          resolve({ message: "user create get", success: true, data });
        }
      });
    } catch (error) {
      errors["003"].reason = error.message;
      reject(errors["003"]);
    }
  });
};

const updateDeviceIdData = async (userId, deviceId) => {
  return new Promise((resolve, reject) => {
    try {
      const findQuery = {
        user_id: userId,
      };
      const updateQuery = {
        device_id: deviceId,
      };
      UserModel.findOneAndUpdate(
        findQuery,
        updateQuery,
        { new: true },
        (err, data) => {
          if (err) {
            errors["005"].reason = err.message || "";
            reject(errors["005"]);
          } else {
            resolve({ message: "device id update", success: true, data });
          }
        }
      );
    } catch (error) {
      errors["003"].reason = error.message;
      reject(errors["003"]);
    }
  });
};

module.exports = { createUserData, getUserData, updateDeviceIdData };
