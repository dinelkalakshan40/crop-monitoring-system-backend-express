import express from 'express'
import fieldRoutes from "../src/routers/FieldRouter";
import cropRouter from "./routers/CropRouter";
import staffRouter from "./routers/StaffRouter";
import equipmentRouter from "./routers/EquipmentRouter";
import vehicleRouter from "./routers/VehicleRouter";

const app=express();
const port=3000;


app.use(express.json());
app.use('/api/v1',fieldRoutes);
app.use('/api/v1/crop',cropRouter)
app.use('/api/v1/staff',staffRouter)
app.use('/api/v1/equipment',equipmentRouter)
app.use('/api/v1/vehicle',vehicleRouter)

app.listen(port,()=>{
    console.log('server is running')
})