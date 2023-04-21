const express = require("express");
const {
  createPaymentController,
  getPaymentController,
  updatePaymentController,
  deletePaymentController,
  MarkAsPaidController,
} = require("../controllers/PaymentController");
const {
  createUserController,
  getUserController,
  updateDeviceIdController,
} = require("../controllers/UserController");
// const { loginTokenController } = require("../controllers/AuthController");
const {
  getNotificationController,
  getNotificationCountController,
  markAllNotificationController,
} = require("../controllers/Notification");
const authenticate = require("../middleware/authenticate");
const router = express.Router();

//payments route
router.post("/api/v1/payment", authenticate, createPaymentController);
router.get("/api/v1/payment/:userId", authenticate, getPaymentController);
router.put("/api/v1/payment", authenticate, updatePaymentController);
router.delete(
  "/api/v1/payment/:paymentId",
  authenticate,
  deletePaymentController
);
router.post("/api/v1/payment/markaspaid", authenticate, MarkAsPaidController);

// user routes
router.post("/api/v1/user", createUserController);
// router.post("/api/v1/loginToken", loginTokenController);
router.get("/api/v1/getuser/:userId", getUserController);
router.post("/api/v1/deviceid", updateDeviceIdController);

// Notification routes
router.get(
  "/api/v1/notification/:userId",
  authenticate,
  getNotificationController
);
router.get(
  "/api/v1/notificationcount/:userId",
  authenticate,
  getNotificationCountController
);
router.post(
  "/api/v1/markallnotification",
  authenticate,
  markAllNotificationController
);

module.exports = router;
