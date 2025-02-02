import Crop from "../model/Crop";
import {Request, Response} from "express";
import {deleteCropByCode, getAllCrops, getCropByCode, saveCrop, updateCropByCode} from "../services/CropService";
import express from "express";


export const saveCropData = async (req: Request, res: Response): Promise<any> => {
    try {
        const cropData: Crop = req.body;

        const newCrop = await saveCrop(cropData);

        return res.status(201).json({
            message: "Crop saved successfully",
            data: newCrop
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internal Server Error", details: error});
    }
};
export const getAllCropData = async (req: Request, res: Response): Promise<void> => {
    try {
        const crops = await getAllCrops();

        res.status(200).json({
            message: "Crops fetched successfully",
            data: crops
        });
    } catch (error) {
        console.error("Error fetching crops:", error);
        res.status(500).json({error: "Internal Server Error"});
    }
};
export const getCropDataByCode = async (req: Request, res: Response): Promise<any> => {
    try {
        const { cropCode } = req.params;

        if (!cropCode) {
            return res.status(400).json({ error: "Crop code is required" });
        }

        const crop = await getCropByCode(cropCode);

        if (!crop) {
            return res.status(404).json({ error: "Crop not found" });
        }

        res.status(200).json({
            message: "Crop fetched successfully",
            data: crop
        });
    } catch (error) {
        console.error("Error fetching crop:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
export const updateCropData = async (req: Request, res: Response): Promise<any> => {
    try {
        const { cropCode } = req.params;
        const updatedCropData = req.body;

        const updatedCrop = await updateCropByCode(cropCode, updatedCropData);

        res.status(200).json({
            message: "Crop updated successfully",
            data: updatedCrop
        });
    } catch (error) {

        console.error("Error updating crop:", error);
        res.status(500).json({ error: "Internal Server Error"});
    }
};
export const deleteCropData = async (req: Request, res: Response): Promise<any> => {
    try {
        const { cropCode } = req.params;

        await deleteCropByCode(cropCode);

        res.status(200).json({ message: `Crop ${cropCode} deleted successfully.` });
    } catch (error) {
        console.error("Error deleting crop:", error);
        res.status(500).json({ error: "Internal Server Error"});
    }
};


