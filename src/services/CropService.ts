import prisma from "../config/db";
import Crop from "../model/Crop";


export const saveCrop = async (cropData: Crop):Promise<any> => {
    return  prisma.crop.create({
        data: {
            cropCode: cropData.cropCode,
            name: cropData.name,
            category: cropData.category,
            status: cropData.status,
            season: cropData.season,
            field: { connect: { code: cropData.fieldCode } },
        },
    });
};
