import express from "express";
import { login, register,logout, getMyProfile, changePassword, updateProfile, updateprofilepicture,  resetPassword, forgetPassword, addToPlaylist, removeFromPlaylist, getAllUsers, updateUserRole, deleteUser, deleteMyProfile } from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";


const router = express.Router();

//to register a new user 
router.route("/register").post(singleUpload, register);

//login
router.route("/login").post(login);
//logout
router.route("/logout").get(logout);
//Get my profile 
router.route("/me").get( isAuthenticated,  getMyProfile);

// Delete my profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);

//change password
router.route("/changepassword").put( isAuthenticated,  changePassword);
//update profile
router.route("/updateprofile").put( isAuthenticated,  updateProfile);
//update profile picture 
// UpdateProfilePicture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateprofilepicture);
//forgetpassword
router.route("/forgetpassword").post(  forgetPassword);

//reset password
router.route("/resetpassword/:token").put( resetPassword);

//add to playlist 
router.route("/addtoplaylist").post( isAuthenticated,addToPlaylist);

//remove from playlist
router.route("/removefromplaylist").delete( isAuthenticated,removeFromPlaylist);

// Admin Routes
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);

router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorizeAdmin, updateUserRole)
  .delete(isAuthenticated, authorizeAdmin, deleteUser);



export default router;