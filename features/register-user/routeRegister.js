import express from "express";
import {
  addEmployee,
  detailsOfEmployee,
  getSingleEMployeeDetails,
  updateEmployeeInfo,
  userProfile,
} from "./controller.js";

const router = express.Router();

router.get("/getSingleEMployeeDetails", getSingleEMployeeDetails);

router.post("/register", addEmployee);

router.get("/detailsOfEmployee", detailsOfEmployee);

router.put("/employeeUpdate/:id", updateEmployeeInfo);

router.get("/getSingleEmployee/:email", userProfile);
export default router;
