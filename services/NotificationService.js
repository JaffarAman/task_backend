const PaymentModel = require("../Models/PaymentModel");
const UserModel = require("../Models/UserModel");
const {
  saveNotificationData,
  getNotificationData,
  getNotificationCountData,
  markAllNotificationData,
} = require("../database/NotificationData");
const { messaging } = require("../firebase");
const { errors } = require("../helper");

const notificationService = async (request) => {
  try {
    const allUser = await UserModel.find({});
    allUser.forEach(async (user) => {
      const paymentCount = await PaymentModel.find({
        user_id: user.user_id,
        paid: false,
        is_visible: true,
      }).count();

      if (paymentCount) {
        const message = {
          notification: {
            title: "UNPAID PAYMENT",
            body: `There are ${paymentCount} payments is still UnPaid`,
          },
          token: user.device_id,
        };
        messaging
          .send(message)
          .then(async (response) => {
            const objToSend = {
              ...message,
              user_id: user.user_id,
            };
            await saveNotificationService(objToSend);
          })
          .catch((error) => {
            console.log("Error sending message:", error);
          });
      }
    });
  } catch (error) {
    if (error.code) {
      return error;
    } else {
      errors["003"].reason = error.message;
      return errors["003"];
    }
  }
};

const saveNotificationService = async (obj) => {
  try {
    const response = await saveNotificationData(obj);
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

const getNotificationService = async (request) => {
  try {
    const { userId } = request.params;
    const notificationRecords = await getNotificationData(userId);
    return notificationRecords;
  } catch (error) {
    if (error.code) {
      return error;
    } else {
      errors["003"].reason = error.message;
      return errors["003"];
    }
  }
};

const getNotificationCountService = async (request) => {
  try {
    const { userId } = request.params;
    const notificationCountRecords = await getNotificationCountData(userId);
    return notificationCountRecords;
  } catch (error) {
    if (error.code) {
      return error;
    } else {
      errors["003"].reason = error.message;
      return errors["003"];
    }
  }
};

const markAllNotificationService = async (request) => {
  try {
    const { userId } = request.body;

    const response = await markAllNotificationData(userId);
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

module.exports = {
  notificationService,
  getNotificationService,
  getNotificationCountService,
  markAllNotificationService,
};
