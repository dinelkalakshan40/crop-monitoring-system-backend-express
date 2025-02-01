import express from "express";
import {getAllField, saveField} from "../controllers/FieldController";


const router=express.Router();
router.post("/saveField",saveField);
router.get("/getAllField",getAllField)

export default router;