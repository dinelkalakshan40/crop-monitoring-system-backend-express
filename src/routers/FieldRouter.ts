import express from "express";
import {saveField} from "../controllers/FieldController";


const router=express.Router();
router.post("/saveField",saveField);

export default router;