const { Router } = require("express");
const { verifyToken } = require("../middleware/authToken"); 
const {verifyRole} = require("../middleware/verfiyRole");

const BookingController = require("../Controller/BookingController");
const express = require("express");
const router = express.Router();


router.get('/Booking/:id',verifyToken,BookingController.GetBooking)
router.post('/create/:id',verifyToken ,BookingController.CreateBooking)
router.get('/all-bookings',verifyToken,verifyRole, BookingController.GetBookings)
router.delete('/delete/:id',verifyToken,verifyRole, BookingController.DeleteBooking)
router.get('/bookings-per-month', verifyToken,verifyRole, BookingController.GetBookingPerMonth);
router.get('/num-of-cities',verifyToken,verifyRole, BookingController.GetNumOfCities);
router.get('/tour-ratings',verifyToken,verifyRole, BookingController.GetTourRatings);
router.get('/revenue-per-month',verifyToken,verifyRole, BookingController.GetRevenuePerMonth);
router.get('/max-group-size-per-tour',verifyToken,verifyRole, BookingController.GetMixGroupSizePerTour);
module.exports = router;