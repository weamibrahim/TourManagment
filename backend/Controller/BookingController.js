const  Booking = require('../Models/Booking')

const BookingController ={}

BookingController.CreateBooking = async (req, res, next) => {
    try {
        const tourId = req.params.id
        const userId=req.user.userId
        const {name, GroupSize, phone,DateOfTour,price,nameOfTour} = req.body
        console.log(req.body)
        const booking = await new Booking({ userID: userId ,
            tourID: tourId,
            GroupSize,
            phone
            ,DateOfTour,
            name,
            price,
            nameOfTour,
            

        }).save()
        console.log("booking",booking)
        res.status(200).json({ booking })
    } catch (err) {
        next(err)
    }
}

BookingController.GetBooking = async (req, res, next) => {
    try {
        const id= req.params.id
        const booking = await Booking.findById(id).populate('tourID').populate('userID')
        console.log(booking)
        res.status(200).json({ booking })
    } catch (err) {
        next(err)
    }
}   


module.exports = BookingController