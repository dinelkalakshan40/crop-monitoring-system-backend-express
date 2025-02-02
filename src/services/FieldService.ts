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
export const getField=async(code:string)=>{
    return prisma.field.findUnique({
        where:{code:code}
    })
}
export const updateField=async (code:string,fieldData:Partial<Field>)=>{
    return prisma.field.update({
        where:{code:code},
        data:fieldData,
    });
};
export const deleteField=async (code:string)=>{
    return prisma.field.delete({
        where:{code:code},
    })
}