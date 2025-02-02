import express from "express";
import {saveCropData} from "../controllers/CropController";


const router=express.Router();
router.post('/saveCrop',saveCropData);



export default router;