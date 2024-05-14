import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'



const app = express();
dotenv.config();


//CONNECT
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connessione a MongoDB");
    } catch (error) {
        throw error;
    }
}; 


//DB CONNECTION TESTING RESPONSE
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnesso");
});
mongoose.connection.on("connected", () => {
    console.log("MongoDB Connesso");
});


//GET
app.get("/", (req,res) => {
    res.send("hello first request")
})



//MIDDLEWARE
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);


//middleware gestione errori
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Qualcosa è andato storto!!";
    return res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})


//Conenction Port
app.listen(8800, async () => {
    await connect()
    console.log(" Backend Connesso!");
});
