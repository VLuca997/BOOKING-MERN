import User from "../models/User.js"
import { createError } from '../utils/error.js';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';


//REGISTER
export const register = async (req, res, next) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            password: hash,
            email: req.body.email,
            
        });

        await newUser.save();
        res.status(200).send("UTENTE CREATO CON SUCCESSO");
    } catch (err) {
        next(err);
    }
};

//LOGIN
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return next(createError(404, "UTENTE NON TROVATO"));
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return next(createError(400, "Credenziali non corrette"));
        }
        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT);
        
        // Imposta il cookie
        res.cookie("access_token", token, {
            httpOnly: true,
        });

        // Invia la risposta con i dettagli dell'utente
        const { password, isAdmin, ...otherDetails } = user._doc;
        res.status(200).json({ ...otherDetails });
    } catch (err) {
        next(err);
    }
};
