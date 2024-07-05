const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        unique:true
    },
    city:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    distance:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:true,
    },

    desc:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    maxGroupSize:{
        type:Number,
        required:true,
    },
    reviews:[
        {
             type: mongoose.Schema.Types.ObjectId,
            required:false,
            ref: 'Review'}
    ]},
    {timestamps: true},

)
const Tour = mongoose.model('Tour', TourSchema );

module.exports = Tour;