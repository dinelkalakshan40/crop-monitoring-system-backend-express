import Field from "../model/Field";
import { Request, Response } from "express";
import {createField} from "../services/FieldService";


export const saveField =async (req:Request,res:Response):Promise<any>=>{
    try{
        const fieldData:Field=req.body;

        const newField=await createField(fieldData);
        return res.status(201).json({
            massage:"field saved",
            data:newField
        });
    }catch (error) {
        return res.status(500).json({error:"internal server error"})
    }
};