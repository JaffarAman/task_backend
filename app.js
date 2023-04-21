require("dotenv").config();
const express = require("express");
var cron = require("node-cron");
const config = require("./config");
const router = require("./routes");
const app = express();
const PORT = config.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const { DB_URI } = require("./config");
const { notificationService } = require("./services/NotificationService");

///body allow///
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const dbObj = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
mongoose
  .connect(DB_URI, dbObj)
  .then((res) => {
    console.log("mongoDb connected");
  })
  .catch((err) => console.log(err, "error"));

// cron job run every hours  1,2,3,4.... 12,...24
// 0 * * * *
// "*/10 * * * * *", //run every 10 sec
cron
  .schedule(
    "0 * * * *",
    () => {
      notificationService();
    },
    {
      scheduled: false,
    }
  )
  .start();

app.use(router);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// Development error handler
// Will print stacktrace
if (app.get("env") === "development") {
  app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    res.send({
      message: error.message,
      error: error,
    });
  });
}

// Production error handler
// No stacktraces leaked to user
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.send({
    message: error.message,
    error: error,
  });
});

app.listen(PORT, () => console.log(`Server is Running on localhost:${PORT}`));
