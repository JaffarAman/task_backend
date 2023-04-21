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
const { loginTokenController } = require("../controllers/AuthController");
const {
  getNotificationController,
  getNotificationCountController,
  markAllNotificationController,
} = require("../controllers/Notification");
const router = express.Router();
// const paymentRoutes = require("./payment");

// router.use("/payment", paymentRoutes);
// router.use("/user");
// router.use("/notification");

router.post("/api/v1/payment", createPaymentController);
router.get("/api/v1/payment/:userId", getPaymentController);
router.put("/api/v1/payment", updatePaymentController);
router.delete("/api/v1/payment/:paymentId", deletePaymentController);
router.post("/api/v1/payment/markaspaid", MarkAsPaidController);

router.post("/api/v1/user", createUserController);
router.post("/api/v1/loginToken", loginTokenController);
router.get("/api/v1/getuser/:userId", getUserController);
router.post("/api/v1/deviceid", updateDeviceIdController);

router.get("/api/v1/notification/:userId", getNotificationController);
router.get("/api/v1/notificationcount/:userId", getNotificationCountController);
router.post("/api/v1/markallnotification", markAllNotificationController);

module.exports = router;
