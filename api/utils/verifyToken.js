import jwt from "jsonwebtoken";
import { createError } from "./error.js";




//VERIFICA TOKEN
export const verifyToken = (req, res, next) => {
    const token = req.cookies && req.cookies.access_token;
    if (!token) {
        return next(createError(401, "NON SEI AUTH ZIO"));
    }
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) {
            return next(createError(403, "TOKEN NON VALIDO"));
        }
        req.user = user;
        next();
    });
};


//VERIFICA USER
export const verifyUser = (req,res,next)=>{
    verifyToken(req,res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(createError(403, "YOU ARE NOT AUTH"))
        }
    })
};


//VERIFICA ADMIN
export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
            return next(createError(403, "YOU ARE NOT AUTH"))
        }
    })
}