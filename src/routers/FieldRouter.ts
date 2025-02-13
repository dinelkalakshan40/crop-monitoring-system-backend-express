import express from "express";
import {deleteFieldByCode, getAllField, getFieldById, saveField, updateFieldDta} from "../controllers/FieldController";


const router=express.Router();
router.post("/saveField",saveField);
router.get("/getAllFields",getAllField);
router.get("/getFieldByCode/:id",getFieldById);
router.put("/updateField/:code",updateFieldDta);
router.delete("/deleteField/:code",deleteFieldByCode)

export default router;