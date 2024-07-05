const { Router } = require("express");
const { verifyToken } = require("../middleware/authToken"); 
const {verifyRole} = require("../middleware/verfiyRole");

const ReviewController = require("../Controller/BookingController");
const express = require("express");
const router = express.Router();


router.get('/Booking/:id',verifyToken,ReviewController.GetBooking)
router.post('/create/:id',verifyToken ,ReviewController.CreateBooking)
module.exports = router;