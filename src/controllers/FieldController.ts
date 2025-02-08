import Field from "../model/Field";
import { Request, Response } from "express";
import {createField, deleteField, getAll, getField, updateField} from "../services/FieldService";


export const saveField =async (req:Request,res:Response):Promise<any>=>{
    console.log("Received request:", req.body);
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
export const getFieldById=async (req:Request,res:Response):Promise<any>=>{
    try {
        const {id}=req.params;
        const field=await getField(id);
        if (!field){
            return res.status(404).json({
                error:"field not found"
            });
        }else {
            return res.status(200).json({
                message: "Field found",
                data: field,
            })
        }
    }catch (error){
        return res.status(500).json({
            error: "Internal Server Error",
            details: error,
        })
    }
}
export const updateFieldDta=async (req:Request,res:Response):Promise<any>=>{
    try {
        const {code}=req.params;
        const fieldData:Partial<Field>=req.body;
        const updatedField=await updateField(code,fieldData);
        return res.status(200).json({
            message: "Field updated successfully",
            data: updatedField,
        });
    }catch (error){
        return res.status(500).json({
            error: "Internal Server Error",
            details: error,
        });
    }
}

export const deleteFieldByCode = async (req: Request, res: Response): Promise<any> => {
    try {
        const {code} = req.params;
        await deleteField(code);

        return res.status(200).json({
            message: "Field deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            error: "Internal Server Error",
            details: error,
        });
    }
};
