const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tour",
        required: true,
    },
},{
    timestamps: true}
);

module.exports = mongoose.model("Favorite", favoriteSchema)