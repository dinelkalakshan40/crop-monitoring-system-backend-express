import {
    deleteVehicleData,
    getAllVehiclesData,
    getVehicleByIdData,
    saveVehicleData,
    updateVehicleData
} from "../controllers/VehicleController";
import express from "express";

const router=express.Router();


router.post("/saveVehicle", saveVehicleData);
router.get("/all", getAllVehiclesData);
router.get("/:vehicleCode", getVehicleByIdData);
router.put("/:vehicleCode", updateVehicleData);
router.delete("/:vehicleCode", deleteVehicleData);

export default router;