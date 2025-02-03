import Staff from "../model/Staff";
import {Request,Response} from "express";
import {deleteStaffMember, getAllStaff, getStaffById, savedStaff, updateStaffMember} from "../services/StaffService";
import {getAllCrops} from "../services/CropService";


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
export const getAllStaffData = async (req: Request, res: Response): Promise<void> => {
    try {
        const staff = await getAllStaff();

        res.status(200).json({
            message: "Staff retrieved successfully",
            data: staff
        });
    } catch (error) {
        console.error("Error retrieving staff:", error);
        res.status(500).json({ error: "Internal Server Error", details: error });
    }
};
export const getStaffByIdData = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const staff = await getStaffById(id);

        if (!staff) {
            return res.status(404).json({ message: "Staff member not found" });
        }

        res.status(200).json({
            message: "Staff member retrieved successfully",
            data: staff
        });
    } catch (error) {
        console.error("Error retrieving staff:", error);
        res.status(500).json({ error: "Internal Server Error", details: error});
    }
};
export const updateStaff = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params; // Get staff ID from request params
        const staffData = req.body; // Get update data from request body

        const updatedStaff = await updateStaffMember(id, staffData);

        return res.status(200).json({
            message: "Staff member updated successfully",
            data: updatedStaff
        });
    } catch (error: any) {
        return res.status(500).json({
            error: "Internal Server Error",
            details: error.message,
        });
    }
};
export const deleteStaff = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params; // Get staff ID from request params

        await deleteStaffMember(id);

        return res.status(200).json({
            message: `Staff member with ID ${id} deleted successfully`,
        });
    } catch (error: any) {
        return res.status(500).json({
            error: "Internal Server Error",
            details: error.message,
        });
    }
};