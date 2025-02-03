import Staff from "../model/Staff";
import {Request,Response} from "express";
import {savedStaff} from "../services/StaffService";


export const savedStaffData=async (req:Request,res:Response):Promise<any>=>{
    try{
        const staffData:Staff=req.body;
        const newStaff=await savedStaff(staffData);
        res.status(201).json({
            msg:"Staff Saved",
            staff:newStaff
        })
    }catch (error){
        res.status(500).json({
            error: "Internal Server Error",
            details: "Internal Server Error"
        })
    }
}