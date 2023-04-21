const {
  createPaymentController,
  getPaymentController,
  updatePaymentController,
  deletePaymentController,
} = require("../controllers/PaymentController");

const router = require("express").Router();

router.post("/", createPaymentController);
router.get("/:userId", getPaymentController);
router.put("/", updatePaymentController);
router.delete("/:paymentId", deletePaymentController);

module.exports = router;
