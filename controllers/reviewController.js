import Review from "../models/Review.js";
import Tour from "../models/Tour.js";



export const createReview = async (req, res) => {
    const tourId = req.params.tourId;
    const newReview = new Review({...req.body});
    try {
        const saveReview = await newReview.save();

        await Tour.findByIdAndUpdate(tourId,{
            $push:{reviews: saveReview.id}
        })

        res.status(200).json({ success: true, message: 'Review submitted',data:saveReview });
    } catch (error) {
        res.status(500).json({ success: true, message: 'failed to submit'});
    }
}   