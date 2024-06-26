import mongoose from "mongoose";


const  { Schema } = mongoose;
//MIGRATION
const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    maxPeople: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    roomNumbers: [{ 
        number:Number, 
        unavailableDates: { type: [Date] } 
    }],
    
},{timestamps: true,});



export default mongoose.model("Room", RoomSchema)

