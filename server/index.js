import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors';
import connectDB from './mongoDB/connect.js';



import userRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";




dotenv.config();

// !===========================INIT App
const app = express();

app.use(cors());
app.use(express.json({limit:'50mb'}))



// !===========================Server Check 
app.get('/',(req,res)=>{
    res.send({message:"hello server"});
})




app.use("/api/v1/users", userRouter);
app.use("/api/v1/properties", propertyRouter);








// !===========================Server Starts 
const startServer = async () => {
    try {
        app.listen(8080, () =>
            console.log("Server started on port http://localhost:8080"),
        );
        connectDB(process.env.MONGODB_URL);

    } catch (error) {
        console.log(error);
    }
};

startServer();