const {
  createPaymentData,
  getPaymentData,
  updatePaymentData,
  deletePaymentData,
  MarkAsPaidData,
} = require("../database/PaymentData");
const { errors } = require("../helper");

const createPaymentService = async (request) => {
  try {
    const { title, description, dueDate, userId } = request.body;

    const objToSend = {
      title,
      description,
      user_id: userId,
      due_date: dueDate,
    };
    const response = await createPaymentData(objToSend);
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

const getPaymentService = async (request) => {
  try {
    const { userId } = request.params;

    if (!userId) {
      return (errors["004"].reason = "userID are missing!");
    }

    const paymentRecords = await getPaymentData(userId);
    return paymentRecords;
  } catch (error) {
    if (error.code) {
      return error;
    } else {
      errors["003"].reason = error.message;
      return errors["003"];
    }
  }
};

const updatePaymentService = async (request) => {
  try {
    const { title, description, dueDate, paymentId } = request.body;

    const objToSend = {
      title,
      description,
      due_date: dueDate,
    };

    const response = await updatePaymentData(objToSend, paymentId);
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

const deletePaymentService = async (request) => {
  try {
    const { paymentId } = request.params;

    if (!paymentId) {
      return (errors["004"].reason = "payment id are missing!");
    }

    const response = await deletePaymentData(paymentId);
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

const MarkAsPaidService = async (request) => {
  try {
    const { paymentId } = request.body;

    if (!paymentId) {
      return (errors["004"].reason = "payment id are missing!");
    }

    const response = await MarkAsPaidData(paymentId);
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
  createPaymentService,
  getPaymentService,
  updatePaymentService,
  deletePaymentService,
  MarkAsPaidService,
};
