import Field from "../model/Field";
import { Request, Response } from "express";
import {createField,getAll} from "../services/FieldService";


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
export const getAllField =async (req:Request,res:Response):Promise<any>=>{
    try {
        const fields=await getAll();
        return res.status(201).json({
            msg:"get All field",
            data:fields
        })
    }catch (error){
        return res.status(500).json({
            error:"sever error",
            detail:error
        })
    }
}