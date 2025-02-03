import express from "express";
import {
    deleteStaff,
    getAllStaffData,
    getStaffByIdData,
    savedStaffData,
    updateStaff
} from "../controllers/StaffController";


const router=express.Router();
router.post("/saveStaff",savedStaffData);
router.get("/allStaff", getAllStaffData);
router.get("/:id", getStaffByIdData);
router.put("/:id", updateStaff);
router.delete("/:id", deleteStaff);
export default router;