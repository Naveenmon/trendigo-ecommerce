const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "live",
  client_id: "",
  client_secret: "",
});

module.exports = paypal;

