import Field from "../model/Field";
import prisma from "../config/db";



export const createField=async (fieldData:Field)=>{
    return prisma.field.create({
        data: fieldData,
    });
};
export const getAll=async ()=>{
    return prisma.field.findMany();
}
