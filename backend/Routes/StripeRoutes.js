const express = require("express");
const router = new express.Router();
const { verifyToken } = require("../middleware/authToken"); 
const StripeController = require("../Controller/StripeController")

router.post('/create-checkout-session',verifyToken, StripeController.stripePayment);

module.exports = router;