import express from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';


const router = express.Router();
// //AUTH
// router.get("/ceckauthentication", verifyToken,(req,res,next)=>{
//     res.send("hello user, ur logged")
// })


// //USERS
// router.get("/checkuser/:id", verifyUser,(req,res,next)=>{
//     res.send("hello userID")
// })


// //ADMIN
// router.get("/checkadmin/:id", verifyAdmin,(req,res,next)=>{
//     res.send("hello ADMIN")
// })



//CRUD ROUTES----------------------------------
//CREATE
router.post("/",verifyUser, createUser);

//UPDATE
router.put("/:id",verifyUser,updateUser);

//DELETE
router.delete("/:id",verifyUser,deleteUser);

//GET-SINGLE
router.get("/:id",verifyAdmin, getUser);

//GET-ALL
router.get("/", getUsers);



export default router;
