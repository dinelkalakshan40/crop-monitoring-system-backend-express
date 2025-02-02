import express from "express";
import {
    deleteCropData,
    getAllCropData,
    getCropDataByCode,
    saveCropData,
    updateCropData
} from "../controllers/CropController";


const router=express.Router();
router.post('/saveCrop',saveCropData);
router.get("/getAllCrop", getAllCropData);
router.get("/:cropCode", getCropDataByCode);
router.put("/:cropCode", updateCropData);
router.delete("/:cropCode", deleteCropData);

export default router;