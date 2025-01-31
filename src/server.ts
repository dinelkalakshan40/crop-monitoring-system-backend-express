import express from 'express'
import fieldRoutes from "../src/routers/FieldRouter";

const app=express();
const port=3000;


app.use(express.json());
app.use('/api/v1',fieldRoutes);


app.listen(port,()=>{
    console.log('server is running')
})