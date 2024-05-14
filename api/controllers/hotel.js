import { createError } from '../utils/error.js';
import Hotel from '../models/Hotel.js';
import { query } from 'express';



//CREATED
export const createHotel = async (req, res, next) => {
    try {
        const newHotel = new Hotel(req.body);
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
};

//UPDATE
export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }
};


//DELETE
export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Rimozione Hotel");
    } catch (err) {
        next(err);
    }
};

//SHOW
export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
};


//SHOW ALL
export const getHotels = async (req, res, next) => {
    try {
        const { featured, limit, min, max, ...others } = req.query;
        const parsedLimit = parseInt(limit);

        //FILTRAGGIO PER PARAMETRO
        const hotels = await Hotel.find({ 

            featured: featured === 'true',
            ...others, 
            cheapestPrice: { $gte: min || 1, $lt: max || 9999,} 

        }).limit(parsedLimit);//LIMITE DI STAMPA PER DECIDERE QUANTI STAMPARNE
        
        res.status(200).json(hotels);

    } catch (err) {
        next(err);
    }
};

//SHOW ALL BY CITY
export const countByCity = async (req, res, next) => {

    const cities = req.query.cities.split(",")
    try {

        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city});// countDocuments mongodb Methods
        }))

        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};

//SHOW ALL BY TYPE
export const countByType = async (req, res, next) => {

    try {
        const hotelCount = await Hotel.countDocuments({type:"hotel"});
        const apartmentCount = await Hotel.countDocuments({type:"apartment"});
        const resortCount = await Hotel.countDocuments({type:"resort"});
        const villaCount = await Hotel.countDocuments({type:"villa"});
        const cabinCount = await Hotel.countDocuments({type:"cabin"});

    

        res.status(200).json([
            { type: "hotel", count: hotelCount },
            { type: "apartment", count: apartmentCount },
            { type: "resort", count: resortCount },
            { type: "villa", count: villaCount },
            { type: "cabin", count: cabinCount },
        ]);
    } catch (err) {
        next(err);
    }
};

