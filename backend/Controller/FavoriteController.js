const Favorite = require("../Models/Favorite");

const FavoriteController = {};

// Create a new favorite
FavoriteController.createFavorite = async (req, res) => {
    try {
    
      
        const tourId= req.params.tourId;
        const userId=req.user.userId
        
        const favorite = await Favorite.findOne({ userId, tourId });
        if (favorite) {
            return res.status(400).json({ message: "Favorite already exists" });
        }
        const newFavorite = await Favorite.create({ userId, tourId });
        console.log(newFavorite);
        res.status(201).json({ newFavorite, message: "Favorite created successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all favorites for a user
FavoriteController.getFavorites = async (req, res) => {
    try {
        const userId=req.user.userId
        const favorites = await Favorite.find({userId}).populate("tourId");
        
        res.json(favorites);
    } catch (error) {   
        res.status(500).json({ message: error.message });
    }
};

// Delete a favorite
FavoriteController.deleteFavorite = async (req, res) => {
    try {
        const tourId= req.params.tourId;
        const userId=req.user.userId
        const deletedFavorite = await Favorite.findOneAndDelete({ userId, tourId });
        res.json({ deletedFavorite, message: "Favorite deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = FavoriteController