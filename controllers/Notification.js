const { responseJsonHandler } = require("../helper");
const {
  getNotificationService,
  getNotificationCountService,
  markAllNotificationService,
} = require("../services/NotificationService");

const getNotificationController = async (request, response) => {
  const data = await getNotificationService(request);
  if (data.code) {
    responseJsonHandler(data, null, response);
  } else {
    responseJsonHandler(null, data, response);
  }
};

const getNotificationCountController = async (request, response) => {
  const data = await getNotificationCountService(request);
  if (data.code) {
    responseJsonHandler(data, null, response);
  } else {
    responseJsonHandler(null, data, response);
  }
};

const markAllNotificationController = async (request, response) => {
  const data = await markAllNotificationService(request);
  if (data.code) {
    responseJsonHandler(data, null, response);
  } else {
    responseJsonHandler(null, data, response);
  }
};

module.exports = {
  getNotificationController,
  getNotificationCountController,
  markAllNotificationController,
};
