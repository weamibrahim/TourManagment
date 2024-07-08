const Tour = require('../Models/Tour')


const TourController ={}

TourController.GetAllTour= async (req, res, next) => {

try{
    const page = parseInt(req.query.page) || 1;
    const limit = 6
    const startIndex = (page - 1) * limit;
const Tours =await Tour.find().skip(startIndex).limit(limit);

//console.log(Tours)
return res.status(200).json(Tours);

}
catch(err) {
    next(err);
  }

}

TourController.SearchTour= async (req, res, next) => {
    const city = req.query.city
    const price = parseInt(req.query.price)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    try{
        const tours =await Tour.find({
            city,
            price: {$gte: price},
            maxGroupSize: {$gte: maxGroupSize}
        })
        return res.status(200).json(tours);
    }
    catch(err) {
        next(err);
      }

}


TourController.GetTour= async (req, res, next) => {
    const TourId = req.params.id
    console.log(TourId)
    try{
        const tour=await Tour.findById(TourId).populate({
            path: 'reviews',
            populate: {
                path: 'userID',
                model: 'users', // Ensure this matches the name of your User model
                select: 'name email' // Add other fields you need from the User model
            }
           
        });
        console.log(tour)
        return res.status(200).json(tour);
    }
    catch(err) {
        next(err);
      }
}

TourController.CreateTour = async (req, res, next) => {
    try {
        const { title, desc, address, distance, city, price, maxGroupSize } = req.body;
        const image = req.file;

        const newTour = new Tour({
            title,
            desc,
            photo: image.filename,
            address,
            distance,
            city,
            price,
            maxGroupSize
        });

        await newTour.save();
        return res.status(200).json({ message: "Tour created successfully", newTour });
    } catch (err) {
        next(err);
    }
};

TourController.DeleteTour= async(req,res,next)=>{
    try{
const tourId= req.params.id

await Tour.findByIdAndDelete(tourId)
return res.status(200).json({massage:"tour deleted successfully"})
    }
    catch(err){
        next(err);
    }
}


TourController.UpdateTour = async (req, res, next) => {
    try {
        console.log(req.body)
        const tourId = req.params.id;
        const tour = req.body;
        const image = req.file;

        if (image) {
            tour.photo = image.filename;
        }

        const updateTour = await Tour.findByIdAndUpdate(tourId, tour, { new: true });
        console.log(updateTour)

        return res.status(200).json({ message: "Tour updated successfully", updateTour });
    } catch (err) {
        next(err);
    }
};

module.exports = TourController;