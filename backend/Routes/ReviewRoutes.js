const { Router } = require("express");
const { verifyToken } = require("../middleware/authToken"); 
const {verifyRole} = require("../middleware/verfiyRole");

const ReviewController = require("../Controller/ReviewController");
const express = require("express");
const router = express.Router();


router.get('/Reviews',ReviewController.GetAllReview)
router.post('/create/:id',verifyToken ,ReviewController.CreateReview)
router.delete('/delete/:id',verifyToken ,verifyRole, ReviewController.DeleteReview)
module.exports = router;