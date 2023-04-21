const { responseJsonHandler } = require("../helper");
const {
  createPaymentService,
  getPaymentService,
  updatePaymentService,
  deletePaymentService,
  MarkAsPaidService,
} = require("../services/PaymentService");

const createPaymentController = async (request, response) => {
  const data = await createPaymentService(request);
  if (data.code) {
    responseJsonHandler(data, null, response);
  } else {
    responseJsonHandler(null, data, response);
  }
};

const getPaymentController = async (request, response) => {
  const data = await getPaymentService(request);
  if (data.code) {
    responseJsonHandler(data, null, response);
  } else {
    responseJsonHandler(null, data, response);
  }
};
const updatePaymentController = async (request, response) => {
  const data = await updatePaymentService(request);
  if (data.code) {
    responseJsonHandler(data, null, response);
  } else {
    responseJsonHandler(null, data, response);
  }
};
const deletePaymentController = async (request, response) => {
  const data = await deletePaymentService(request);
  if (data.code) {
    responseJsonHandler(data, null, response);
  } else {
    responseJsonHandler(null, data, response);
  }
};

const MarkAsPaidController = async (request, response) => {
  const data = await MarkAsPaidService(request);
  if (data.code) {
    responseJsonHandler(data, null, response);
  } else {
    responseJsonHandler(null, data, response);
  }
};

module.exports = {
  createPaymentController,
  getPaymentController,
  updatePaymentController,
  deletePaymentController,
  MarkAsPaidController,
};
