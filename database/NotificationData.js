const NotificationModel = require("../Models/NotificationModel");
const { errors } = require("../helper");

const saveNotificationData = async (notifcationObj) => {
  return new Promise((resolve, reject) => {
    try {
      NotificationModel.create(notifcationObj, (err, data) => {
        if (err) {
          errors["001"].reason = err.message || "";
          reject(errors["001"]);
        } else {
          resolve({ message: "notification create", success: true, data });
        }
      });
    } catch (error) {
      errors["003"].reason = error.message;
      reject(errors["003"]);
    }
  });
};
const getNotificationData = async (userId) => {
  return new Promise((resolve, reject) => {
    try {
      const findQuery = { user_id: userId };

      NotificationModel.find(findQuery, (error, data) => {
        if (error) {
          errors["002"].reason = error.message || "";
          reject(errors["002"]);
        } else {
          resolve({ data, success: true });
        }
      }).sort({ created_on: "desc" });
    } catch (error) {
      errors["003"].reason = error.message;
      reject(errors["003"]);
    }
  });
};

const getNotificationCountData = async (userId) => {
  return new Promise((resolve, reject) => {
    try {
      const findQuery = { user_id: userId, is_seen: false };

      NotificationModel.count(findQuery, (error, data) => {
        if (error) {
          errors["002"].reason = error.message || "";
          reject(errors["002"]);
        } else {
          resolve({ data, success: true });
        }
      });
    } catch (error) {
      errors["003"].reason = error.message;
      reject(errors["003"]);
    }
  });
};

const markAllNotificationData = async (userId) => {
  return new Promise((resolve, reject) => {
    try {
      const findQuery = { user_id: userId, is_seen: false };
      const updateQuery = { is_seen: true };

      NotificationModel.updateMany(findQuery, updateQuery, (error, data) => {
        if (error) {
          errors["005"].reason = error.message || "";
          reject(errors["005"]);
        } else {
          resolve({ data, success: true });
        }
      });
    } catch (error) {
      errors["003"].reason = error.message;
      reject(errors["003"]);
    }
  });
};

module.exports = {
  saveNotificationData,
  getNotificationData,
  getNotificationCountData,
  markAllNotificationData,
};
