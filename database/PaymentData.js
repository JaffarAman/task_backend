const { errors } = require("../helper");
const PaymentModel = require("../Models/PaymentModel");

const createPaymentData = async (paymentObj) => {
  return new Promise((resolve, reject) => {
    try {
      PaymentModel.create(paymentObj, (err, data) => {
        if (err) {
          errors["001"].reason = err.message || "";
          reject(errors["001"]);
        } else {
          resolve({
            message: "payment create successfully!",
            data,
            success: true,
          });
        }
      });
    } catch (error) {
      errors["003"].reason = error.message;
      reject(errors["003"]);
    }
  });
};

const getPaymentData = async (userId) => {
  return new Promise((resolve, reject) => {
    try {
      const findQuery = { user_id: userId, is_visible: true };

      PaymentModel.find(findQuery, (error, data) => {
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

const updatePaymentData = async (updateObj, searchId) => {
  return new Promise((resolve, reject) => {
    try {
      PaymentModel.findByIdAndUpdate(
        searchId,
        updateObj,
        { new: true },
        (error, data) => {
          if (error) {
            errors["005"].reason = error.message || "";
            reject(errors["005"]);
          } else {
            resolve({
              message: "successfully update!",
              data,
              success: true,
            });
          }
        }
      );
    } catch (error) {
      errors["003"].reason = error.message;
      reject(errors["003"]);
    }
  });
};

const deletePaymentData = async (paymentId) => {
  return new Promise((resolve, reject) => {
    try {
      const updateQuery = {
        is_visible: false,
      };
      PaymentModel.findByIdAndUpdate(
        paymentId,
        updateQuery,
        { new: true },
        (err, data) => {
          if (err) {
            errors["006"].reason = err.message || "";
            reject(errors["006"]);
          } else {
            resolve({ message: "successfully delete!", success: true });
          }
        }
      );
    } catch (error) {
      errors["003"].reason = error.message;
      reject(errors["003"]);
    }
  });
};

const MarkAsPaidData = async (paymentId) => {
  return new Promise((resolve, reject) => {
    try {
      const updateQuery = {
        paid: true,
      };
      PaymentModel.findByIdAndUpdate(
        paymentId,
        updateQuery,
        { new: true },
        (err, data) => {
          if (err) {
            errors["006"].reason = err.message || "";
            reject(errors["006"]);
          } else {
            resolve({ message: "Mark As Paid!", success: true });
          }
        }
      );
    } catch (error) {
      errors["003"].reason = error.message;
      reject(errors["003"]);
    }
  });
};

module.exports = {
  createPaymentData,
  getPaymentData,
  updatePaymentData,
  deletePaymentData,
  MarkAsPaidData,
};
