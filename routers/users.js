import express from "express";
import {
    updateUser,
    deleteUser,
    getSingleUser,
    getAllUser,
    getUserBooking
} from "../controllers/useController.js";
const router = express.Router();

import {verifyAdmin, verifyUser} from "../utils/verifyToken.js"; 

//update user
router.put('/:id',verifyUser, updateUser);

//delete user
router.delete('/:id',verifyUser, deleteUser);

//get single user
router.get('/:id', getSingleUser);

//get all users
router.get('/',verifyAdmin, getAllUser);

// get booking of user 
// router.get('/:id', getUserBooking);

export default router;