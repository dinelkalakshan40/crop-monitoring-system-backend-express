import {
    deleteEquipment,
    getAllEquipment,
    getEquipmentById,
    saveEquipment,
    updateEquipment
} from "../services/EquipmentService";
import Equipment from "../model/Equipment";
import {Request,Response} from "express";


export const saveEquipmentData = async (req: Request, res: Response): Promise<any> => {
    try {
        const equipmentData:Equipment = req.body;

        const newEquipment = await saveEquipment(equipmentData);

        return res.status(201).json({
            message: "Equipment saved successfully",
            data: newEquipment,
        });
    } catch (error: any) {
        console.error("Error saving equipment:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
export const getAllEquipmentData = async (req: Request, res: Response): Promise<any> => {
    try {
        const equipmentList = await getAllEquipment();

        return res.status(200).json({
            message: "Equipment retrieved successfully",
            data: equipmentList,
        });
    } catch (error: any) {
        console.error("Error retrieving equipment:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
export const getEquipmentByIdData = async (req: Request, res: Response): Promise<any> => {
    try {
        const { equipmentCode } = req.params;

        const equipment = await getEquipmentById(equipmentCode);

        if (!equipment) {
            return res.status(404).json({ message: "Equipment not found" });
        }

        return res.status(200).json({
            message: "Equipment retrieved successfully",
            data: equipment,
        });
    } catch (error: any) {
        console.error("Error retrieving equipment:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
export const updateEquipmentData = async (req: Request, res: Response): Promise<any> => {
    try {
        const { equipmentCode } = req.params;
        const updateData = req.body;

        const updatedEquipment = await updateEquipment(equipmentCode, updateData);

        return res.status(200).json({
            message: "Equipment updated successfully",
            data: updatedEquipment,
        });
    } catch (error: any) {
        console.error("Error updating equipment:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
export const deleteEquipmentData = async (req: Request, res: Response): Promise<any> => {
    try {
        const { equipmentCode } = req.params;

        await deleteEquipment(equipmentCode);

        return res.status(200).json({
            message: "Equipment deleted successfully",
        });
    } catch (error: any) {
        console.error("Error deleting equipment:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};