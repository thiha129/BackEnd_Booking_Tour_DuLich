import User from '../models/User.js';
import Booking from "../models/Booking.js"


// create new User 
export const createUser = async (req, res) => {

    const newUser = new User(req.body);

    try {
        const saveUser = await newUser.save();

        res.status(200).json({ success: true, message: 'Successfully created', data: saveUser });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to create. Try again' });

    }
}

//update User
export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updateUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        res.status(200).json({
            success: true,
            message: 'Successfully updated',
            data: updateUser
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'failed to update',
        })
    }
};
//delete User
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: 'Successfully deleted',
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'failed to delete',
        })
    }
};
//getSingle User
export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    try {
        const user = await Booking.find({userId:id}).populate('tours');
        console.log(user);
        res.status(200).json({
            success: true,
            message: 'Successfull',
            data: user
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'not found',
        })
    }
};
//getAll User
export const getAllUser = async (req, res) => {


    try {
        const users = await User.find({});

        res.status(200).json({
            success: true,
            message: 'Successfull',
            data: users
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'not found',
        })
    }
};

// get booking of user 

export const getUserBooking = async (req, res) => {
    const userId = req.params.id;
// console.log(req.body._id);       
    try {
        const book =await  Booking.find({ userId: userId })
        console.log("-----------------------");
        console.log(book);
        res.status(200).json({
            success: true,
            message: 'Successfull',
            data: book
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'not found',
        })
    }
};