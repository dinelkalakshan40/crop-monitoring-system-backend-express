import prisma from "../config/db";
import Vehicle from "../model/Vehicle";

export const saveVehicle = async (vehicle: Vehicle) => {
    return prisma.vehicle.create({ data: vehicle });
};

export const getAllVehicles = async () => {
    return prisma.vehicle.findMany();
};

export const getVehicleById = async (vehicleCode: string) => {
    return prisma.vehicle.findUnique({
        where: { vehicleCode }
    });
};

export const updateVehicle = async (vehicleCode: string, updatedData: Partial<Vehicle>) => {
    return prisma.vehicle.update({
        where: { vehicleCode },
        data: updatedData
    });
};


export const deleteVehicle = async (vehicleCode: string) => {
    return prisma.vehicle.delete({
        where: { vehicleCode }
    });
};