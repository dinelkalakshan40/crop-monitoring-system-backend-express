import express from "express";
import {savedStaffData} from "../controllers/StaffController";


const router=express.Router();
router.post("/saveStaff",savedStaffData);
export default router;