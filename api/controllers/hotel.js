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
        const hotels = await Hotel.find();
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
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
};