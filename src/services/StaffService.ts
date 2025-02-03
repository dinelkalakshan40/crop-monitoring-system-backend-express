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
export const getAllStaff = async () => {
    return prisma.staff.findMany();
};
export const getStaffById = (id: string) => {
    return prisma.staff.findUnique({
        where: { id },
        include: {
            field: true // Includes field details in the response
        }
    });
};
export const updateStaffMember = async (id: string, staffData: Partial<Staff>) => {
    // Check if the staff member exists before updating
    const existingStaff = await prisma.staff.findUnique({
        where: { id },
    });

    if (!existingStaff) {
        throw new Error(`Staff member with ID ${id} not found.`);
    }

    // Update the staff member
    return prisma.staff.update({
        where: { id },
        data: staffData,
    });
};
export const deleteStaffMember = async (id: string) => {

    const existingStaff = await prisma.staff.findUnique({
        where: { id },
    });

    if (!existingStaff) {
        throw new Error(`Staff member with ID ${id} not found.`);
    }
    return prisma.staff.delete({
        where: { id },
    });
};