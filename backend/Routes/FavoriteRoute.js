const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authToken"); 
// Import the FavoriteController
const FavoriteController = require("../Controller/FavoriteController");

// Define the routes
router.get("/", verifyToken,FavoriteController.getFavorites);
router.post("/:tourId",verifyToken ,FavoriteController.createFavorite);
router.delete("/:tourId",verifyToken ,FavoriteController.deleteFavorite);

// Export the router
module.exports = router;