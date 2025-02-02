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
export const getAllCrops=async ()=>{
    return prisma.crop.findMany()
}
export const getCropByCode = async (cropCode: string) => {
    return await prisma.crop.findUnique({
        where: { cropCode },
    });
};
export const updateCropByCode = async (cropCode: string, updatedData: any) => {
    return await prisma.crop.upsert({
        where: { cropCode },
        update: updatedData,
        create: {
            cropCode,
            ...updatedData
        }
    });
};
export const deleteCropByCode = async (cropCode: string) => {
    return prisma.crop.delete({
        where: { cropCode }
    });
};