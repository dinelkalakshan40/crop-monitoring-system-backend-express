import express from "express";
import {savedStaffData} from "../controllers/StaffController";
import {
    deleteEquipmentData,
    getAllEquipmentData,
    getEquipmentByIdData,
    saveEquipmentData,
    updateEquipmentData
} from "../controllers/EquipmentController";


const router=express.Router();
router.post('/save',saveEquipmentData);
router.get("/all", getAllEquipmentData);
router.get("/:equipmentCode", getEquipmentByIdData);
router.put("/:equipmentCode", updateEquipmentData);
router.delete("/:equipmentCode", deleteEquipmentData);

export default router;