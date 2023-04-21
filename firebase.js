//firebase initialize
const fs = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
fs.initializeApp({
  credential: fs.credential.cert(serviceAccount),
});

const firestore = fs.firestore();
const messaging = fs.messaging();

module.exports = {
  firestore,
  messaging,
};
