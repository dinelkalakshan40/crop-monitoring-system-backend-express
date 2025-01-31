import {PrismaClient} from "@prisma/client"
import Field from "../model/Field";
import {create} from "node:domain";

const prisma =new PrismaClient();

export const createField=async (fieldData:Field)=>{
    return await prisma.field.create({
        data:fieldData,
    });
};