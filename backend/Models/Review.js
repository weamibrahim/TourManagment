const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({

    userID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
     
    },
    ReviewText:{
        type:String,
        required:true,
    },
 
    Rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    }},
    {timestamps: true},

)
const Review = mongoose.model('Review', ReviewSchema );

module.exports = Review;