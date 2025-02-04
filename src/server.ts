import express from 'express'
import fieldRoutes from "../src/routers/FieldRouter";
import cropRouter from "./routers/CropRouter";
import staffRouter from "./routers/StaffRouter";
import equipmentRouter from "./routers/EquipmentRouter";

const app=express();
const port=3000;


app.use(express.json());
app.use('/api/v1',fieldRoutes);
app.use('/api/v1/crop',cropRouter)
app.use('/api/v1/staff',staffRouter)
app.use('/api/v1/equipment',equipmentRouter)


app.listen(port,()=>{
    console.log('server is running')
})