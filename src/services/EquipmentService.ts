import prisma from "../config/db";
import Equipment from "../model/Equipment";


export const saveEquipment = async (equipmentData: Equipment) => {

    if (equipmentData.staffId) {
        const staffExists = await prisma.staff.findUnique({ where: { id: equipmentData.staffId } });
        if (!staffExists) throw new Error(`Staff with ID ${equipmentData.staffId} does not exist`);
    }

    if (equipmentData.fieldCode) {
        const fieldExists = await prisma.field.findUnique({ where: { code: equipmentData.fieldCode } });
        if (!fieldExists) throw new Error(`Field with code ${equipmentData.fieldCode} does not exist`);
    }

    // Save equipment data to the database
    return prisma.equipment.create({
        data: {
            equipmentCode: equipmentData.equipmentCode,
            name: equipmentData.name,
            type: equipmentData.type,
            availability: equipmentData.availability,
            staffId: equipmentData.staffId,
            fieldCode: equipmentData.fieldCode,
        },
    });
};
export const getAllEquipment = async () => {
    return prisma.equipment.findMany();
};
export const getEquipmentById = async (equipmentCode: string) => {
    return prisma.equipment.findUnique({
        where: { equipmentCode },
    });
};
export const updateEquipment = async (equipmentCode: string, updateData: Partial<Equipment>) => {
    return prisma.equipment.update({
        where: { equipmentCode },
        data: updateData,
    });
};
export const deleteEquipment = async (equipmentCode: string) => {
    return prisma.equipment.delete({
        where: { equipmentCode },
    });
};