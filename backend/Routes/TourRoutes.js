const { Router } = require("express");
const { verifyToken } = require("../middleware/authToken"); 
const {verifyRole} = require("../middleware/verfiyRole");
const TourController = require("../Controller/TourController");
const express = require("express");
const router = express.Router();
const upload = require('../middleware/Upload');

router.get('/tours',TourController.GetAllTour)
router.get('/tour/:id',TourController.GetTour)
router.post('/create',verifyToken,verifyRole, upload.single('photo'),TourController.CreateTour)
router.delete('/delete/:id',verifyToken,verifyRole,TourController.DeleteTour)
router.put('/update/:id',verifyToken,verifyRole,upload.single('photo'),TourController.UpdateTour)
router.get('/search',TourController.SearchTour)
module.exports = router;