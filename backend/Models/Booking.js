const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
     
    },
    tourID:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Tour'
     
    },
    GroupSize:{
        type:Number,
        required:true,
    },
    phone:{
        type:Number,
        required:true,  
    }
    ,price:{
        type:Number,
        required:true, 
    }
    
    ,
    DateOfTour:{
        type:Date,
        required:true,
    },
    nameOfTour:{
        type:String,
        required:true

    }
},
   
    {timestamps: true},

)
const Booking = mongoose.model('Booking', BookingSchema );

module.exports = Booking;