import express from 'express';
import {createUser,getUser,updateUser,deleteUser  } from '../Contollers/info.js';


const router =express.Router();

router.post("/create-user",createUser);
router.get("/get-user",getUser );
router.put("/update-user/:id",updateUser );
router.delete("/delete-user/:id",deleteUser);

export default router;