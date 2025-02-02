import Crop from "../model/Crop";
import { Request, Response } from "express";
import {saveCrop} from "../services/CropService";
import express from "express";


export const saveCropData = async (req: Request, res: Response):Promise<any> => {
    try {
        const cropData: Crop = req.body;

        const newCrop = await saveCrop(cropData);

        return res.status(201).json({
            message: "Crop saved successfully",
            data: newCrop
        });
    } catch (error) {
        console.error(error);
        return  res.status(500).json({ error: "Internal Server Error", details: error });
    }
};

