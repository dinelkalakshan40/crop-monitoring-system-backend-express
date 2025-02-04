import {deleteVehicle, getAllVehicles, getVehicleById, saveVehicle, updateVehicle} from "../services/VehicleService";
import {Response,Request} from "express";


export const saveVehicleData = async (req: Request, res: Response): Promise<any> => {
    try {
        const vehicle = req.body;
        const newVehicle = await saveVehicle(vehicle);

        return res.status(201).json({
            message: "Vehicle saved successfully",
            data: newVehicle
        });
    } catch (error: any) {
        console.error("Error saving vehicle:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
export const getAllVehiclesData = async (req: Request, res: Response): Promise<any> => {
    try {
        const vehicles = await getAllVehicles();
        return res.status(200).json(vehicles);
    } catch (error: any) {
        console.error("Error retrieving vehicles:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

export const getVehicleByIdData = async (req: Request, res: Response): Promise<any> => {
    try {
        const { vehicleCode } = req.params;
        const vehicle = await getVehicleById(vehicleCode);

        if (!vehicle) {
            return res.status(404).json({ error: "Vehicle not found" });
        }

        return res.status(200).json(vehicle);
    } catch (error: any) {
        console.error("Error retrieving vehicle:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

export const updateVehicleData = async (req: Request, res: Response): Promise<any> => {
    try {
        const { vehicleCode } = req.params;
        const updatedVehicle = await updateVehicle(vehicleCode, req.body);

        return res.status(200).json({
            message: "Vehicle updated successfully",
            data: updatedVehicle
        });
    } catch (error: any) {
        console.error("Error updating vehicle:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

export const deleteVehicleData = async (req: Request, res: Response): Promise<any> => {
    try {
        const { vehicleCode } = req.params;

        await deleteVehicle(vehicleCode);

        return res.status(200).json({
            message: "Vehicle deleted successfully"
        });
    } catch (error: any) {
        console.error("Error deleting vehicle:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};