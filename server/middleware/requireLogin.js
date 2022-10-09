import jwt from 'jsonwebtoken';
import {SecretValues} from "../keys.js";
import mongoose from "mongoose";
import "../models/user.js";

const User = mongoose.model("User");

export const requireLogin = (req,res,next) =>{
   const {authorization} = req.headers;
   if(!authorization){
    return res.status(401).json({error:"You must be logged in!"})
   }

   const token = authorization.replace("Bearer ","")
   jwt.verify(token,SecretValues,(err,payload)=>{
    if(err){
      return  res.status(401).json({error:"ou must be logged in!"});
    }
    const {_id} =payload;
    User.findById(_id).then(userdata=>{
        req.user = userdata;
        console.log("userdata:"+userdata)
        next()
    }) 
   })
}


