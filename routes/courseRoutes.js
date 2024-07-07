import express from "express";
import {
  addLecture,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourseLectures,
  getAllCourses,
} from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeAdmin, authorizeSubscribers, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
// Get all course without lecture
router.route("/courses").get(getAllCourses);

//create new course only admin
router.route("/createcourse").post( isAuthenticated ,authorizeAdmin,singleUpload, createCourse);

//add lecture ,delete course  , get course detail
router
  .route("/course/:id")
  .get(isAuthenticated,authorizeSubscribers, getAllCourseLectures)
  .post(isAuthenticated,authorizeAdmin,singleUpload, addLecture)
  .delete(isAuthenticated, authorizeAdmin, deleteCourse);


// Delete Lecture
router.route("/lecture").delete(isAuthenticated, authorizeAdmin, deleteLecture);

export default router;
