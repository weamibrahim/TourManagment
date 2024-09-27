const Booking = require('../Models/Booking')
const Tour = require('../Models/Tour')

const BookingController = {}

BookingController.CreateBooking = async (data) => {
    try {
       console.log("data of booking ",data)
        const booking = await Booking.create(data)
            
        console.log("booking", booking)
      
    } catch (err) {
        console.log(err)
    }
}

// get booking
BookingController.GetBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find().populate('tourID').populate('userID')
        console.log(bookings)
        res.status(200).json({ bookings })
    } catch (err) {
        next(err)
    }
}
// get booking by user ID 
BookingController.GetBookingByUserID = async (req, res, next) => {
    try {
        const id = req.params.id
        const booking = await Booking.find({ userID: id }).populate('tourID').populate('userID')
        console.log(booking)
        res.status(200).json({ booking })
    } catch (err) {
        next(err)
    }
}
BookingController.GetBooking = async (req, res, next) => {
    try {
        const id = req.params.id
        const booking = await Booking.findById(id).populate('tourID').populate('userID')
        console.log(booking)
        res.status(200).json({ booking })
    } catch (err) {
        next(err)
    }
}
BookingController.DeleteBooking = async (req, res, next) => {
    try {
        const id = req.params.id
        const booking = await Booking.findByIdAndDelete(id)
        console.log(booking)
        res.status(200).json({ booking })
    } catch (err) {
        next(err)
    }
}

// get booking per month
BookingController.GetBookingPerMonth = async (req, res, next) => {

    try {
        const booking = await Booking.aggregate(
            [
                {
                    $group:
                    {
                        _id: {
                            month: { $month: "$DateOfTour" },
                            year: { $year: "$DateOfTour" }

                        }, count: { $sum: 1 }
                    }
                }
                , {
                    $sort: { _id: 1 }
                }
            ])
        console.log(booking)
        res.status(200).json({ booking })

    } catch (err) {
        next(err)
    }
}
// get number of cities which booked
BookingController.GetNumOfCities = async (req, res, next) => {
    try {
        const booking = await Booking.aggregate(
            [
                { $lookup: 
                { from: "tours", localField: "tourID", foreignField: "_id", as: "tour" }
               },
                {
                   $unwind: '$tour'
                },
               { $group:
                 { _id:
                    { name:"$tour.city",
                      month: { $month: "$DateOfTour" },
                       year: { $year: "$DateOfTour" }}, 
                       count: { $sum: 1 } } 
                } , 
                 {
                $sort: { count: -1 }
                 }
            ]
        )
    console.log(booking)
    res.status(200).json({ booking })


} catch (err) {
    next(err)
}

}
// get tour average ratings
BookingController.GetTourRatings = async (req, res, next) => {

    try {
        const booking = await Tour.aggregate(
            [
               {
                   $lookup: { from: "reviews", localField: "reviews", foreignField: "_id", as: "reviews" }
                },
                {
                   $unwind: '$reviews'},

                   {$group: { _id: { name:"$city",
                    month: { $month: "$reviews.createdAt" },

                    
                     year: { $year: "$reviews.createdAt" }}
                    
                    
                    ,average: { $avg: "$reviews.Rating" }} },
                   {$sort: {average: -1}}

                   
            ]
        )
    console.log(booking)
    res.status(200).json({ booking })


} catch (err) {
    next(err)
}




}
// get revenue per month

BookingController.GetRevenuePerMonth = async (req, res, next) => {
    try {
        
        const booking = await Booking.aggregate(
            [
                {
                    $group:
                    {
                        _id: {
                            month: { $month: "$DateOfTour" },
                            year: { $year: "$DateOfTour" }
                        }, totalPrice: { $sum: { $multiply: ["$price", "$GroupSize"] } } 
                    }
                }
                , {
                    $sort: { _id: 1 }
                }
            ])
        console.log(booking)
        res.status(200).json({ booking })
    }
    catch(err) {
        next(err)
    }

}
// get mix group size per tour
BookingController.GetMixGroupSizePerTour = async (req, res, next) => {
    try {
        const result = await Booking.aggregate([
            {
                $group: {
                    _id: "$nameOfTour", 
                    maxGroupSize: { $max: "$GroupSize" },
                   
                }

            },
            
            {
                $sort: { maxGroupSize: -1 }}
        ]);

        console.log(result);

        res.status(200).json({ result });
    } catch (err) {
        next(err);
    }
};

module.exports = BookingController