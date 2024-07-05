const Review = require('../Models/Review')
const Tour = require('../Models/Tour');
const ReviewController ={}

ReviewController.GetAllReview= async (req, res, next) => {

try{
const Reviews=Review.find()

return res.status(200).json(Reviews);

}
catch(err) {
    next(err);
  }

}


ReviewController.CreateReview= async(req,res,next)=>{
    try{
   const tourId= req.params.id   
   console.log(tourId)
   console.log(req.user)
   const { ReviewText, Rating } = req.body;
   
const userId=req.user.userId
const newReview = new Review({
    userID: userId,
    ReviewText,
    Rating
  });

  await newReview.save();
await Tour.findByIdAndUpdate(tourId, {
    $push: { reviews: newReview._id }
  });
return res.status(200).json({status:"ok", massage:"Review created successfully", newReview})
    }
    catch(err){
        next(err);
    }
}
ReviewController.DeleteReview= async(req,res,next)=>{
    try{
const reviewId= req.params.id
await Review.findByIdAndDelete(reviewId)
return res.status(200).json({massage:"Review deleted successfully"})
    }
    catch(err){
        next(err);
    }
}





module.exports = ReviewController;