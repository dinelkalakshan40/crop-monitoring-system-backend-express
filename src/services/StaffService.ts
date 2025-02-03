import Field from "../model/Field";
import prisma from "../config/db";
import Staff from "../model/Staff";

export const savedStaff=async (staffData:Staff)=>{
    const existingStaff = await prisma.staff.findUnique({
        where: { id: staffData.id }
    });
    if (existingStaff) {
        throw new Error("Staff ID already exists");
    }
    //check field
    const fieldExists = await prisma.field.findUnique({
        where: { code: staffData.fieldCode }
    });

    if (!fieldExists) {
        throw new Error("Assigned field does not exist");
    }
    return prisma.staff.create({
        data: {
            id: staffData.id,
            name: staffData.name,
            Designation: staffData.Designation,
            gender: staffData.gender,
            dob: staffData.dob,
            contact: staffData.contact,
            role: staffData.role,
            field: { connect: { code: staffData.fieldCode } }
        }
    });
};